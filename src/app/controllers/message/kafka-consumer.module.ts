import { Module } from '@nestjs/common';
import { KafkaConsumerController } from './kafka-consumer.controler';
import { HealthModule } from './health-check/health-check.module';

@Module({
  imports: [HealthModule],
  controllers: [KafkaConsumerController],
  providers: [],
})
export class KafkaConsumerModule {}
