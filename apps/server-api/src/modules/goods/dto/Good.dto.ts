import {ApiProperty} from "@nestjs/swagger";

export class GoodDTO{
  /*** 商品背景色 */
  @ApiProperty({ description: '商品背景色' })
  backgroundColor: string;

  /*** 分类名称 */
  @ApiProperty({ description: '分类名称' })
  categoryName: string;

  /*** 是否关注 */
  @ApiProperty({ description: '是否关注' })
  collect: boolean;

  /*** 套餐Id */
  @ApiProperty({ description: '套餐Id' })
  comboId: number;

  /*** 套餐 price */
  @ApiProperty({ description: '套餐 price' })
  comboPrice: number;

  /*** 是否券后 */
  @ApiProperty({ description: '是否券后' })
  couponFlag: boolean;

  /*** 普通到手价 */
  @ApiProperty({ description: '普通到手价' })
  estimateNorPrice: number;

  /*** 到手价 */
  @ApiProperty({ description: '到手价' })
  estimatePrice: number;

  /*** 到手价类型（0-新人，1-普通，2会员） */
  @ApiProperty({ description: '到手价类型（0-新人，1-普通，2会员）' })
  estimateType: string;

  /*** 会员到手价 */
  @ApiProperty({ description: '会员到手价' })
  estimateVipPrice: number;

  /*** 是否提供冰冻 */
  @ApiProperty({ description: '是否提供冰冻' })
  frozen: boolean;

  /*** 满赠说明 */
  @ApiProperty({ description: '满赠说明' })
  fullGiftLabel: string;

  /*** 榜单商品1级分类id */
  @ApiProperty({ description: '榜单商品1级分类id' })
  goods1LvlCatId: number;

  /*** 榜单商品1级分类名称 */
  @ApiProperty({ description: '榜单商品1级分类名称' })
  goods1LvlCatName: string;

  /*** 榜单商品2级分类id */
  @ApiProperty({ description: '榜单商品2级分类id' })
  goods2LvlCatId: number;

  /*** 榜单商品2级分类名称 */
  @ApiProperty({ description: '榜单商品2级分类名称' })
  goods2LvlCatName: string;

  /*** 商品扫码返现标签 */
  @ApiProperty({ description: '商品扫码返现标签' })
  goodsCashBack: boolean;

  /*** 商品分类名称 */
  @ApiProperty({ description: '商品分类名称' })
  groupName: string;

  /*** 主图 */
  @ApiProperty({ description: '主图' })
  imgUrl: string;

  /*** 非动图主图 */
  @ApiProperty({ description: '非动图主图' })
  imgUrlNotGif: string;

  /*** 栏位Id */
  @ApiProperty({ description: '栏位Id' })
  intellectSuggestId: string;

  /*** 栏位名称 */
  @ApiProperty({ description: '栏位名称' })
  intellectSuggestName: string;

  /*** 栏位明细 */
  @ApiProperty({ description: '栏位明细' })
  intellectSuggestRelation: string;

  /*** 标签样式 */
  @ApiProperty({ description: '标签样式' })
  labelImg: string;

  /*** 单次限购最大数量 */
  @ApiProperty({ description: '单次限购最大数量' })
  limitOnceMax: number;

  /*** 限制购买单次至多开启（1：是，0：否） */
  @ApiProperty({ description: '限制购买单次至多开启（1：是，0：否）' })
  limitOnceMaxOn: boolean;

  /*** 单次限购最小数量 */
  @ApiProperty({ description: '单次限购最小数量' })
  limitOnceMin: number;

  /*** 限制购买单次少开启（1：否 */
  @ApiProperty({ description: '限制购买单次少开启（1：否' })
  limitOnceMinOn: boolean;

  /*** 商品列表标签 */
  @ApiProperty({ description: '商品列表标签' })
  listLabel: string;

  /*** 会员日限购数 */
  @ApiProperty({ description: '会员日限购数' })
  memberDayLimit: number;

  /*** 会员日积分倍数 */
  @ApiProperty({ description: '会员日积分倍数' })
  memberDayTimes: number;

  /*** 最小规格到手价 */
  @ApiProperty({ description: '最小规格到手价' })
  minSpecPrice: number;

  /*** 最小规格单位名称 */
  @ApiProperty({ description: '最小规格单位名称' })
  minUnitName: string;

  /*** 是否仅支持堂食（否:0，是:1） */
  @ApiProperty({ description: '是否仅支持堂食（否:0，是:1）' })
  onlyEatIn: boolean;

  /*** 是否原价 */
  @ApiProperty({ description: '是否原价' })
  original: boolean;

  /*** 销售价格 */
  @ApiProperty({ description: '销售价格' })
  price: number;

  /*** 排行榜名称 */
  @ApiProperty({ description: '排行榜名称' })
  rankingName: string;

  /*** 排行榜名次 */
  @ApiProperty({ description: '排行榜名次' })
  rankingNum: number;

  /*** 排行榜类型(1人气榜，2回购榜) */
  @ApiProperty({ description: '排行榜类型(1人气榜，2回购榜)' })
  rankingType: number;

  /*** 推荐分组排序 */
  @ApiProperty({ description: '推荐分组排序' })
  recommendSort: number;

  /*** sku+规格id */
  @ApiProperty({ description: 'sku+规格id' })
  saleId: number;

  /*** 销售名称 */
  @ApiProperty({ description: '销售名称' })
  saleName: string;

  /*** 销售标签否精品） */
  @ApiProperty({ description: '销售标签否精品）' })
  saleType: number;

  /*** 商品卖点 */
  @ApiProperty({ description: '商品卖点' })
  sellPoint: string;

  /*** 神策信息（JSON格式） */
  @ApiProperty({ description: '神策信息（JSON格式）' })
  sensorsRecommendItemMsgDto: object;

  /*** 门店库存 */
  @ApiProperty({ description: '门店库存' })
  shopStock: number;

  /*** 排序 */
  @ApiProperty({ description: '排序' })
  sort: number;

  /*** 是否多规格 */
  @ApiProperty({ description: '是否多规格' })
  specMore: boolean;

  /*** 规格全称 */
  @ApiProperty({ description: '规格全称' })
  specName: string;

  /*** 规格库存 */
  @ApiProperty({ description: '规格库存' })
  specStock: number;

  /*** 是否极速送达 */
  @ApiProperty({ description: '是否极速送达' })
  speedDelivery: boolean;

  /*** spu_id */
  @ApiProperty({ description: 'spu_id' })
  spuId: number;

  /*** 商品状态（dict_type：site_goods_status） */
  @ApiProperty({ description: '商品状态（dict_type：site_goods_status）' })
  status: number;

  /*** 购买总次数 */
  @ApiProperty({ description: '购买总次数' })
  times: number;

  /*** 购买时间 */
  @ApiProperty({ description: '购买时间' })
  timesTime: Date;

  /*** 会员 */
  @ApiProperty({ description: '会员' })
  userVip: boolean;

  /*** 用户是否享受会员价 */
  @ApiProperty({ description: '用户是否享受会员价' })
  userVipPrice: boolean;

  /*** 视频封面图 */
  @ApiProperty({ description: '视频封面图' })
  videoImg: string;

  /*** 视频 */
  @ApiProperty({ description: '视频' })
  videoUrl: string;

  /*** 会员价 */
  @ApiProperty({ description: '会员价' })
  vipPrice: number;

  /*** 是否会员价 */
  @ApiProperty({ description: '是否会员价' })
  vipPriceSts: boolean;

  /*** 酒量值 */
  @ApiProperty({ description: '酒量值' })
  wineCoefficient: number;
}