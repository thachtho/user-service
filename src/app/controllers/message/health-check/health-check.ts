import { Injectable } from '@nestjs/common';
import { of } from 'rxjs';
import { KafkaHealthCheck } from '../kafka.controler.i';
import { TIME_CHECK_HEALTH } from './health-check.i';
import { getCurrentSecondTime } from 'src/app/common/time';

@Injectable()
export class HealthCheck {
  healthStatus = KafkaHealthCheck.WAITING;
  timeLive = getCurrentSecondTime();

  onModuleInit() {
    setInterval(() => {
      this.checkHealth();
      console.log('status:', this.healthStatus);
    }, TIME_CHECK_HEALTH);
  }

  setTimeLive() {
    this.timeLive = getCurrentSecondTime();
    return of(null);
  }

  checkHealth() {
    const currentTime = getCurrentSecondTime();
    const distance = currentTime - this.timeLive;

    if (distance < TIME_CHECK_HEALTH) {
      this.healthStatus = KafkaHealthCheck.HEALTHY;

      return;
    }

    this.healthStatus = KafkaHealthCheck.UN_HEALTHY;
  }
}
