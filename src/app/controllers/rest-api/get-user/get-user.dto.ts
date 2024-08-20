import { IsNotEmpty, IsString } from 'class-validator';

export class GetUserByEmailDTO {
  @IsNotEmpty()
  @IsString()
  email: string;
}
