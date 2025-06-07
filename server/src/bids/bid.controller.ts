import { Controller, Post, Get, Patch, Body, Param } from '@nestjs/common';
import { BidService } from './bid.service';
import { CreateBidDto } from './dto/create-bid.dto';
import { UpdateBidDto } from './dto/update-bid.dto';

@Controller('bids')
export class BidController {
  constructor(private readonly bidService: BidService) {}

  @Post()
  create(@Body() dto: CreateBidDto) {
    return this.bidService.create(dto);
  }

  @Get('job/:jobId')
  findByJob(@Param('jobId') jobId: string) {
    return this.bidService.findByJob(jobId);
  }

  @Get('freelancer/:freelancerId')
  findByFreelancer(@Param('freelancerId') freelancerId: string) {
    return this.bidService.findByFreelancer(freelancerId);
  }

  @Patch(':bidId')
  update(@Param('bidId') bidId: string, @Body() dto: UpdateBidDto) {
    return this.bidService.update(bidId, dto);
  }
}