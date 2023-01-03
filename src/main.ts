import { Logger, VersioningType } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { config } from './core/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('/nft');
  app.enableVersioning({ type: VersioningType.URI });
  await app
    .listen(config.port)
    .then(async () => {
      Logger.log(`started listening on port ${config.port} \n`);
      Logger.log(`Application is running on: ${await app.getUrl()}`);
    })
    .catch((err) => {
      Logger.error(`server failed to start`, err);
      process.exit(1);
    });
}

bootstrap();
