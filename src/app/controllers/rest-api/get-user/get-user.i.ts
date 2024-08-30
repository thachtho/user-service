import { IsNotEmpty, IsString } from 'class-validator';

export class ParamsNickNameDTO {
  @IsNotEmpty()
  @IsString()
  nickname: string;
}