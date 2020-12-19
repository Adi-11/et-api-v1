import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { logger } from './middleware/functional-logger.middleware';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.use(logger);
  app.setGlobalPrefix('api/v1');
  app.listen(8080).then(() => {
    console.log(`Server running on port 8080`);
  });
}
bootstrap();
