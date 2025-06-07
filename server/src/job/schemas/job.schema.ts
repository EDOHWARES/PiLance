import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class Job extends Document {
  @Prop({ required: true }) jobTitle: string;
  @Prop({ required: true }) category: string;
  @Prop({ required: true }) projectDescription: string;
  @Prop() requirements?: string;
  @Prop({ type: [String] }) requiredSkills: string[];
  @Prop() budgetType: string;
  @Prop() budget: number;
  @Prop() projectDuration: string;
  @Prop() experienceLevel: string;
  @Prop({ type: [String] }) projectFiles?: string[];
  @Prop({ type: [String] }) screeningQuestions?: string[];
}

export const JobSchema = SchemaFactory.createForClass(Job);