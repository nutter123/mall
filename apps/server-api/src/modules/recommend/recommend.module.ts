import { Module } from '@nestjs/common';
import { RecommendService } from './recommend.service';
import { RecommendController } from './recommend.controller';
import { RecommendZoneConverter } from './recommendZone.converter';

@Module({
  controllers: [RecommendController],
  providers: [RecommendService, RecommendZoneConverter],
  exports: [RecommendService, RecommendZoneConverter],
})
export class RecommendModule {}
