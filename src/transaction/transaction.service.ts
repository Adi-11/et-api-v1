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

    async addTransaction(req: any): Promise<any> {
        try {
            const { text, amount } = req.body;
            const transaction = await this.transactionModel.create(req.body);
            return {
                success: true,
                data: transaction
            }
        } catch (err) {
            return {
                success: false,
                error: [
                    'Please add some text...',
                    'Please add a positve or a negative number'
                ],
            }
        }
    }
    async deleteTransaction(params: any): Promise<any> {
        try {
            const transaction = await this.transactionModel.findById(params.id);
            if (!transaction) {
                return {
                    success: false,
                    error: 'No Transaction Found'
                }
            }
            await transaction.remove();
            return {
                success: true,
                data: {}
            }
        } catch (err) {
            return { 
                success: false,
                error: 'No Transaction Found',
            }
        }
    }
}
