import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ClientProfile } from './schemas/client-profile.schema';
import { CreateClientProfileDto } from './dto/create-client-profile.dto';
import { UpdateClientProfileDto } from './dto/update-client-profile.dto';

@Injectable()
export class ClientProfileService {
  constructor(
    @InjectModel(ClientProfile.name) private profileModel: Model<ClientProfile>,
  ) {}

  create(dto: CreateClientProfileDto) {
    return new this.profileModel(dto).save();
  }

  async update(id: string, dto: UpdateClientProfileDto) {
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
