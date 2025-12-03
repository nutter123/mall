// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 获取店铺营业状态 GET /v2-app-mall/common/getStop */
export async function appUserControllerGetStop(options?: { [key: string]: any }) {
  return request<any>('/v2-app-mall/common/getStop', {
    method: 'GET',
    ...(options || {}),
  });
}
