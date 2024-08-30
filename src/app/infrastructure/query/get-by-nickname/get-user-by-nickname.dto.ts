import DatabaseService from '@infrastructure/common/database/database.service';
import { Injectable } from '@nestjs/common';
import { catchError, map, throwError } from 'rxjs';
import { getUserById } from 'src/asset/sql/get-user-by-id';
import { getUserByNickName } from 'src/asset/sql/get-user-by-nickname';

@Injectable()
export class GetUserByNickNameDTO {
  constructor(private readonly databaseService: DatabaseService) {}

  getUserByNickName(nickname: string) {
    return this.databaseService.runQuery(getUserByNickName, [nickname]).pipe(
      map((res) => {
        return res.rows[0] || null;
      }),
      catchError((err) => throwError(() => err)),
    );
  }

  getUserById(id: number) {
    return this.databaseService.runQuery(getUserById, [id]).pipe(
      map((res) => {
        return res.rows[0] || null;
      }),
      catchError((err) => throwError(() => err)),
    );
  }
}
