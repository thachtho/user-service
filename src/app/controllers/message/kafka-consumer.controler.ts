import { Controller, Logger } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import { CreateAdminAgencyHandler } from './create-admin-agency-handler/create-admin-agency-handler';
import { HealthCheck } from './health-check/health-check';
import {
  CreateAdminAgencyArg,
  CreateTeacherOrStudentArg,
  CreateUserMessageArg,
  KafkaTopics,
} from './kafka.controler.i';
import { CreateTeacherOrStudentHandler } from './create-teacher-or-student-handler/create-teacher-or-student-handler';
import { UpdateUserHandler } from './update-user-handler/update-user-handler';

@Controller()
export class KafkaConsumerController {
  private readonly logger = new Logger(KafkaConsumerController.name);

  constructor(
    private readonly healthCheck: HealthCheck,
    private readonly createAdminAgencyHandler: CreateAdminAgencyHandler,
    private readonly createTeacherOrStudentHandler: CreateTeacherOrStudentHandler,
    private readonly updateUserHandler: UpdateUserHandler,
  ) {}

  @MessagePattern(KafkaTopics.HEALTH_CHECK)
  handleHealthCheck(): Observable<any> {
    return this.healthCheck.setTimeLive();
  }

  @MessagePattern(KafkaTopics.CREATE_USER)
  createUser(@Payload() payload: CreateUserMessageArg) {
    const { type, data } = payload;

    switch (type) {
      case 'adminAgency':
        return this.createAdminAgencyHandler.handle(
          data as CreateAdminAgencyArg,
          type,
        );
      case 'teacher':
      case 'student':
        return this.createTeacherOrStudentHandler.handle(
          data as CreateTeacherOrStudentArg,
          type,
        );

      default:
        break;
    }
  }

  @MessagePattern(KafkaTopics.UPDATE_USER)
  updateUser(@Payload() payload: CreateUserMessageArg) {
    const { data } = payload;
    this.logger.debug(
      `Run in ${KafkaConsumerController.name}, funtion: ${KafkaConsumerController.prototype.updateUser.name}, params: ${JSON.stringify(payload)}`,
    );
    return this.updateUserHandler.handle(data);
  }
}
