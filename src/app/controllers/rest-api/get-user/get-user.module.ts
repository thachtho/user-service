import { Module } from '@nestjs/common';
import { GetUserDetaiUseCaseModule } from '../../../application/get-detail/get-detail.usecase.module';
import { GetUserController } from './get-user';
import { GetUserByNicknameUseCaseModule } from '../../../application/get-user-by-nickname/get-user.usecase.module';
import { FindAllUseCaseModule } from '../../../application/find/find.usecase.module';

@Module({
  imports: [
    GetUserDetaiUseCaseModule,
    GetUserByNicknameUseCaseModule,
    FindAllUseCaseModule,
  ],
  controllers: [GetUserController],
})
export class GetUserModule {}
