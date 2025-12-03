import {ApiProperty} from "@nestjs/swagger";
import {EstimateVO} from "./Estimate.vo";

export class GoodSpecVO{
  @ApiProperty({ description: '是否允许购买' })
  allowBuy: boolean;

  @ApiProperty({ description: '背景颜色' })
  backgroundColor: string;

  @ApiProperty({ description: '规格ID' })
  id: string;

  @ApiProperty({ description: '图片URL' })
  imgUrl: string;

  @ApiProperty({ description: '非GIF图片URL' })
  imgUrlNotGif: string;

  @ApiProperty({ description: '最小单位名称' })
  minUnitName: string;

  @ApiProperty({ description: '是否最小单位' })
  min: boolean;

  @ApiProperty({ description: '销售规格名称' })
  saleSpecName: string;

  @ApiProperty({ description: '规格数量' })
  specNum: number;

  @ApiProperty({ description: '规格名称' })
  specName: string;

  @ApiProperty({ description: '规格价格' })
  specPrice: number;

  @ApiProperty({ description: '规格库存' })
  specStock: number;

  @ApiProperty({ description: 'SPU ID' })
  spuId: number;

  @ApiProperty({ description: '状态' })
  status: number;

  @ApiProperty({ description: '店铺库存' })
  shopStock: number;

  @ApiProperty({ description: '站点库存' })
  siteStock: number;

  @ApiProperty({ description: '是否选中' })
  check: boolean;

  @ApiProperty({ description: '预估信息' })
  estimate: EstimateVO;
}