import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Transaction, TransactionDocument } from '../model/transaction.schema';
@Injectable()
export class TransactionService {

    constructor(
        @InjectModel(Transaction.name) private readonly transactionModel: Model<TransactionDocument>,
    ){ }

    async getTransaction(): Promise<any> {
        try {
            const transactions = await this.transactionModel.find();
            //logic yet to completed

            return {
                success: true,
                count: transactions.length,
                data: transactions
            }
         } catch (err) {
            return {
                success: false,
                error: 'server error',
            }
        }
    }

    async addTransaction(): Promise<any> {
        return 'You posted Trnsactions';
    }

    async deleteTransaction(): Promise<any> {
        return 'transaction deleted';
    }
}
