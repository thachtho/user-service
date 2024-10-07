import { Module } from '@nestjs/common';
import { CreateUserUseCaseModule } from '../../../application/create-user/create-user.usecase.module';
import { CreateAdminAgencyHandler } from './create-admin-agency-handler';

@Module({
  imports: [CreateUserUseCaseModule],
  providers: [CreateAdminAgencyHandler],
  exports: [CreateAdminAgencyHandler],
})
export class CreateAdminAgencyHandlerModule {}
