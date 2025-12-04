import { Module } from '@nestjs/common';
import { RecommendService } from './recommend.service';
import { RecommendController } from './recommend.controller';
import { RecommendZoneConverter } from './recommendZone.converter';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RecommendZone } from './entities/recommend-zone.entity';

@Module({
  imports: [TypeOrmModule.forFeature([RecommendZone])],
  controllers: [RecommendController],
  providers: [RecommendService, RecommendZoneConverter],
  exports: [RecommendService, RecommendZoneConverter],
})
export class RecommendModule {}
