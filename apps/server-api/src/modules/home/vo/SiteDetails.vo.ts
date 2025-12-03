import {NoticeNewVO} from "./NoticeNew.vo";

export class SiteDetailsVO{
  id: string;
  siteName: string;
  openStatus: boolean;
  openStatusNew: number;
  expectedOpenTime: string;
  version: number;
  city: string;
  firstPinYin: string;
  pinYin: string;
  isBusiness: boolean;
  isTransfer: boolean;
  areas: any;
  shopId: any;
  businessOpen: string;
  businessEnd: string;
  siteCenterLocation: string;
  invoiceType: string;
  provideSpecialTicke: boolean;
  notice: string[];
  siteSvip: boolean;
  deliveryTime: number;
  premiumDeliveryTime: number;
  siteInvitation: boolean;
  invitationCash: boolean;
  reservationStartTime: string;
  reservation: boolean;
  noticeNew: NoticeNewVO[];
  shopNum: number;
  mourningThemeOpen: boolean;
  siteInviteTask: boolean;
  retail: boolean;
  godSite: boolean;
  fastSite: boolean;
}