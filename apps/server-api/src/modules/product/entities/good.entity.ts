import { Entity, Column } from 'typeorm';
import { BaseEntity } from '../../../common/entities/base.entity';

@Entity('good')
export class Good extends BaseEntity {
  @Column({ name: 'background_color', length: 255, nullable: true })
  backgroundColor: string;

  @Column({ name: 'category_name', length: 255, nullable: true })
  categoryName: string;

  @Column({ nullable: true })
  collect: boolean;

  @Column({ name: 'combo_id', nullable: true })
  comboId: number;

  @Column({ name: 'combo_price', nullable: true })
  comboPrice: number;

  @Column({ name: 'coupon_flag', nullable: true })
  couponFlag: boolean;

  @Column({ name: 'estimate_nor_price', nullable: true })
  estimateNorPrice: number;

  @Column({ name: 'estimate_price', nullable: true })
  estimatePrice: number;

  @Column({ name: 'estimate_type', length: 255, nullable: true })
  estimateType: string;

  @Column({ name: 'estimate_vip_price', nullable: true })
  estimateVipPrice: number;

  @Column({ nullable: true })
  frozen: boolean;

  @Column({ name: 'full_gift_label', length: 255, nullable: true })
  fullGiftLabel: string;

  @Column({ name: 'goods1_lvl_cat_id', nullable: true })
  goods1LvlCatId: number;

  @Column({ name: 'goods1_lvl_cat_name', length: 255, nullable: true })
  goods1LvlCatName: string;

  @Column({ name: 'goods2_lvl_cat_id', nullable: true })
  goods2LvlCatId: number;

  @Column({ name: 'goods2_lvl_cat_name', length: 255, nullable: true })
  goods2LvlCatName: string;

  @Column({ name: 'goods_cash_back', nullable: true })
  goodsCashBack: boolean;

  @Column({ name: 'group_name', length: 255, nullable: true })
  groupName: string;

  @Column({ name: 'img_url', length: 255, nullable: true })
  imgUrl: string;

  @Column({ name: 'img_url_not_gif', length: 255, nullable: true })
  imgUrlNotGif: string;

  @Column({ name: 'intellect_suggest_id', length: 255, nullable: true })
  intellectSuggestId: string;

  @Column({ name: 'intellect_suggest_name', length: 255, nullable: true })
  intellectSuggestName: string;

  @Column({ name: 'intellect_suggest_relation', length: 255, nullable: true })
  intellectSuggestRelation: string;

  @Column({ name: 'label_img', length: 255, nullable: true })
  labelImg: string;

  @Column({ name: 'limit_once_max', nullable: true })
  limitOnceMax: number;

  @Column({ name: 'limit_once_max_on', nullable: true })
  limitOnceMaxOn: boolean;

  @Column({ name: 'limit_once_min', nullable: true })
  limitOnceMin: number;

  @Column({ name: 'limit_once_min_on', nullable: true })
  limitOnceMinOn: boolean;

  @Column({ name: 'list_label', length: 255, nullable: true })
  listLabel: string;

  @Column({ name: 'member_day_limit', nullable: true })
  memberDayLimit: number;

  @Column({ name: 'member_day_times', nullable: true })
  memberDayTimes: number;

  @Column({ name: 'min_spec_price', nullable: true })
  minSpecPrice: number;

  @Column({ name: 'min_unit_name', length: 255, nullable: true })
  minUnitName: string;

  @Column({ name: 'only_eat_in', nullable: true })
  onlyEatIn: boolean;

  @Column({ nullable: true })
  original: boolean;

  @Column({ nullable: true })
  price: number;

  @Column({ name: 'ranking_name', length: 255, nullable: true })
  rankingName: string;

  @Column({ name: 'ranking_num', nullable: true })
  rankingNum: number;

  @Column({ name: 'ranking_type', nullable: true })
  rankingType: number;

  @Column({ name: 'recommend_sort', nullable: true })
  recommendSort: number;

  @Column({ name: 'sale_id', nullable: true })
  saleId: number;

  @Column({ name: 'sale_name', length: 255, nullable: true })
  saleName: string;

  @Column({ name: 'sale_type', nullable: true })
  saleType: number;

  @Column({ name: 'sell_point', length: 255, nullable: true })
  sellPoint: string;

  @Column({ name: 'sensors_recommend_item_msg_dto', type: 'json', nullable: true })
  sensorsRecommendItemMsgDto: any;

  @Column({ name: 'shop_stock', nullable: true })
  shopStock: number;

  @Column({ nullable: true })
  sort: number;

  @Column({ name: 'spec_more', nullable: true })
  specMore: boolean;

  @Column({ name: 'spec_name', length: 255, nullable: true })
  specName: string;

  @Column({ name: 'spec_stock', nullable: true })
  specStock: number;

  @Column({ name: 'speed_delivery', nullable: true })
  speedDelivery: boolean;

  @Column({ name: 'spu_id', nullable: true })
  spuId: number;

  @Column({ nullable: true })
  status: number;

  @Column({ nullable: true })
  times: number;

  @Column({ name: 'times_time', type: 'datetime', nullable: true })
  timesTime: Date;

  @Column({ name: 'user_vip', nullable: true })
  userVip: boolean;

  @Column({ name: 'user_vip_price', nullable: true })
  userVipPrice: boolean;

  @Column({ name: 'video_img', length: 255, nullable: true })
  videoImg: string;

  @Column({ name: 'video_url', length: 255, nullable: true })
  videoUrl: string;

  @Column({ name: 'vip_price', nullable: true })
  vipPrice: number;

  @Column({ name: 'vip_price_sts', nullable: true })
  vipPriceSts: boolean;

  @Column({ name: 'wine_coefficient', nullable: true })
  wineCoefficient: number;
}