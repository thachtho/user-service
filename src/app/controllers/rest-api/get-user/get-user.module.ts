import { Module } from '@nestjs/common';
import { GetUserController } from './get-user';
import { GetByEmailUseCaseModule } from '@application/get-by-email/get-by-email.usecase.module';

@Module({
  imports: [GetByEmailUseCaseModule],
  controllers: [GetUserController],
})
export class GetUserModule {}
