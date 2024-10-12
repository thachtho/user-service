import { Injectable } from '@nestjs/common';
import { UserRepository } from '../../infrastructure/repositories/user.repository';

@Injectable()
export class FindAllUseCase {
  constructor(private readonly repository: UserRepository) {}

  excute$(typeGet: number, organizationId: number) {
    return this.repository.findAll(typeGet, organizationId);
  }
}
