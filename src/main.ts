import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common/pipes/validation.pipe';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe(
    {
      whitelist:true,
      forbidNonWhitelisted:true,
      transform:true
    }
  ))
  app.enableCors(
    {
      origin:'*',
      methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
      credentials:true,
      allowedHeaders:'*',
      exposedHeaders:'Authorization',
    }
  );
  app.useGlobalPipes(new ValidationPipe())
  await app.listen(3009);
}
bootstrap();