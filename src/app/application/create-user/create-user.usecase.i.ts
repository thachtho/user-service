import {
  CreateAdminAgencyArg,
  CreateTeacherOrStudentArg,
} from '../../controllers/message/kafka.controler.i';

export interface CreateAdminAgencyUseCaseArg extends CreateAdminAgencyArg {}
export interface CreateTeacherOrStudentUseCaseArg
  extends CreateTeacherOrStudentArg {}
