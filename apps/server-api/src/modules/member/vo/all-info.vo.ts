import { ApiProperty } from '@nestjs/swagger';
import { Expose, Type } from 'class-transformer';

// 假设这些嵌套 VO 在您的项目中被定义
// 请根据实际路径修改导入
class GodUserInfoVO {}
class RightsBaseVO {}
class SvipGoodVO {}

/**
 * AllInfoVO: 用户中心所需配置参数
 * 所有字段都设置为可选 (?:) 并允许 undefined
 */
export class AllInfoVO {
  @Expose()
  @ApiProperty({ description: '活动描述', example: '限时免费领取', nullable: true })
  activityDescribe?: string;

  @Expose()
  @ApiProperty({ description: '卡号', example: 'A12345', nullable: true })
  cardNum?: string;

  @Expose()
  @ApiProperty({ description: '所有优惠券数量', example: 5, nullable: true })
  couponAllNum?: number;

  @Expose()
  @ApiProperty({ description: '自定义描述', nullable: true })
  customDescribe?: string;

  @Expose()
  @ApiProperty({ description: '购卡福利标签', nullable: true })
  giftCardPackageLabel?: string;

  // 嵌套对象：需要使用 @Type(Type) 来保证转换正确
  @Expose()
  @Type(() => GodUserInfoVO)
  @ApiProperty({ description: '超级用户信息', type: GodUserInfoVO, nullable: true })
  godUserInfoVo?: GodUserInfoVO;

  @Expose()
  @ApiProperty({ description: '是否有卡', nullable: true })
  haveCard?: boolean;

  @Expose()
  @ApiProperty({ description: '是否有兑换活动', nullable: true })
  haveExchange?: boolean;

  @Expose()
  @ApiProperty({ description: '是否有团购活动', nullable: true })
  haveTeamBuy?: boolean;

  @Expose()
  @ApiProperty({ description: '总积分', example: 1200, nullable: true })
  integralTotal?: number;

  @Expose()
  @ApiProperty({ description: '无效数量', example: 0, nullable: true })
  invalid?: number;

  @Expose()
  @ApiProperty({ description: '无效文本提示', nullable: true })
  invalidText?: string;

  @Expose()
  @ApiProperty({ description: '月节省金额', example: 199999, nullable: true })
  monthSaveMoney?: number;

  @Expose()
  @ApiProperty({ description: '未激活数量', example: 0, nullable: true })
  notActiveCount?: number;

  @Expose()
  @ApiProperty({ description: '个人描述', nullable: true })
  personalDescribe?: string;

  @Expose()
  @ApiProperty({ description: '精炼物品地址', nullable: true })
  refineThingAddr?: boolean;

  // 嵌套列表：需要使用 @Type(Type)
  @Expose()
  @Type(() => RightsBaseVO)
  @ApiProperty({ description: '权益列表', type: [RightsBaseVO], nullable: true })
  rightsList?: RightsBaseVO[];

  @Expose()
  @ApiProperty({ description: '权益红点兑换状态', nullable: true })
  rightsRedExchange?: boolean;

  @Expose()
  @ApiProperty({ description: '权益红点介绍', nullable: true })
  rightsRedIntroduction?: string;

  @Expose()
  @ApiProperty({ description: '权益总数', example: 13, nullable: true })
  rightsTotal?: number;

  // 嵌套列表
  @Expose()
  @Type(() => SvipGoodVO)
  @ApiProperty({ description: 'Svip商品列表', type: [SvipGoodVO], nullable: true })
  svipGoods?: SvipGoodVO[];

  @Expose()
  @ApiProperty({ description: '团购文本', example: '¥0.01', nullable: true })
  teamBuyText?: string;

  @Expose()
  @ApiProperty({ description: '物品展示开关', nullable: true })
  thingShow?: boolean;

  @Expose()
  @ApiProperty({ description: '总余额', example: 0, nullable: true })
  totalBalance?: number;

  @Expose()
  @ApiProperty({ description: '企业微信开启状态', nullable: true })
  weComOpen?: boolean;

  @Expose()
  @ApiProperty({ description: '即将过期优惠券数量', example: 0, nullable: true })
  willExpireCouponNum?: number;

  @Expose()
  @ApiProperty({ description: '即将过期积分', nullable: true })
  willExpireIntegral?: number;
}
