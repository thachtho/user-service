import { Module } from '@nestjs/common';
import { GetByEmailUseCase } from './get-by-email.usecase';
import { GetUserByEmailDTOModule } from '@infrastructure/query/get-user-by-email.dto.module';

@Module({
  imports: [GetUserByEmailDTOModule],
  providers: [GetByEmailUseCase],
  exports: [GetByEmailUseCase],
})
export class GetByEmailUseCaseModule {}
