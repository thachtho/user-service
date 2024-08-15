import { Transport } from '@nestjs/microservices';

export const kafkaConfig = () => {
  const kafkaHost = process.env.KAFKA_HOST;
  const kafkaPort = process.env.KAFKA_PORT;

  return {
    transport: Transport.KAFKA,
    options: {
      client: {
        clientId: 'user',
        brokers: [`${kafkaHost}:${kafkaPort}`],
      },
      consumer: {
        groupId: 'user-consumer',
      },
    },
  };
};
