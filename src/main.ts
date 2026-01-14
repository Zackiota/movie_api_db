import * as dotenv from 'dotenv';
dotenv.config();

import { NestFactory } from '@nestjs/core';
import { ConfigModule } from '@nestjs/config';
import { ConfigService } from '@nestjs/config';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true, 
    forbidNonWhitelisted: true,
    transform: true,
    //exceptionFactory: (errors) => {
    // This will show validation errors clearly
    //throw new BadRequestException(errors);
  })
  );
  const configService = app.get(ConfigService);
  const port = configService.get<number>('PORT') ||3000;
  await app.listen(port);
  console.log(`🤷 Server online at http://localhost:${process.env.PORT}`);
}
bootstrap();
