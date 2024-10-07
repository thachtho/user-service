import { Module } from '@nestjs/common';
import { UserRepositoryModule } from '../../infrastructure/repositories/user.repository.module';
import { GetUserDetailUseCase } from './get-detail.usecase';

@Module({
  imports: [UserRepositoryModule],
  providers: [GetUserDetailUseCase],
  exports: [GetUserDetailUseCase],
})
export class GetUserDetaiUseCaseModule {}
