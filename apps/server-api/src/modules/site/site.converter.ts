import { Injectable } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import {UserVO} from "../user/vo/user.vo";
import {SiteDetailsVO} from "../home/vo/SiteDetails.vo";
import {AddressVO} from "../address/vo/Address.vo";
@Injectable()
export class SiteConverter {
  toVO(entity: Site): SiteDetailsVO {
    return plainToInstance(SiteDetailsVO, entity);
  }
}