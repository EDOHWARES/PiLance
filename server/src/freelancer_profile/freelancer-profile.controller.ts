import {
  Controller,
  Post,
  Patch,
  Get,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { FreelancerProfileService } from './freelancer-profile.service';
import { CreateFreelancerProfileDto } from './dto/create-freelancer-profile.dto';
import { UpdateFreelancerProfileDto } from './dto/update-freelancer-profile.dto';

@Controller('freelancer_profiles')
export class FreelancerProfileController {
  constructor(private readonly profileService: FreelancerProfileService) {}

  @Post()
  create(@Body() dto: CreateFreelancerProfileDto) {
    return this.profileService.create(dto);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateFreelancerProfileDto) {
    return this.profileService.update(id, dto);
  }

  @Get(':id')
  get(@Param('id') id: string) {
    return this.profileService.getById(id);
  }

  @Get()
  findAll() {
    return this.profileService.findAll();
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.profileService.delete(id);
  }
}
