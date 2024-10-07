import { HttpStatus, Injectable } from '@nestjs/common';
import { RpcException } from '@nestjs/microservices';
import { catchError } from 'rxjs';
import { CreateUserUseCase } from '../../../application/create-user/create-user.usecase';
import { ErrorCustom } from '../../../common';
import { validator } from '../../../common/validator';
import { TypeCreateUser } from '../kafka.controler.i';
import { ParamsUseCase } from './create-teacher-or-student-handler.i';

@Injectable()
export class CreateTeacherOrStudentHandler {
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
        fullname: { type: 'string' },
        agencyId: { type: 'number' },
      },
      required: ['fullname', 'agencyId'],
      additionalProperties: false,
    };

    return validator(payload, schema);
  }
}
