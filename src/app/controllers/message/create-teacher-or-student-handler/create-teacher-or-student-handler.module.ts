import { Module } from '@nestjs/common';
import { CreateTeacherOrStudentHandler } from './create-teacher-or-student-handler';
import { CreateUserUseCaseModule } from '../../../application/create-user/create-user.usecase.module';

@Module({
  imports: [CreateUserUseCaseModule],
  providers: [CreateTeacherOrStudentHandler],
  exports: [CreateTeacherOrStudentHandler],
})
export class CreateTeacherOrStudentHandlerModule {}
