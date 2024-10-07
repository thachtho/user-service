import { Module } from '@nestjs/common';
import { KafkaConsumerController } from './kafka-consumer.controler';
import { HealthModule } from './health-check/health-check.module';
import { CreateAdminAgencyHandlerModule } from './create-admin-agency-handler/create-admin-agency-handler.module';

@Module({
  imports: [HealthModule, CreateAdminAgencyHandlerModule],
  controllers: [KafkaConsumerController],
  providers: [],
})
export class KafkaConsumerModule {}
