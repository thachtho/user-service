import { Module } from '@nestjs/common';
import { GetUserDetaiUseCaseModule } from '../../../application/get-detail/get-detail.usecase.module';
import { GetUserController } from './get-user';
import { GetUserByNicknameUseCaseModule } from '../../../application/get-user-by-nickname/get-user.usecase.module';

@Module({
  imports: [GetUserDetaiUseCaseModule, GetUserByNicknameUseCaseModule],
  controllers: [GetUserController],
})
export class GetUserModule {}
