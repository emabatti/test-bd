import {
  HttpStatus,
  ValidationPipe,
  VersioningType,
  Logger,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  const configService = app.get(ConfigService);

  app.enableCors();
  app.enableVersioning({
    type: VersioningType.URI,
    defaultVersion: '1',
  });
  app.setGlobalPrefix('api');
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: false,
      enableDebugMessages: true,
      stopAtFirstError: true,
      errorHttpStatusCode: HttpStatus.UNPROCESSABLE_ENTITY,
      forbidUnknownValues: false,
    }),
  );

  // Add swagger to document api endpoints.
  const config = new DocumentBuilder()
    .setTitle('Brand Distribution Test Api Documentations')
    .setDescription('List of the APIs exposed from the application')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  // Start server.
  const port = configService.get('PORT');
  const host = configService.get('HOST');

  await app.listen(port, host);

  Logger.log(`Running on: ${await app.getUrl()}`, 'Main');
}
bootstrap();
