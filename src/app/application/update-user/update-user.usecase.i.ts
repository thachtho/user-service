import { UserFromDB } from '../../infrastructure/repositories/user.repository.i';

export interface UserUpdateArg {
  id: number;
  nickname?: string;
  fullname?: string;
  password?: string;
  email?: string;
  roleId?: number;
  agencyId?: number;
}

export interface UserUpdateEntity extends UserFromDB {}
