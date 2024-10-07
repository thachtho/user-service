import { Module } from '@nestjs/common';
import { UpdateUserHandler } from './update-user-handler';
import { UpdateUserUseCaseModule } from '../../../application/update-user/update-user.usecase.module';

@Module({
  imports: [UpdateUserUseCaseModule],
  providers: [UpdateUserHandler],
  exports: [UpdateUserHandler],
})
export class UpdateUserHandlerModule {}
