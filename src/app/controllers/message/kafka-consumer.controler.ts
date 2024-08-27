import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import { HealthCheck } from './health-check/health-check';
import { KafkaTopics } from './kafka.controler.i';

@Controller()
export class KafkaConsumerController {
  constructor(private readonly healthCheck: HealthCheck) {}

  @MessagePattern(KafkaTopics.HEALTH_CHECK)
  handleHealthCheck(): Observable<any> {
    return this.healthCheck.setTimeLive();
  }
}
