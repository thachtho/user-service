export type TypeCreateUser = 'adminAgency' | 'teacher' | 'student';
export enum Role {
  ADMIN_AGENCY = 1,
  TEACHER = 2,
  STUDENT = 3,
}

export interface UserFactoryArg {
  id?: number;
  nickname: string;
  fullname?: string;
  password?: string;
  email?: string;
  roleId?: number;
  agencyId: number;
}

export const passwordDefault = '111111';
