import { Injectable } from '@nestjs/common';

@Injectable()
export class TransactionService {
    getTransaction(): string {
        return 'You got Trnsactions';
    }
}
