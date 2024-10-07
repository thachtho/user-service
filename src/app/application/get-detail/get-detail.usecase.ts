import { Injectable } from '@nestjs/common';
import { UserRepository } from '../../infrastructure/repositories/user.repository';

@Injectable()
export class GetUserDetailUseCase {
  constructor(private readonly repository: UserRepository) {}

  excute(id: number) {
    return this.repository.getUserById(id);
  }
}
