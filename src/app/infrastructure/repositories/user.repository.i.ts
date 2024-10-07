export interface IUserEntity {
  id?: number;
  nickname: string;
  fullname: string;
  password: string;
  email?: string;
  roleId: number;
  agencyId: number;
}

export interface UserFromDB {
  id: number;
  nickname: string;
  fullname: string;
  password: string;
  email: string;
  roleId: number;
  agencyId: number;
}
