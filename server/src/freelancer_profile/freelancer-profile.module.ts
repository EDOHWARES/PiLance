import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { FreelancerProfile, FreelancerProfileSchema } from './schemas/freelancer-profile.schema';
import { FreelancerProfileController } from './freelancer-profile.controller';
import { FreelancerProfileService } from './freelancer-profile.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: FreelancerProfile.name, schema: FreelancerProfileSchema }])
  ],
  controllers: [FreelancerProfileController],
  providers: [FreelancerProfileService],
})
export class FreelancerProfileModule {}