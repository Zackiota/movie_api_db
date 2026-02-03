import * as dotenv from 'dotenv';
dotenv.config();

import { NestFactory } from '@nestjs/core';
import { ConfigModule } from '@nestjs/config';
import { ConfigService } from '@nestjs/config';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'; 
import { initSwagger } from './common/swagger/init.swagger';
import { AllExceptionsFilter } from './common/filters/all-exceptions.filter';
import { HttpExceptionFilter } from './common/filters/http-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: '*',                    // Allow all (for dev only)
    // or more secure: origin: ['http://localhost:3000', 'http://localhost:4200'],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    allowedHeaders: 'Content-Type, Authorization, Accept, Origin, X-Requested-With',
    //allowedHeaders: 'Content-Type, Authorization, Accept',
    credentials: true,              // if you use cookies/auth
    exposedHeaders: ['Authorization'],
    optionsSuccessStatus: 204,
  });

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, 
      forbidNonWhitelisted: true,
      transform: true,
  
  })
  );

  const swaggerConfig = new DocumentBuilder()
    .setTitle('Movie API DB')
    .setDescription('The Movie Ticket Booking Managament API')
    .setVersion('1.0')
    .addBearerAuth()  // For authorization
    .build();

  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('api', app, document);  // Docs at /api

  //app.useGlobalFilters(new AllExceptionsFilter());

  initSwagger(app);


  const configService = app.get(ConfigService);

  const port = configService.get<number>('PORT') ||3001;

  //const port = process.env.PORT || 3001;

  // Catch and show all errors with full stack trace
 // app.useGlobalFilters(new AllExceptionsFilter());
  //app.useGlobalFilters(new HttpExceptionFilter());

  await app.listen(port);
  console.log(`🤷 Server online at http://localhost:${process.env.PORT}`);
}
bootstrap();

