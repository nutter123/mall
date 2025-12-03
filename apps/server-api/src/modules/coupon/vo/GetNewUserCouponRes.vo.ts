import { ApiProperty } from '@nestjs/swagger';
import {CouponNewSiteUserVO} from "./CouponNewSiteUser.vo";
import {CouponNewUserVO} from "./CouponNewUser.vo";
import {NewWelfareVO} from "./NewWelfare.vo";

export class GetNewUserCouponResVO {
  @ApiProperty({ description: '站点新人券信息' })
  couponNewSiteUserVo: CouponNewSiteUserVO[];

  @ApiProperty({ description: '新人券信息' })
  couponNewUserVo: CouponNewUserVO[];

  @ApiProperty({ description: '是否未领新人券' })
  gotNewCoupon: boolean;

  @ApiProperty({ description: '是否未领站点券' })
  gotNewSiteCoupon: boolean;

  @ApiProperty({ description: '是否是站点新用户' })
  newSiteUser: boolean;

  @ApiProperty({ description: '是否是新用户' })
  newUser: boolean;

  @ApiProperty({
    description: '新人福利(新人弹窗为样式一时返回)新人福利新人福利',
  })
  newWelfareVo: NewWelfareVO;

  @ApiProperty({
    description: '新人弹窗样式样式（dict_type: content_new_popup_style）string',
  })
  style: string;
}