import { Module } from '@nestjs/common';
import { AdvertisingService } from './advertising.service';
import { AdvertisingController } from './advertising.controller';
import {PicAdvertisingService} from "./picAdvertising.service";
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [],
  controllers: [AdvertisingController],
  providers: [
    AdvertisingService,
    PicAdvertisingService
  ],
  exports: [
    AdvertisingService,
    PicAdvertisingService
  ],
})
export class AdvertisingModule {}
