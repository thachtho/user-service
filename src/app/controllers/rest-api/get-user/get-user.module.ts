import { Module } from '@nestjs/common';
import { GetUserController } from './get-user';
import { GetUserByNickNameDTOModule } from '@infrastructure/query/get-by-nickname/get-user-by-nickname.dto.module';

@Module({
  imports: [GetUserByNickNameDTOModule],
  controllers: [GetUserController],
})
export class GetUserModule {}
