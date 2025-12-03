import { ApiProperty } from '@nestjs/swagger';
import { AdvertisingVO } from '../../advertising/vo/Advertising.vo';

export class GetPersonalityGridResVO {
  @ApiProperty({ description: '个性化方格轮播图' })
  advertisingVoList: AdvertisingVO[];

  @ApiProperty({ description: '个性化方格模式' })
  gridMode: string;

  @ApiProperty({ description: 'id' })
  id: number;

  @ApiProperty({ description: '方格位置1' })
  personalityPosition1: string;

  @ApiProperty({ description: '方格位置2' })
  personalityPosition2: string;

  @ApiProperty({ description: '方格位置3' })
  personalityPosition3: string;

  @ApiProperty({ description: '方格位置4' })
  personalityPosition4: string;

  @ApiProperty({ description: '标题' })
  title: string;
}