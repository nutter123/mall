import { Module } from '@nestjs/common';
import { AdvertisingService } from './advertising.service';
import { AdvertisingController } from './advertising.controller';
import {PicAdvertisingService} from "./picAdvertising.service";

@Module({
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
