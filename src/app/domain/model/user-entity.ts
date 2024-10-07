import { validator } from '../../common/validator';
import { userEntitySchema } from './user-entity.guard';
import { UserEntityArg } from './user-entity.i';

export class UserEntity {
  private id: number | null;
  private email?: string;
  private nickname: string;
  private fullname?: string;
  private password: string;
  private roleId: number;
  private agencyId: number;

  constructor(arg: UserEntityArg) {
    const valid = this.isValidate(arg);

    if (!valid.status) {
      throw new Error(`${valid.errorsMessage}`);
    }

    this.id = arg.id;
    this.email = arg.email;
    this.nickname = arg.nickname;
    this.fullname = arg.fullname;
    this.password = arg.password;
    this.roleId = arg.roleId;
    this.agencyId = arg.agencyId;
  }

  getAllProperties() {
    return {
      id: this.id || null,
      email: this.email || null,
      nickname: this.nickname || null,
      fullname: this.fullname || null,
      password: this.password,
      roleId: this.roleId,
      agencyId: this.agencyId,
    };
  }

  getRole() {}

  getPermissions() {}

  isValidate(payload: UserEntityArg) {
    return validator(payload, userEntitySchema);
  }
}
