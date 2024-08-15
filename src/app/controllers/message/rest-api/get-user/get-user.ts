import { GetByEmailUseCase } from '@application/get-by-email/get-by-email.usecase';
import { Controller, Get, Param } from '@nestjs/common';

@Controller('user')
export class GetUserController {
  constructor(private readonly getByEmailUseCase: GetByEmailUseCase) {}

  @Get(':email')
  findByEmail(@Param('email') email: string) {
    return this.getByEmailUseCase.excute(email);
  }
}
