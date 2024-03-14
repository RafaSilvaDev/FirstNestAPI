import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  const config = new DocumentBuilder()
    .setTitle('Courses Example')
    .setDescription('An API of courses high school')
    .setVersion('1.0')
    .addTag('school')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  app.useGlobalPipes(
    new ValidationPipe({
      // não permite o salvamento de props que não existem no DTO, ignorando-os
      whitelist: true,
      // não permite que valores inexistentes no DTO sejam recebidos
      forbidNonWhitelisted: true,
      // realiza a tipagem das imformações recebidas via JSON automaticamente (evitando o uso do 'any')
      transform: true,
    }),
  );

  await app.listen(3000);
}
bootstrap();
