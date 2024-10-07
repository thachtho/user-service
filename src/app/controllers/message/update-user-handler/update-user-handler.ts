import { Injectable } from '@nestjs/common';
import { UpdateUserUseCase } from '../../../application/update-user/update-user.usecase';
import { catchError } from 'rxjs';
import { ErrorCustom } from '../../../common';

@Injectable()
export class UpdateUserHandler {
  constructor(private readonly usecase: UpdateUserUseCase) {}

  handle(payload: any) {
    return this.usecase.excute(payload).pipe(
      catchError((error) => {
        return ErrorCustom.handleError(error);
      }),
    );
  }
}
