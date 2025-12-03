import {ApiProperty} from "@nestjs/swagger";

export class LevelRelationVO{
  @ApiProperty({ description: '是否赠送优惠券' })
  giftCoupon: boolean;

  @ApiProperty({ description: '是否赠送积分' })
  giftIntegral: boolean;

  @ApiProperty({ description: '是否赠送SVIP' })
  giftSvip: boolean;

  @ApiProperty({ description: '积分数量' })
  integralQuantity: number;

  @ApiProperty({ description: '等级名称' })
  levelName: string;

  @ApiProperty({ description: '关系类型' })
  relationType: string;

  @ApiProperty({ description: 'SVIP结束时间' })
  svipEnd: string;
}