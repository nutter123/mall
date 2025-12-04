import { Module } from '@nestjs/common';
import { HomeService } from './home.service';
import { HomeController } from './home.controller';
import { SiteModule } from '../site/site.module';
import { NavigationModule } from '../navigation/navigation.module';
import { AdvertisingModule } from '../advertising/advertising.module';
import { RecommendModule } from '../recommend/recommend.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SiteWecomEntrance } from '../site/entities/site-wecom-entrance.entity';
import { RecommendZone } from '../recommend/entities/recommend-zone.entity';
import { Site } from '../site/entities/site.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Site, SiteWecomEntrance, RecommendZone]),
    SiteModule,
    NavigationModule,
    AdvertisingModule,
    RecommendModule,
  ],
  controllers: [HomeController],
  providers: [HomeService],
})
export class HomeModule {}
