import { PartialType } from '@nestjs/mapped-types';
import { CreateClientProfileDto } from './create-client-profile.dto';

export class UpdateClientProfileDto extends PartialType(CreateClientProfileDto) {}