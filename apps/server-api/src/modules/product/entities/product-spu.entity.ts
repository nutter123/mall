import { Entity, Column } from 'typeorm';
import { BaseEntity } from '../../../common/entities/base.entity';

@Entity('product_spu')
export class ProductSpu extends BaseEntity {
  @Column({ name: 'sale_name', length: 255, nullable: true })
  saleName: string;

  @Column({ name: 'sell_point', length: 255, nullable: true })
  sellPoint: string;

  @Column({ name: 'category_id', nullable: true })
  categoryId: number;

  @Column({ name: 'group_name', length: 255, nullable: true })
  groupName: string;

  @Column({ name: 'main_image_url', length: 255, nullable: true })
  mainImageUrl: string;

  @Column({ name: 'main_image_url_not_gif', length: 255, nullable: true })
  mainImageUrlNotGif: string;

  @Column({ name: 'video_url', length: 255, nullable: true })
  videoUrl: string;

  @Column({ name: 'video_img', length: 255, nullable: true })
  videoImg: string;

  @Column({ name: 'background_color', length: 255, nullable: true })
  backgroundColor: string;

  @Column({ name: 'list_label', length: 255, nullable: true })
  listLabel: string;

  @Column({ name: 'label_image', length: 255, nullable: true })
  labelImage: string;

  @Column({ name: 'sale_type', nullable: true })
  saleType: number;

  @Column({ name: 'only_eat_in', default: false, nullable: true })
  onlyEatIn: boolean;

  @Column({ default: false, nullable: true })
  frozen: boolean;

  @Column({ name: 'speed_delivery', default: false, nullable: true })
  speedDelivery: boolean;

  @Column({ name: 'goods_cash_back', default: false, nullable: true })
  goodsCashBack: boolean;

  @Column({ name: 'wine_coefficient', nullable: true })
  wineCoefficient: number;

  @Column({ name: 'spec_more', default: false, nullable: true })
  specMore: boolean;

  @Column({ nullable: true })
  status: number;

  @Column({ default: 0, nullable: true })
  sort: number;

  @Column({ name: 'recommend_sort', default: 0, nullable: true })
  recommendSort: number;

  @Column({ type: 'text', nullable: true })
  details: string;

  @Column({ default: false, nullable: true })
  authentic: boolean;

  @Column({ name: 'overtime_payment', default: false, nullable: true })
  overtimePayment: boolean;

  @Column({ name: 'cash_on_delivery', default: false, nullable: true })
  cashOnDelivery: boolean;

  @Column({ name: 'alone_send', default: false, nullable: true })
  aloneSend: boolean;

  @Column({ name: 'share_title', length: 255, nullable: true })
  shareTitle: string;

  @Column({ name: 'share_info', length: 255, nullable: true })
  shareInfo: string;

  @Column({ name: 'share_img', length: 255, nullable: true })
  shareImg: string;

  @Column({ name: 'sharing_image', length: 255, nullable: true })
  sharingImage: string;

  @Column({ name: 'title_main', length: 255, nullable: true })
  titleMain: string;

  @Column({ name: 'brand_id', nullable: true })
  brandId: number;

  @Column({ name: 'evaluate_nums', default: 0, nullable: true })
  evaluateNums: number;

  @Column({ name: 'rules_explain', type: 'text', nullable: true })
  rulesExplain: string;

  @Column({ name: 'sale_id', nullable: true })
  saleId: number;

  @Column({ name: 'sale_spec_name', length: 20, nullable: true })
  saleSpecName: string;

  @Column({ name: 'default_sku_id', nullable: true })
  defaultSkuId: number;
}