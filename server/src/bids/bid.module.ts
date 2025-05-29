import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Bid, BidSchema } from './schemas/bid.schema';
import { BidController } from './bid.controller';
import { BidService } from './bid.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: Bid.name, schema: BidSchema }])],
  controllers: [BidController],
  providers: [BidService],
})
export class BidModule {}