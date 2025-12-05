// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 14. 地址列表状态分组 GET /v2-app-mall/address/listStatusGroup */
export async function addressControllerListStatusGroup(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.AddressControllerListStatusGroupParams,
  options?: { [key: string]: any },
) {
  return request<API.CommonRes & { data?: API.AddressGroupVO }>('/v2-app-mall/address/listStatusGroup', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
