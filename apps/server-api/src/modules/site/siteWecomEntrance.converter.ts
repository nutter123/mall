import { Injectable } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import {AddressVO} from "../address/vo/Address.vo";
import {SiteWecomEntranceVO} from "../home/vo/SiteWecomEntrance.vo";
@Injectable()
export class SiteWecomEntranceConverter {
  // entity 转 vo
  toVO(entity: SiteWecomEntrance): SiteWecomEntranceVO {
    return plainToInstance(SiteWecomEntranceVO, entity);
  }
}