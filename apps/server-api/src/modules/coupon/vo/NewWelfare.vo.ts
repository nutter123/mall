import { ApiProperty } from '@nestjs/swagger';
import { CouponNewUserVO } from './CouponNewUser.vo';
import {NewZoneVO} from "./NewZone.vo";

export class NewWelfareVO {
  @ApiProperty({ description: '图标' })
  icon: string;
  @ApiProperty({ description: '新人券' })
  newUserCoupon: CouponNewUserVO[];
  @ApiProperty({ description: '新人专区' })
  newZoneVo: NewZoneVO;
  @ApiProperty({ description: '背景图' })
  pic: string;
  @ApiProperty({ description: '福利描述' })
  totalAmount: string;
}