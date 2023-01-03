import { INestApplication, Logger, ValidationPipe, VersioningType } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { config } from './core/config';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      errorHttpStatusCode: 422,
      forbidUnknownValues: true,
      transformOptions: { enableImplicitConversion: true, exposeDefaultValues: true },
    }),
  );
  app.setGlobalPrefix('/nft');
  app.enableVersioning({ type: VersioningType.URI });
  setupSwagger(app);
  await app
    .listen(config.port)
    .then(async () => {
      Logger.log(`started listening on port ${config.port} \n`);
      Logger.log(`Application is running on: ${await app.getUrl()}`);
      Logger.log(`Explore Project endpoints on: ${await app.getUrl()}/api`);
      Logger.log(`Explore swagger file on: ${await app.getUrl()}/api-json`);
    })
    .catch((err) => {
      Logger.error(`server failed to start`, err);
      process.exit(1);
    });
}

bootstrap();

function setupSwagger(app: INestApplication) {
  const options = new DocumentBuilder().setTitle('NFT Statistics').setVersion('1.0').addTag('NFT').setBasePath('/nft').build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);
}
