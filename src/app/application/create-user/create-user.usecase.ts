import { Injectable } from '@nestjs/common';
import { TypeCreateUser } from '../../controllers/message/kafka.controler.i';
import { UserFactory } from '../../domain/factory/user.factory';
import { UserRepository } from '../../infrastructure/repositories/user.repository';
import { of, switchMap } from 'rxjs';
import { UserService } from '../../infrastructure/services/user.service';
import {
  CreateAdminAgencyUseCaseArg,
  CreateTeacherOrStudentUseCaseArg,
} from './create-user.usecase.i';

@Injectable()
export class CreateUserUseCase {
  constructor(
    private readonly repository: UserRepository,
    private readonly service: UserService,
  ) {}

  excute(
    payload: CreateAdminAgencyUseCaseArg | CreateTeacherOrStudentUseCaseArg,
    type: TypeCreateUser,
  ) {
    switch (type) {
      case 'adminAgency':
        const userEntity = new UserFactory().createUser(
          type,
          payload as CreateAdminAgencyUseCaseArg,
        );
        return this.repository.createUser(userEntity.getAllProperties());
      case 'teacher':
      case 'student':
        return of(null).pipe(
          switchMap(() =>
            this.service.createNickname(
              (payload as CreateTeacherOrStudentUseCaseArg).fullname,
            ),
          ),
          switchMap((nickname: string) => {
            const userEntity = {
              ...(payload as CreateTeacherOrStudentUseCaseArg),
              nickname,
            };
            const user = new UserFactory().createUser(type, userEntity);

            return this.repository.createUser(user.getAllProperties());
          }),
        );
      default:
        break;
    }
  }
}
