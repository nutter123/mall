// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 通过微信小程序解码绑定 处理微信小程序解码绑定逻辑 POST /v2-app-mall/token/bindByWechatMpDecode */
export async function tokenControllerBindByWechatMpDecode(options?: { [key: string]: any }) {
  return request<API.CommonRes & { data?: API.String }>('/v2-app-mall/token/bindByWechatMpDecode', {
    method: 'POST',
    ...(options || {}),
  });
}

/** 通过微信小程序获取Token 根据微信小程序参数获取用户Token POST /v2-app-mall/token/getByWechatMp */
export async function tokenControllerGetByWechatMp(body: API.GetByWechatMpReqVO, options?: { [key: string]: any }) {
  return request<API.CommonRes & { data?: API.TokenVO }>('/v2-app-mall/token/getByWechatMp', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取微信小程序基础信息 返回基础的欢迎信息 GET /v2-app-mall/token/getWechatMpBaseInfo */
export async function tokenControllerGetWechatMpBaseInfo(options?: { [key: string]: any }) {
  return request<API.CommonRes & { data?: API.String }>('/v2-app-mall/token/getWechatMpBaseInfo', {
    method: 'GET',
    ...(options || {}),
  });
}
