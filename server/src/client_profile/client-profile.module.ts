import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ClientProfile, ClientProfileSchema } from './schemas/client-profile.schema';
import { ClientProfileController } from './client-profile.controller';
import { ClientProfileService } from './client-profile.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: ClientProfile.name, schema: ClientProfileSchema }])
  ],
  controllers: [ClientProfileController],
  providers: [ClientProfileService],
})
export class ClientProfileModule {}