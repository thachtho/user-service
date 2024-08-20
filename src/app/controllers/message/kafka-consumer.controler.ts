import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import { HealthCheck } from './health-check/health-check';
import { IKafkaParams, KafkaEvent, KafkaMessage } from './kafka.controler.i';

@Controller()
export class KafkaConsumerController {
  constructor(private readonly healthCheck: HealthCheck) {}

  @MessagePattern(KafkaMessage)
  message(@Payload() message: IKafkaParams): Observable<any> {
    return this.handle(message);
  }

  handle(message: IKafkaParams): Observable<any> {
    const { eventName } = message;

    switch (eventName) {
      case KafkaEvent.HEALTH_CHECK:
        return this.healthCheck.setTimeLive();

      default:
        break;
    }
  }
}
