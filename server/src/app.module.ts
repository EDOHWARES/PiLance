import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientProfileModule } from './client_profile/client-profile.module';
import { FreelancerProfileModule } from './freelancer_profile/freelancer-profile.module';
import { JobModule } from './job/job.module';
import { BidModule } from './bids/bid.module';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        uri: configService.get<string>('MONGODB_URI', { infer: true }),
      }),
      inject: [ConfigService],
    }),
    ClientProfileModule,
    FreelancerProfileModule,
    JobModule,
    BidModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}


