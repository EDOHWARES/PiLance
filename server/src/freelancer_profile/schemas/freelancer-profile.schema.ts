import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class FreelancerProfile extends Document {
  @Prop({ required: true }) firstName: string;
  @Prop({ required: true }) lastName: string;
  @Prop({ required: true }) title: string;
  @Prop() bio?: string;
  @Prop() yearsOfExperience?: number;
  @Prop() hourlyRate?: number;
  @Prop({ type: [String] }) skills?: string[];
  @Prop({ type: [{ title: String, description: String, url: String }] }) portfolio?: any[];
}

export const FreelancerProfileSchema = SchemaFactory.createForClass(FreelancerProfile);