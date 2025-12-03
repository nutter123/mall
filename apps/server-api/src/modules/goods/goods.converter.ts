import { Injectable } from '@nestjs/common';
import { GoodAttrVO } from './vo/GoodAttr.vo';
import { plainToInstance } from 'class-transformer';
import {GoodSpecVO} from "./vo/GoodSpec.vo";

@Injectable()
export class GoodsConverter {
  toAttrListVO(attributes: ProductAttributeModel[]): GoodAttrVO[] {
    // 1. 判空处理
    if (!attributes || attributes.length === 0) {
      return [];
    }
    return plainToInstance(
      GoodAttrVO, // 目标类
      attributes, // 源数组
    );
  }

  toGoodSpecVOList(specs: any[]):GoodSpecVO[]{
    return plainToInstance(
      GoodSpecVO, // 目标类
      specs, // 源数组
    );
  }
}