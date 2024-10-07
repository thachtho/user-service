import { Injectable } from '@nestjs/common';
import * as path from 'path';
import { Observable, map } from 'rxjs';
import { getUserById } from '../../../asset/sql/get-user-by-id';
import { getUserByNickName } from '../../../asset/sql/get-user-by-nickname';
import DatabaseService from '../common/database/database.service';
import { IUserEntity, UserFromDB } from './user.repository.i';

@Injectable()
export class UserRepository {
  path: string = '../../../../src/asset/sql';

  constructor(private readonly databaseService: DatabaseService) {}

  createUser(arg: IUserEntity) {
    const filePath = `${this.path}/create-user.sql`;
    const params = [
      arg.nickname,
      arg.fullname,
      arg.email,
      arg.password,
      arg.roleId,
      arg.agencyId,
    ];

    return this.databaseService
      .queryByFile(path.join(__dirname, filePath), params)
      .pipe(
        map((res) => {
          return res.rows[0];
        }),
      );
  }

  getUserByNickName(nickname: string): Observable<UserFromDB | null> {
    return this.databaseService.runQuery(getUserByNickName, [nickname]).pipe(
      map((res) => {
        return res.rows[0] || null;
      }),
    );
  }

  getUserById(id: number) {
    return this.databaseService.runQuery(getUserById, [id]).pipe(
      map((res) => {
        return res.rows[0];
      }),
    );
  }
}
