import { Module } from '@nestjs/common';
import { UserRepositoryModule } from '../../infrastructure/repositories/user.repository.module';
import { FindAllUseCase } from './find.usecase';

@Module({
  imports: [UserRepositoryModule],
  providers: [FindAllUseCase],
  exports: [FindAllUseCase],
})
export class FindAllUseCaseModule {}
