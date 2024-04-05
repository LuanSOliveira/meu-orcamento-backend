import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );
  app.enableCors({
    origin: true,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true
  })

  const config = new DocumentBuilder()
    .setTitle('API Orçamento')
    .setDescription('Ducumentação para API de criação de orçamento para Novelorumi')
    .setVersion('1.0')
    .addTag('line-type')
    .addTag('line-mark')
    .addTag('line')
    .addTag('other-material')
    .addTag('system-params')
    .addTag('budget')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);
  await app.listen(3001);
}
bootstrap();
