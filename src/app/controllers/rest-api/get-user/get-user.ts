import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { ParamsNickNameDTO } from './get-user.i';
import { GetUserByNickNameDTO } from '@infrastructure/query/get-by-nickname/get-user-by-nickname.dto';

@Controller('users')
export class GetUserController {
  constructor(private readonly getByNickNameDto: GetUserByNickNameDTO) {}

  @Get('/find-by-id/:id')
  findById(@Param('id') id: ParseIntPipe) {
    return this.getByNickNameDto.getUserById(+id);
  }

  @Get('/find-by-nickname/:nickname')
  findByEmail(@Param() params: ParamsNickNameDTO) {
    return this.getByNickNameDto.getUserByNickName(params.nickname);
  }
}
