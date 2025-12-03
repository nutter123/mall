import { Module } from '@nestjs/common';
import { GoodsService } from './goods.service';
import { GoodsController } from './goods.controller';
import {GoodsConverter} from "./goods.converter";
import {EstimateModule} from "../estimate/estimate.module";

@Module({
  imports: [
    EstimateModule
  ],
  controllers: [GoodsController],
  providers: [GoodsService, GoodsConverter],
  exports: [GoodsService, GoodsConverter],
})
export class GoodsModule {}
