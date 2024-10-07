import { Module } from '@nestjs/common';
import { CreateAdminAgencyHandlerModule } from './create-admin-agency-handler/create-admin-agency-handler.module';
import { CreateTeacherOrStudentHandlerModule } from './create-teacher-or-student-handler/create-teacher-or-student-handler.module';
import { HealthModule } from './health-check/health-check.module';
import { KafkaConsumerController } from './kafka-consumer.controler';

@Module({
  imports: [
    HealthModule,
    CreateAdminAgencyHandlerModule,
    CreateTeacherOrStudentHandlerModule,
  ],
  controllers: [KafkaConsumerController],
  providers: [],
})
export class KafkaConsumerModule {}
