// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 根据经纬度获取站点信息 GET /v2-app-mall/site/getByLngLat */
export async function siteControllerGetSiteByLocation(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.SiteControllerGetSiteByLocationParams,
  options?: { [key: string]: any },
) {
  return request<API.CommonRes & { data?: API.SiteVO }>('/v2-app-mall/site/getByLngLat', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
