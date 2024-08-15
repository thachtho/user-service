import { Module } from '@nestjs/common';
import { GetUserByEmailDTO } from './get-user-by-email.dto';

@Module({
  providers: [GetUserByEmailDTO],
  exports: [GetUserByEmailDTO],
})
export class GetUserByEmailDTOModule {}
