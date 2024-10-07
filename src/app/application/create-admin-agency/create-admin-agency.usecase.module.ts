import { Module } from '@nestjs/common';
import { CreateAdminAgencyUseCase } from './create-admin-agency.usecase';
import { UserRepositoryModule } from '../../infrastructure/repositories/user.repository.module';

@Module({
  imports: [UserRepositoryModule],
  providers: [CreateAdminAgencyUseCase],
  exports: [CreateAdminAgencyUseCase],
})
export class CreateAdminAgencyUseCaseModule {}
