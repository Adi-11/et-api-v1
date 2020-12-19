import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TransactionController } from './transaction/transaction.controller';
import { TransactionService } from './transaction/transaction.service';

@Module({
  imports: [
    ConfigModule.forRoot(),
  ],
  controllers: [AppController, TransactionController],
  providers: [AppService, TransactionService],
})
export class AppModule {}
