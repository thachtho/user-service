import { Module } from '@nestjs/common';
import { UpdateUserUseCase } from './update-user.usecase';
import { UserRepositoryModule } from '../../infrastructure/repositories/user.repository.module';

@Module({
  imports: [UserRepositoryModule],
  providers: [UpdateUserUseCase],
  exports: [UpdateUserUseCase],
})
export class UpdateUserUseCaseModule {}
