import { Controller, Get, Param, ParseIntPipe, Query } from '@nestjs/common';
import { ParamsNickNameDTO, TypeGetUserDto } from './get-user.i';
import { GetUserDetailUseCase } from '../../../application/get-detail/get-detail.usecase';
import { GetUserByNicknameUseCase } from '../../../application/get-user-by-nickname/get-user.usecase';
import { FindAllUseCase } from '../../../application/find/find.usecase';

@Controller('users')
export class GetUserController {
  constructor(
    private readonly getUserDetailUsecase: GetUserDetailUseCase,
    private readonly getUserByNicknamelUsecase: GetUserByNicknameUseCase,
    private readonly findAllUsecase: FindAllUseCase,
  ) {}

  @Get()
  findAll(@Query() query: TypeGetUserDto) {
    const { typeGet, organizationId } = query;

    return this.findAllUsecase.excute$(Number(typeGet), Number(organizationId));
  }

  @Get('/find-by-id/:id')
  findById(@Param('id') id: ParseIntPipe) {
    return this.getUserDetailUsecase.excute(+id);
  }

  @Get('/find-by-nickname/:nickname')
  findByEmail(@Param() params: ParamsNickNameDTO) {
    return this.getUserByNicknamelUsecase.excute(params.nickname);
  }
}
