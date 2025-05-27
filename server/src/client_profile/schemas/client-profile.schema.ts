import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class ClientProfile extends Document {
  @Prop({ required: true }) companyName: string;
  @Prop({ required: true }) industry: string;
  @Prop() companyWebsite?: string;
  @Prop({ required: true }) companyDescription: string;
  @Prop({ required: true }) companySize: string;
  @Prop({ required: true }) location: string;
  @Prop({ required: true }) contactName: string;
  @Prop({ required: true }) emailAddress: string;
  @Prop() phoneNumber?: string;
  @Prop({ required: true }) projectTypes: string;
  @Prop({ required: true }) budgetRange: string;
  @Prop({ required: true }) projectDuration: string;
}
export const ClientProfileSchema = SchemaFactory.createForClass(ClientProfile);