import { Module } from '@nestjs/common';
import { UserRepositoryModule } from '../../infrastructure/repositories/user.repository.module';
import { GetUserByNicknameUseCase } from './get-user.usecase';

@Module({
  imports: [UserRepositoryModule],
  providers: [GetUserByNicknameUseCase],
  exports: [GetUserByNicknameUseCase],
})
export class GetUserByNicknameUseCaseModule {}
