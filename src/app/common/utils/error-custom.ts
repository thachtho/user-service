import { HttpStatus } from '@nestjs/common';
import { RpcException } from '@nestjs/microservices';
import { of } from 'rxjs';

export class ErrorCustom {
  static handle(error: any) {
    if (error?.status) {
      throw new RpcException({
        statusCode: error.status,
        message: error.response,
      });
    }

    if (error?.message) {
      throw new RpcException({
        message: error?.message,
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
      });
    }

    throw new RpcException(error.response.data);
  }

  static handleError(error: any) {
    this.handle(error);

    return of(null);
  }
}
