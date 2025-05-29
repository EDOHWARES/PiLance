import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Job } from './schemas/job.schema';
import { CreateJobDto } from './dto/create-job.dto';
import { UpdateJobDto } from './dto/update-job.dto';

@Injectable()
export class JobService {
  constructor(@InjectModel(Job.name) private jobModel: Model<Job>) {}

  create(dto: CreateJobDto) {
    return new this.jobModel(dto).save();
  }

  async update(id: string, dto: UpdateJobDto) {
    const updated = await this.jobModel.findByIdAndUpdate(id, dto, { new: true });
    if (!updated) throw new NotFoundException('Job not found');
    return updated;
  }

  async getById(id: string) {
    const job = await this.jobModel.findById(id);
    if (!job) throw new NotFoundException('Job not found');
    return job;
  }

  async findAll() {
    return this.jobModel.find().exec();
  }

  async delete(id: string) {
    const deleted = await this.jobModel.findByIdAndDelete(id);
    if (!deleted) throw new NotFoundException('Job not found');
    return { message: 'Job deleted successfully' };
  }


  async search(filters: { skills?: string; minBudget?: number; maxBudget?: number; deadline?: string }) {
    const query: any = {};

    // Filter by skills (comma-separated)
    if (filters.skills) {
      const skillsArray = filters.skills.split(',').map(skill => skill.trim());
      query.requiredSkills = { $all: skillsArray };
    }

    // Filter by budget
    if (filters.minBudget || filters.maxBudget) {
      query.budget = {};
      if (filters.minBudget) query.budget.$gte = Number(filters.minBudget);
      if (filters.maxBudget) query.budget.$lte = Number(filters.maxBudget);
    }

    // Filter by deadline/projectDuration (optional, adjust as needed)
    if (filters.deadline) {
      query.projectDuration = filters.deadline;
    }

    return this.jobModel.find(query).exec();
  }

}