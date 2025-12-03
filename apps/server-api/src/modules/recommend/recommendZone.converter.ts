import { Injectable } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import {RecommendZoneVO} from "../home/vo/RecommendZone.vo";
@Injectable()
export class RecommendZoneConverter {
  doToVoList (entityList: any[]): any[] {
    return plainToInstance(RecommendZoneVO, entityList);
  }
}