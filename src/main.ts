import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app
    .listen(3000)
    .then(async () => {
      Logger.log(`started listening on port ${3000} \n`);
      Logger.log(`Application is running on: ${await app.getUrl()}`);
    })
    .catch((err) => {
      Logger.error(`server failed to start`, err);
      process.exit(1);
    });
}

bootstrap();
