// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 7. 获取指定类型文章 GET /v2-app-mall/article */
export async function articleControllerGetByType(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.ArticleControllerGetByTypeParams,
  options?: { [key: string]: any },
) {
  return request<API.Article[]>('/v2-app-mall/article', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
