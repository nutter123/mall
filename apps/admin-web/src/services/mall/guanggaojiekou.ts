// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 1. 获取广告数组 GET /v2-app-mall/advertising/getList */
export async function advertisingControllerGetList(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.AdvertisingControllerGetListParams,
  options?: { [key: string]: any },
) {
  return request<API.CommonRes & { data?: API.GetListResVO }>('/v2-app-mall/advertising/getList', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
