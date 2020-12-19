import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { logger } from './middleware/functional-logger.middleware';
import config from './config/keys';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.use(logger);
  app.setGlobalPrefix('api/v1');
  const PORT = config.PORT;
  app.listen(PORT).then(() => {
    console.log(`Server running on port ${(PORT)}`);
  });
}
bootstrap();
