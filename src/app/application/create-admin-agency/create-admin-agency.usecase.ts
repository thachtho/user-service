import { Injectable } from '@nestjs/common';
import { UserFactory } from '../../domain/factory/user.factory';
import { UserRepository } from '../../infrastructure/repositories/user.repository';
import { CreateAdminAgencyUseCaseArg } from './create-admin-agency.usecase.i';

@Injectable()
export class CreateAdminAgencyUseCase {
  constructor(private readonly repository: UserRepository) {}

  excute(payload: CreateAdminAgencyUseCaseArg) {
    const user = new UserFactory().createUser('adminAgency', payload);

    return this.repository.createUser(user.getAllProperties());
  }
}
