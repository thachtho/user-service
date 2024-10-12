import { IsNotEmpty, IsString } from 'class-validator';

export enum UserType {
  ADMIN_AGENCY = 'adminAgency',
  TEACHER = 'teacher',
  STUDENT = 'student',
}
export class ParamsNickNameDTO {
  @IsNotEmpty()
  @IsString()
  nickname: string;
}

export class TypeGetUserDto {
  @IsNotEmpty()
  typeGet: string;

  @IsNotEmpty()
  organizationId: string;
}
