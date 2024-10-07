import { throwError } from 'rxjs';
import { UserEntity } from '../model/user-entity';
import {
  Role,
  TypeCreateUser,
  UserFactoryArg,
  passwordDefault,
} from './user.factory.i';

export class UserFactory {
  createUser(type: TypeCreateUser, arg: UserFactoryArg) {
    arg.password = this.hashPassword();

    try {
      switch (type) {
        case 'adminAgency':
          const adminAgency = {
            ...arg,
            roleId: Role.ADMIN_AGENCY,
            fullname: arg.nickname,
          };

          return new UserEntity(adminAgency);
        case 'teacher':
          const teacher = { ...arg, roleId: Role.TEACHER };
          return new UserEntity(teacher);
        case 'student':
          const student = { ...arg, roleId: Role.STUDENT };
          return new UserEntity(student);
        default:
          break;
      }
    } catch (error) {
      throwError(() => error);
    }
  }

  updateUser() {}

  hashPassword() {
    return passwordDefault;
  }
}
