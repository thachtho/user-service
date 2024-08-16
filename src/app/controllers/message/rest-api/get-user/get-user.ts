import { GetByEmailUseCase } from '@application/get-by-email/get-by-email.usecase';
import { Controller, Get, Param } from '@nestjs/common';
import { GetUserByEmailDTO } from './get-user.dto';

@Controller('user')
export class GetUserController {
  constructor(private readonly getByEmailUseCase: GetByEmailUseCase) {}

  @Get(':email')
  findByEmail(@Param() params: GetUserByEmailDTO) {
    return this.getByEmailUseCase.excute(params.email);
  }
}
