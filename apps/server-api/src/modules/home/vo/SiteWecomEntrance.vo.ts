import { ApiProperty } from '@nestjs/swagger';

export class SiteWecomEntranceVO {
  @ApiProperty({ description: 'ID' })
  id: string;

  @ApiProperty({ description: '创建日期' })
  createdDate: string;

  @ApiProperty({ description: '创建人ID' })
  createdBy: string;

  @ApiProperty({ description: '创建人姓名' })
  createdName: string;

  @ApiProperty({ description: '最后修改日期' })
  lastModifiedDate: string;

  @ApiProperty({ description: '最后修改人ID' })
  lastModifiedBy: string;

  @ApiProperty({ description: '最后修改人姓名' })
  lastModifiedName: string;

  @ApiProperty({ description: '站点ID' })
  siteId: string;

  @ApiProperty({ description: '是否开启' })
  open: boolean;

  @ApiProperty({ description: '显示区域' })
  showArea: string;

  @ApiProperty({ description: '二维码' })
  qrCode: string;

  @ApiProperty({ description: '背景图片' })
  proBg: string;

  @ApiProperty({ description: '规则' })
  rule: string;

  @ApiProperty({ description: '分享标题' })
  shareTitle: string;

  @ApiProperty({ description: '分享图片' })
  sharePic: string;

  @ApiProperty({ description: '备注' })
  remark: string;

  @ApiProperty({ description: '小程序链接' })
  miniUrl: string;

  @ApiProperty({ description: '微信短链接' })
  weChatShortUrl: string;

  @ApiProperty({ description: 'HTML链接' })
  htmlUrl: string;

  @ApiProperty({ description: '活动描述' })
  activityDescribe: string;

  @ApiProperty({ description: '自定义描述' })
  customDescribe: string;

  @ApiProperty({ description: '个人描述' })
  personalDescribe: string;

  @ApiProperty({ description: '商品详情描述' })
  goodsDetailDescribe: string;

  @ApiProperty({ description: '商品详情自定义描述' })
  goodsDetailCustomDescribe: string;

  @ApiProperty({ description: '商品详情折扣描述' })
  goodsDetailDiscountDescribe: string;

  @ApiProperty({ description: '商品详情折扣自定义描述' })
  goodsDetailDiscountCustomDescribe: string;

  @ApiProperty({ description: '数据权限' })
  dataPermission: any;

  @ApiProperty({ description: '创建日期开始' })
  createdDateStart: any;

  @ApiProperty({ description: '创建日期结束' })
  createdDateEnd: any;

  @ApiProperty({ description: '最后修改日期开始' })
  lastModifiedDateStart: any;

  @ApiProperty({ description: '最后修改日期结束' })
  lastModifiedDateEnd: any;
}