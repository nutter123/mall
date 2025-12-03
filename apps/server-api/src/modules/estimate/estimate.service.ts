import { Injectable } from '@nestjs/common';
import {EstimateVO} from "../goods/vo/Estimate.vo";

@Injectable()
export class EstimateService {
  async estimate(skuIdString: string): Promise<EstimateVO> {
    let estimateVO: EstimateVO = new EstimateVO();
    estimateVO.price = 33299;
    estimateVO.onePrice = 33299;
    estimateVO.specNum = 4;
    estimateVO.minUnitName = "罐";
    estimateVO.vipMinus = 0;
    estimateVO.discountPromotionMinus = 0;
    estimateVO.newDiscountPromotionMinus = 0;
    estimateVO.fullPromotionMinus = 0;
    estimateVO.optionalPromotionMinus = 0;
    estimateVO.couponMinus = 2900;
    estimateVO.couponId = "1344928318279819358";
    estimateVO.couponName = "ztxB428";
    estimateVO.estimatePrice = 7599;
    estimateVO.estimateType = "1";
    estimateVO.vipLabel = "会员特惠";
    estimateVO.couponFlag = true;
    estimateVO.calcCoupon = 1;
    estimateVO.detailFlag = false;
    return estimateVO;
  }
}
