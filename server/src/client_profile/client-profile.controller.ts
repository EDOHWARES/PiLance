import {
  Controller,
  Post,
  Patch,
  Get,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { ClientProfileService } from './client-profile.service';
import { CreateClientProfileDto } from './dto/create-client-profile.dto';
import { UpdateClientProfileDto } from './dto/update-client-profile.dto';

@Controller('client_profiles')
export class ClientProfileController {
  constructor(private readonly profileService: ClientProfileService) {}

  @Post()
  create(@Body() dto: CreateClientProfileDto) {
    return this.profileService.create(dto);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateClientProfileDto) {
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
