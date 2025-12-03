import {RightsBaseVO} from "./RightsBase.vo";

export class VipVO{
  cardNum: string;
  economizeMoney: number;
  endDate: string;
  enjoySvipPrice: boolean;
  experience: number;
  firstOpenDate: string;
  haveCard: boolean;
  icon: string;
  isSvip: boolean;
  levelId: string;
  nextLevel: number;
  nickName: string;
  picture: string;
  rightsList: RightsBaseVO[];
  rightsTotal: number;
  svipId: number;
  svipType: string;
  tianCai: boolean;
  vipName: string;
}