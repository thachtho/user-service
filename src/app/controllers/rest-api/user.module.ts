import { Module } from '@nestjs/common';
import { GetUserModule } from './get-user/get-user.module';

@Module({
  imports: [GetUserModule],
  controllers: [],
  providers: [],
})
export class UserModule {}
