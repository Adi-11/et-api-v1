import { Controller, Delete, Get, Post, Req, Response } from '@nestjs/common';
import { TransactionService } from './transaction.service';

@Controller('transaction')
export class TransactionController {
    constructor(
        private transactionService: TransactionService
    ) { }

    @Get()
    async getTransaction(@Response() res: any): Promise<any> {
        const result = await this.transactionService.getTransaction();
        if (result.success === true) {
            res.status(200).json({
                sucess: result.success,
                count: result.count,
                data: result.data
            });
        } else {
            res.status(500).json({
                sucess: result.success,
                error: result.error,
            })
        }
    }

    @Post()
    async addTransaction(@Req() request: any): Promise<any> {
        const result = await this.transactionService.addTransaction();
        return result;
    }

    @Delete('/:id')
    async deleteTransaction(): Promise<any> {
        const result = await this.transactionService.deleteTransaction();
        return result;
    }
}
