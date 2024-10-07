export type TypeCreateUser = 'adminAgency' | 'teacher' | 'student';
export enum Role {
  ADMIN_AGENCY = 2,
  TEACHER = 3,
  STUDENT = 4,
}

export interface UserFactoryArg {
  id?: number;
  nickname?: string;
  fullname?: string;
  password?: string;
  email?: string;
  roleId?: number;
  agencyId: number;
}

export const passwordDefault = '111111';
