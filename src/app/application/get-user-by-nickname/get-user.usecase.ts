import { Injectable } from '@nestjs/common';
import { UserRepository } from '../../infrastructure/repositories/user.repository';

@Injectable()
export class GetUserByNicknameUseCase {
  constructor(private readonly repository: UserRepository) {}

  excute(nickname: string) {
    return this.repository.getUserByNickName(nickname);
  }
}
