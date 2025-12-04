import { Module } from '@nestjs/common';
import { SiteService } from './site.service';
import { SiteController } from './site.controller';
import { SiteConverter } from './site.converter';
import { SiteWecomEntranceConverter } from './siteWecomEntrance.converter';
import { SiteWecomEntrance } from './entities/site-wecom-entrance.entity';
import { Site } from './entities/site.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SiteNotice } from './entities/site-notice.entity';
import { SiteNoticeInfo } from './entities/site-notice-info.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Site, SiteWecomEntrance, SiteNotice, SiteNoticeInfo])],
  controllers: [SiteController],
  providers: [SiteService, SiteConverter, SiteWecomEntranceConverter],
  exports: [SiteService, SiteConverter, SiteWecomEntranceConverter],
})
export class SiteModule {}
