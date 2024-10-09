export interface IKafkaParams {
  eventName: string;
  data: any;
}

export enum KafkaTopics {
  HEALTH_CHECK = 'health_check',
  CREATE_USER = 'create_user',
  UPDATE_USER = 'update_user',
}

export enum KafkaClient {
  AUTH_SERVICE = 'AUTH-SERVICE',
}

export enum KafkaHealthCheck {
  HEALTHY = 'healthy',
  UN_HEALTHY = 'unhealthy',
  WAITING = 'waiting',
}

export interface KafkaMessage<T> {
  data: T;
}

export type TypeCreateUser = 'adminAgency' | 'teacher' | 'student';
export interface CreateAdminAgencyArg {
  nickname: string;
  email: string;
  agencyId: number;
}

export interface CreateTeacherOrStudentArg {
  fullname: string;
  agencyId: number;
}

export interface CreateUserMessageArg {
  type: TypeCreateUser;
  data: CreateAdminAgencyArg | CreateTeacherOrStudentArg;
}

export interface DataUpdateUserMessage {
  id: number;
  email?: string;
  nickname?: string;
  fullname?: string;
  password?: string;
}
export interface UpdateUserMessageArg
  extends KafkaMessage<DataUpdateUserMessage> {}
