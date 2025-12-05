// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 16.查询等级奖励 GET /v2-app-mall/vip/getLevelRelation */
export async function vipControllerGetLevelRelation(options?: { [key: string]: any }) {
  return request<API.CommonRes & { data?: API.LevelRelationVO }>('/v2-app-mall/vip/getLevelRelation', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 1. 获取用户会员信息 GET /v2-app-mall/vip/getUserVipInfo */
export async function vipControllerGetUserVipInfo(options?: { [key: string]: any }) {
  return request<API.CommonRes & { data?: API.VipVO }>('/v2-app-mall/vip/getUserVipInfo', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 20.会员日弹屏 GET /v2-app-mall/vip/vipDayPopup */
export async function vipControllerVipDayPopup(options?: { [key: string]: any }) {
  return request<API.CommonRes & { data?: API.VipDayPopupResVO }>('/v2-app-mall/vip/vipDayPopup', {
    method: 'GET',
    ...(options || {}),
  });
}
