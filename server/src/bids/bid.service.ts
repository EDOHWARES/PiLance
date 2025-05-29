import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Bid } from './schemas/bid.schema';
import { CreateBidDto } from './dto/create-bid.dto';
import { UpdateBidDto } from './dto/update-bid.dto';

@Injectable()
export class BidService {
  constructor(@InjectModel(Bid.name) private bidModel: Model<Bid>) {}

  create(dto: CreateBidDto) {
    return new this.bidModel(dto).save();
  }

  findByJob(jobId: string) {
    return this.bidModel.find({ jobId }).exec();
  }

  findByFreelancer(freelancerId: string) {
    return this.bidModel.find({ freelancerId }).exec();
  }

  async update(bidId: string, dto: UpdateBidDto) {
    const updated = await this.bidModel.findByIdAndUpdate(bidId, dto, { new: true });
    if (!updated) throw new NotFoundException('Bid not found');
    return updated;
  }
}