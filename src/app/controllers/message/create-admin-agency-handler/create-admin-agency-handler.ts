import { HttpStatus, Injectable } from '@nestjs/common';
import { CreateAdminAgencyUseCase } from '../../../application/create-admin-agency/create-admin-agency.usecase';
import { ParamsUseCase } from './create-admin-agency-handler.i';
import { validator } from '../../../common/validator';
import { RpcException } from '@nestjs/microservices';
import { catchError } from 'rxjs';
import { ErrorCustom } from '../../../common';

@Injectable()
export class CreateAdminAgencyHandler {
  constructor(private usecase: CreateAdminAgencyUseCase) {}

  handle(payload: ParamsUseCase) {
    const valid = this.isValidate(payload);

    if (!valid.status) {
      throw new RpcException({
        statusCode: HttpStatus.BAD_REQUEST,
        message: valid.errorsMessage,
      });
    }

    return this.usecase.excute(payload).pipe(
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
