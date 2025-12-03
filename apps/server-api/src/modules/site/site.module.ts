import { Module } from '@nestjs/common';
import { SiteService } from './site.service';
import { SiteController } from './site.controller';
import { SiteConverter } from './site.converter';
import { SiteWecomEntranceConverter } from './siteWecomEntrance.converter';

@Module({
  controllers: [SiteController],
  providers: [SiteService, SiteConverter, SiteWecomEntranceConverter],
  exports: [SiteService, SiteConverter, SiteWecomEntranceConverter],
})
export class SiteModule {}
