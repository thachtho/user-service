import { Module } from '@nestjs/common';
import { CreateAdminAgencyHandler } from './create-admin-agency-handler';
import { CreateAdminAgencyUseCaseModule } from '../../../application/create-admin-agency/create-admin-agency.usecase.module';

@Module({
  imports: [CreateAdminAgencyUseCaseModule],
  providers: [CreateAdminAgencyHandler],
  exports: [CreateAdminAgencyHandler],
})
export class CreateAdminAgencyHandlerModule {}
