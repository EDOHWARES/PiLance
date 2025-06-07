export class CreateFreelancerProfileDto {
  firstName: string;
  lastName: string;
  title: string;
  bio?: string;
  yearsOfExperience?: number;
  hourlyRate?: number;
  skills?: string[];
  portfolio?: { title: string; description: string; url: string }[];
}

import { PartialType } from '@nestjs/mapped-types';

export class UpdateFreelancerProfileDto extends PartialType(CreateFreelancerProfileDto) {}