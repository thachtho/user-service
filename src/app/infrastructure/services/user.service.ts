import { Injectable } from '@nestjs/common';
import { Observable, map, of, switchMap } from 'rxjs';
import { randomNumber } from '../../common/number';
import { UserRepository } from '../repositories/user.repository';
import { UserFromDB } from '../repositories/user.repository.i';

@Injectable()
export class UserService {
  constructor(private readonly repository: UserRepository) {}

  private generateNickname(fullname: string): string {
    return fullname
      .split(' ')
      .map((word) => word[0].toLowerCase())
      .join('');
  }

  createNickname(fullname: string, nicknameCb?: string): Observable<string> {
    let nickname = '';

    if (!nicknameCb) {
      nickname = this.generateNickname(fullname);
    } else {
      nickname = nicknameCb;
    }

    return this.repository.getUserByNickName(nickname).pipe(
      switchMap((user: UserFromDB | null) => {
        if (user) {
          const newNickname = `${nickname}${randomNumber()}`;

          return this.createNickname(fullname, newNickname);
        }

        return of(nickname);
      }),
    );
  }
}
