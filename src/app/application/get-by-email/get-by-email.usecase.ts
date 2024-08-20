import { GetUserByEmailDTO } from '@infrastructure/query/get-user-by-email.dto';
import { Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { IUser } from 'src/app/controllers/rest-api/user.i';

@Injectable()
export class GetByEmailUseCase {
  constructor(private readonly getUserByEmailDTO: GetUserByEmailDTO) {}

  excute(email: string): Observable<IUser> {
    return this.getUserByEmailDTO.getUserByEmail(email);
  }
}
