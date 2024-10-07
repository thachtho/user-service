import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { of, switchMap } from 'rxjs';
import { UserRepository } from '../../infrastructure/repositories/user.repository';
import { UserFromDB } from '../../infrastructure/repositories/user.repository.i';
import { UserUpdateArg, UserUpdateEntity } from './update-user.usecase.i';

@Injectable()
export class UpdateUserUseCase {
  constructor(private readonly repository: UserRepository) {}

  excute(payload: UserUpdateArg) {
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

        throw new HttpException('User Notfound!', HttpStatus.NOT_FOUND);
      }),
    );
  }
}
