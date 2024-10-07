import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { ParamsNickNameDTO } from './get-user.i';
import { GetUserDetailUseCase } from '../../../application/get-detail/get-detail.usecase';
import { GetUserByNicknameUseCase } from '../../../application/get-user-by-nickname/get-user.usecase';

@Controller('users')
export class GetUserController {
  constructor(
    private readonly getUserDetailUsecase: GetUserDetailUseCase,
    private readonly getUserByNicknamelUsecase: GetUserByNicknameUseCase,
  ) {}

  @Get('/find-by-id/:id')
  findById(@Param('id') id: ParseIntPipe) {
    return this.getUserDetailUsecase.excute(+id);
  }

  @Get('/find-by-nickname/:nickname')
  findByEmail(@Param() params: ParamsNickNameDTO) {
    return this.getUserByNicknamelUsecase.excute(params.nickname);
  }
}
