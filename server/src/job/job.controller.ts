import { Controller, Post, Patch, Get, Delete, Body, Param, Query } from '@nestjs/common';
import { JobService } from './job.service';
import { CreateJobDto } from './dto/create-job.dto';
import { UpdateJobDto } from './dto/update-job.dto';

@Controller('jobs')
export class JobController {
  constructor(private readonly jobService: JobService) {}

  @Post()
  create(@Body() dto: CreateJobDto) {
    return this.jobService.create(dto);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateJobDto) {
    return this.jobService.update(id, dto);
  }

  // Job searching functionality (must come before :id route)
  @Get('search')
  async search(
    @Query('skills') skills?: string,
    @Query('minBudget') minBudget?: number,
    @Query('maxBudget') maxBudget?: number,
    @Query('deadline') deadline?: string
  ) {
    return this.jobService.search({ skills, minBudget, maxBudget, deadline });
  }

  @Get(':id')
  get(@Param('id') id: string) {
    return this.jobService.getById(id);
  }

  @Get()
  findAll() {
    return this.jobService.findAll();
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.jobService.delete(id);
  }
}