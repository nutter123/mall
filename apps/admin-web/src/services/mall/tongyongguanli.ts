// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 通过微信小程序获取Token 根据微信小程序参数获取用户Token POST /v2-app-mall/common/getByWechatMp */
export async function commonControllerGetByWechatMp(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.CommonControllerGetByWechatMpParams,
  options?: { [key: string]: any },
) {
  return request<string>('/v2-app-mall/common/getByWechatMp', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 6. 获取停业配置 GET /v2-app-mall/common/getStop */
export async function commonControllerGetStop(options?: { [key: string]: any }) {
  return request<API.CommonRes & { data?: API.GetStopResVO }>('/v2-app-mall/common/getStop', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 18. 消息订阅 POST /v2-app-mall/common/subscribeMessage */
export async function commonControllerSubscribeMessage(
  body: API.SubscribeMessageReqVO,
  options?: { [key: string]: any },
) {
  return request<API.CommonRes & { data?: API.Boolean }>('/v2-app-mall/common/subscribeMessage', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
