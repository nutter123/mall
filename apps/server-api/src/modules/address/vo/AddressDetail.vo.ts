import { Expose, Transform } from 'class-transformer';

export class AddressDetailVO {
  id: number;
  createdDate: string;
  userId: number;
  useType: string;
  label: string;
  name: string;
  phone: string;
  gender: string;
  longitude: number;
  latitude: number;
  province: string;
  city: string;
  district: string;
  addressDetail: string;
  poi: string;
  type: string;
  remark: string;
  usageCount: number;
  lastUsedDate: string;
  typeCode: string;
  inSite: boolean;
  shopId: number;
}