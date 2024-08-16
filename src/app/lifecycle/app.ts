import { kafkaConfig } from 'src/app/infrastructure/common/kafka/kafka.config';
import { NestFactory } from '@nestjs/core';
import { useContainer } from 'class-validator';
import { ValidationPipe } from '@nestjs/common';

export class App {
  static async bootstrap(module: any) {
    const port = process.env.PORT || 5000;
    const app = await NestFactory.create(module);
    app.useGlobalPipes(new ValidationPipe());
    useContainer(app.select(module), { fallbackOnErrors: true });
    app.connectMicroservice(kafkaConfig());
    await app.startAllMicroservices();
    await app.listen(port);
    console.log('Kafka connected!');
  }
}
