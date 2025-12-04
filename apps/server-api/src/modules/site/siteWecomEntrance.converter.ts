import { Injectable } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import {SiteWecomEntranceVO} from "../home/vo/SiteWecomEntrance.vo";
import { SiteWecomEntrance } from './entities/site-wecom-entrance.entity';
@Injectable()
export class SiteWecomEntranceConverter {
  // entity 转 vo
  toVO(entity: SiteWecomEntrance): SiteWecomEntranceVO {
    return plainToInstance(SiteWecomEntranceVO, entity);
  }
}