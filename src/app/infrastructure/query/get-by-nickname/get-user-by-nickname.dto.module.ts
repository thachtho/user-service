import { Module } from '@nestjs/common';
import { GetUserByNickNameDTO } from './get-user-by-nickname.dto';

@Module({
  providers: [GetUserByNickNameDTO],
  exports: [GetUserByNickNameDTO],
})
export class GetUserByNickNameDTOModule {}
