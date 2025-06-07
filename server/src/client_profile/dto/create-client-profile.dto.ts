export class CreateClientProfileDto {
  companyName: string;
  industry: string;
  companyWebsite?: string;
  companyDescription: string;
  companySize: string;
  location: string;
  contactName: string;
  emailAddress: string;
  phoneNumber?: string;
  projectTypes: string;
  budgetRange: string;
  projectDuration: string;
}


import { PartialType } from '@nestjs/mapped-types';
// import { CreateClientProfileDto } from './create-client-profile.dto';

export class UpdateClientProfileDto extends PartialType(CreateClientProfileDto) {}