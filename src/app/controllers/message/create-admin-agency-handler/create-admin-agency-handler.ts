import { HttpStatus, Injectable } from '@nestjs/common';
import { ParamsUseCase } from './create-admin-agency-handler.i';
import { validator } from '../../../common/validator';
import { RpcException } from '@nestjs/microservices';
import { catchError } from 'rxjs';
import { ErrorCustom } from '../../../common';
import { TypeCreateUser } from '../kafka.controler.i';
import { CreateUserUseCase } from '../../../application/create-user/create-user.usecase';

@Injectable()
export class CreateAdminAgencyHandler {
  constructor(private usecase: CreateUserUseCase) {}

  handle(payload: ParamsUseCase, type: TypeCreateUser) {
    const valid = this.isValidate(payload);

    if (!valid.status) {
      throw new RpcException({
        statusCode: HttpStatus.BAD_REQUEST,
        message: valid.errorsMessage,
      });
    }

    return this.usecase.excute(payload, type).pipe(
      catchError((error) => {
        return ErrorCustom.handleError(error);
      }),
    );
  }

  isValidate(payload: ParamsUseCase) {
    const schema = {
      type: 'object',
      properties: {
        email: { type: 'string' },
        nickname: { type: 'string' },
        agencyId: { type: 'number' },
      },
      required: ['nickname', 'email', 'agencyId'],
      additionalProperties: false,
    };

    return validator(payload, schema);
  }
}
