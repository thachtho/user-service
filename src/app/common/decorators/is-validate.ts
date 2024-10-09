import { RpcException } from '@nestjs/microservices';
import { validator } from '../validator';
import { HttpStatus } from '@nestjs/common';

export interface Arg {
  schema: any;
}

export function IsValidate(arg: Arg) {
  return function (
    _target: any,
    _propertyKey: string,
    descriptor: PropertyDescriptor,
  ) {
    const originalMethod = descriptor.value;

    descriptor.value = function (...payloads: any[]) {
      const { schema } = arg;
      const payload = payloads[0];
      const valid = validator(payload, schema);

      if (!valid.status) {
        throw new RpcException({
          statusCode: HttpStatus.BAD_REQUEST,
          message: valid.errorsMessage,
        });
      }

      return originalMethod.apply(this, payloads);
    };

    return descriptor;
  };
}
