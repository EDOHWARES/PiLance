// import { Module } from '@nestjs/common';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
// import { ProfileModule } from './profile/profile.module';

// @Module({
//   controllers: [AppController],
//   providers: [AppService],
//   imports: [ProfileModule],
// })
// export class AppModule {}



import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose'; // <-- add this import
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { ProfileModule } from './freelancer_profile/profile.module';
import { ClientProfileModule } from './client_profile/client-profile.module';
import { FreelancerProfileModule } from './freelancer_profile/freelancer-profile.module';



@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [
    MongooseModule.forRoot('mongodb+srv://ayomideratata:FtHe7KRFaTxTGANu@cluster0.xtfl9hr.mongodb.net/'), // <-- add this line
    // ProfileModule,
    ClientProfileModule,
    FreelancerProfileModule,
  ],
})
export class AppModule {}


// mongodb+srv://ayomideratata:FtHe7KRFaTxTGANu@cluster0.xtfl9hr.mongodb.net/


