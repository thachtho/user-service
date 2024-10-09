import { Injectable, Logger } from '@nestjs/common';
import { catchError } from 'rxjs';
import { UpdateUserUseCase } from '../../../application/update-user/update-user.usecase';
import { UserUpdateArg } from '../../../application/update-user/update-user.usecase.i';
import { ErrorCustom } from '../../../common';
import { IsValidate } from '../../../common/decorators/is-validate';
import { schema } from './schema';

@Injectable()
export class UpdateUserHandler {
  private readonly logger = new Logger(UpdateUserHandler.name);
  constructor(private readonly usecase: UpdateUserUseCase) {}

  @IsValidate({
    schema,
  })
  handle(payload: UserUpdateArg) {
    this.logger.debug(
      `Run in ${UpdateUserHandler.name}, funtion: ${UpdateUserHandler.prototype.handle.name}, params: ${JSON.stringify(payload)}`,
    );

    return this.usecase.excute(payload).pipe(
      catchError((error) => {
        return ErrorCustom.handleError(error);
      }),
    );
  }
}
