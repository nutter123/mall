import { Module } from '@nestjs/common';
import { PromotionService } from './promotion.service';
import { PromotionController } from './promotion.controller';

import { TypeOrmModule } from '@nestjs/typeorm';
import { PromotionActivity } from './entities/promotion-activity.entity';
import { PromotionProductLink } from './entities/promotion-product-link.entity';
import { PromotionSkuLink } from './entities/promotion-sku-link.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PromotionActivity, PromotionProductLink, PromotionSkuLink])],
  controllers: [PromotionController],
  providers: [PromotionService],
})
export class PromotionModule {}
