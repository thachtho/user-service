import DatabaseService from '@infrastructure/common/database/database.service';
import { Injectable } from '@nestjs/common';
import { catchError, map, throwError } from 'rxjs';
import { getUserByEmail } from 'src/asset/sql/get-user-by-email';

@Injectable()
export class GetUserByEmailDTO {
  constructor(private readonly databaseService: DatabaseService) {}

  getUserByEmail(email: string) {
    return this.databaseService.runQuery(getUserByEmail, [email]).pipe(
      map((res) => {
        return res.rows[0] || null;
      }),
      catchError((err) => throwError(() => err)),
    );
  }
}
