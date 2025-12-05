// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 13. 获取首页所需信息 GET /v2-app-mall/home/all */
export async function homeControllerAll(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.HomeControllerAllParams,
  options?: { [key: string]: any },
) {
  return request<API.CommonRes & { data?: API.AllResVO }>('/v2-app-mall/home/all', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 14. 获取首页所需配置 GET /v2-app-mall/home/allConfig */
export async function homeControllerAllConfig(options?: { [key: string]: any }) {
  return request<API.CommonRes & { data?: API.HomeAllConfigVO }>('/v2-app-mall/home/allConfig', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 1. 获取背景图 GET /v2-app-mall/home/background */
export async function homeControllerBackground(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.HomeControllerBackgroundParams,
  options?: { [key: string]: any },
) {
  return request<API.CommonRes & { data?: API.BackgroundVO }>('/v2-app-mall/home/background', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 13. 个性化方格 GET /v2-app-mall/home/getPersonalityGrid */
export async function homeControllerGetPersonalityGrid(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.HomeControllerGetPersonalityGridParams,
  options?: { [key: string]: any },
) {
  return request<API.CommonRes & { data?: API.GetPersonalityGridResVO }>('/v2-app-mall/home/getPersonalityGrid', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 17. 新人功能区启用 GET /v2-app-mall/home/newPageEnable */
export async function homeControllerNewPageEnable(options?: { [key: string]: any }) {
  return request<API.CommonRes & { data?: API.String }>('/v2-app-mall/home/newPageEnable', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 2. 获取新人福利(包含新人专区) GET /v2-app-mall/home/newWelfare */
export async function homeControllerNewWelfare(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.HomeControllerNewWelfareParams,
  options?: { [key: string]: any },
) {
  return request<API.CommonRes & { data?: API.NewWelfareVO }>('/v2-app-mall/home/newWelfare', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 10.2. 获取推荐专区商品（包含套餐） GET /v2-app-mall/home/recommendZoneGoodsAndCombo */
export async function homeControllerRecommendZoneGoodsAndCombo(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.HomeControllerRecommendZoneGoodsAndComboParams,
  options?: { [key: string]: any },
) {
  return request<API.CommonRes & { data?: API.RecommendZoneGoodsAndComboResVO }>(
    '/v2-app-mall/home/recommendZoneGoodsAndCombo',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    },
  );
}

/** 8. 获取秒杀限时折扣专区 GET /v2-app-mall/home/seckillDiscountZone */
export async function homeControllerGetSeckillDiscountZone(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.HomeControllerGetSeckillDiscountZoneParams,
  options?: { [key: string]: any },
) {
  return request<API.CommonRes & { data?: API.SeckillDiscountZoneResVO }>('/v2-app-mall/home/seckillDiscountZone', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
