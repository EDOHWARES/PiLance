import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema({ timestamps: true })
export class Bid extends Document {
  @Prop({ type: Types.ObjectId, ref: 'Job', required: true })
  jobId: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: 'FreelancerProfile', required: true })
  freelancerId: Types.ObjectId;

  @Prop({ required: true })
  proposalText: string;

  @Prop({ required: true })
  piQuote: number;

  @Prop()
  timeline?: string;

  @Prop({ default: 'pending' })
  status: string;
}

export const BidSchema = SchemaFactory.createForClass(Bid);