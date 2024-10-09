import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // ## Class Validator Global , nivel de app
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, //Solo permite la data que se esta esperando en DTO
      forbidNonWhitelisted: true,
    }),
  );

  await app.listen(3000);
  console.log(`App running in Port:3000`);
}
bootstrap();
