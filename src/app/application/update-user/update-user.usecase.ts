import { HttpException, HttpStatus, Injectable, Logger } from '@nestjs/common';
import { of, switchMap } from 'rxjs';
import { UserRepository } from '../../infrastructure/repositories/user.repository';
import { UserFromDB } from '../../infrastructure/repositories/user.repository.i';
import { UserUpdateArg, UserUpdateEntity } from './update-user.usecase.i';

@Injectable()
export class UpdateUserUseCase {
  private readonly logger = new Logger(UpdateUserUseCase.name);

  constructor(private readonly repository: UserRepository) {}

  excute(payload: UserUpdateArg) {
    this.logger.debug(
      `Run in ${UpdateUserUseCase.name}, funtion: ${UpdateUserUseCase.prototype.excute.name}, params: ${JSON.stringify(payload)}`,
    );
    const { id } = payload;

    return of(null).pipe(
      switchMap(() => {
        return this.repository.getUserById(+id);
      }),
      switchMap((user: UserFromDB) => {
        if (user) {
          const userUpdate: UserUpdateEntity = {
            id: payload.id ?? user.id,
            nickname: payload.nickname ?? user.nickname,
            fullname: payload.fullname ?? user.fullname,
            email: payload.email ?? user.email,
            password: payload.password ?? user.password,
            roleId: payload.roleId ?? user.roleId,
            agencyId: payload.agencyId ?? user.agencyId,
          };

          return this.repository.updateUser(userUpdate);
        }
        this.logger.error(
          `Run in ${UpdateUserUseCase.name}, funtion: ${UpdateUserUseCase.prototype.excute.name}, error: User Notfound!`,
        );
        throw new HttpException('User Notfound!', HttpStatus.NOT_FOUND);
      }),
    );
  }
}
