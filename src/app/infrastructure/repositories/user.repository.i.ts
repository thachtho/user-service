export interface IUserEntity {
  id?: number;
  nickname: string;
  fullname: string;
  password: string;
  email?: string;
  roleId: number;
  agencyId: number;
}
