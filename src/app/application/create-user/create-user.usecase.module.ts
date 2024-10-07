import { Module } from '@nestjs/common';
import { CreateUserUseCase } from './create-user.usecase';
import { UserRepositoryModule } from '../../infrastructure/repositories/user.repository.module';
import { UserServiceModule } from '../../infrastructure/services/user.module';

@Module({
  imports: [UserRepositoryModule, UserServiceModule],
  providers: [CreateUserUseCase],
  exports: [CreateUserUseCase],
})
export class CreateUserUseCaseModule {}
