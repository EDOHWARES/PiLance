import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { FreelancerProfile } from './schemas/freelancer-profile.schema';
import { CreateFreelancerProfileDto } from './dto/create-freelancer-profile.dto';
import { UpdateFreelancerProfileDto } from './dto/update-freelancer-profile.dto';
@Injectable()
export class FreelancerProfileService {
  constructor(
    @InjectModel(FreelancerProfile.name)
    private profileModel: Model<FreelancerProfile>,
  ) {}

  create(dto: CreateFreelancerProfileDto) {
    return new this.profileModel(dto).save();
  }

  async update(id: string, dto: UpdateFreelancerProfileDto) {
    const updated = await this.profileModel.findByIdAndUpdate(id, dto, {
      new: true,
    });
    if (!updated) throw new NotFoundException('Profile not found');
    return updated;
  }

  async getById(id: string) {
    const profile = await this.profileModel.findById(id);
    if (!profile) throw new NotFoundException('Profile not found');
    return profile;
  }

  async findAll() {
    return this.profileModel.find().exec();
  }

  async delete(id: string) {
    const deleted = await this.profileModel.findByIdAndDelete(id);
    if (!deleted) throw new NotFoundException('Profile not found');
    return { message: 'Profile deleted successfully' };
  }
}
