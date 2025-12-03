import { Module } from '@nestjs/common';
import { HomeService } from './home.service';
import { HomeController } from './home.controller';
import {SiteModule} from "../site/site.module";
import {NavigationModule} from "../navigation/navigation.module";
import {AdvertisingModule} from "../advertising/advertising.module";
import {RecommendModule} from "../recommend/recommend.module";

@Module({
  controllers: [HomeController],
  providers: [HomeService],
  imports: [
    SiteModule,
    NavigationModule,
    AdvertisingModule,
    RecommendModule
  ],
})
export class HomeModule {}
