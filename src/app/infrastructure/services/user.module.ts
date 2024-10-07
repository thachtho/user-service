import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserRepositoryModule } from '../repositories/user.repository.module';

@Module({
  imports: [UserRepositoryModule],
  providers: [UserService],
  exports: [UserService],
})
export class UserServiceModule {}
