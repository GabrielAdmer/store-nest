import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap () {
  const app = await NestFactory.create( AppModule );
  app.useGlobalPipes( new ValidationPipe( {
    whitelist: true, //ignorar los campos no que son del cuerpo
    forbidNonWhitelisted: true // advertir al usuario
  } ) )

  await app.listen( 3000 );
}
bootstrap();
