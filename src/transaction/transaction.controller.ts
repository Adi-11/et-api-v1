import { Controller, Delete, Get, Param, Post, Request, Response } from '@nestjs/common';
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
    async addTransaction(@Request() req: any, @Response() res: any): Promise<any> {
        const result = await this.transactionService.addTransaction(req);
        if (result.success === true) {
            res.status(201).json({
                sucess: result.success,
                data: result.data 
            });
        } else {
            res.status(500).json({
                sucess: result.success,
                error: result.error,
            })
        }
        
    }

    @Delete(':id')
    async deleteTransaction(@Param() params: any, @Response() res: any): Promise<any> {
        const result = await this.transactionService.deleteTransaction(params);
        if (result.success === true) {
            res.status(201).json({
                sucess: result.success,
                data: result.data 
            });
        } else {
            res.status(500).json({
                sucess: result.success,
                error: result.error,
            })
        }
    }
}
