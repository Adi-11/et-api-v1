import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TransactionDocument = Transaction & Document;

@Schema()
export class Transaction {
    @Prop({
        required: [true, 'Please add some text...'],
        trim: true
    })
    text: string;
    
    @Prop({
        required: [true, 'Please add a positve or a negative number'],
    })
    amount: number;

    @Prop({
        default: Date.now
    })
    createdAt: Date;
}

export const TransactionSchema = SchemaFactory.createForClass(Transaction);