import { Injectable } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import {SiteDetailsVO} from "../home/vo/SiteDetails.vo";
import {AddressVO} from "../address/vo/Address.vo";
import { Site } from './entities/site.entity';

@Injectable()
export class SiteConverter {
  toVO(entity: Site): SiteDetailsVO {
    return plainToInstance(SiteDetailsVO, entity);
  }
}