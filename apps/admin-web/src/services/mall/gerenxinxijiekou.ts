// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 1. 获取个人信息 GET /v2-app-mall/info/get */
export async function infoControllerGet(options?: { [key: string]: any }) {
  return request<API.CommonRes & { data?: API.User }>('/v2-app-mall/info/get', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 13. 用户中心所需数据 GET /v2-app-mall/info/getAllInfo */
export async function infoControllerGetAllInfo(options?: { [key: string]: any }) {
  return request<API.CommonRes & { data?: API.AllInfoVO }>('/v2-app-mall/info/getAllInfo', {
    method: 'GET',
    ...(options || {}),
  });
}
