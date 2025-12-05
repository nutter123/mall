// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 19.领取优惠券（单张） POST /v2-app-mall/coupon/drawCouponOne */
export async function couponControllerDrawCouponOne(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.CouponControllerDrawCouponOneParams,
  options?: { [key: string]: any },
) {
  return request<API.CommonRes & { data?: API.GetCouponDrawCouponVO }>('/v2-app-mall/coupon/drawCouponOne', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 18.领券优惠券列表 GET /v2-app-mall/coupon/getCouponDrawCoupon */
export async function couponControllerGetCouponDrawCoupon(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.CouponControllerGetCouponDrawCouponParams,
  options?: { [key: string]: any },
) {
  return request<API.CommonRes & { data?: API.GetCouponDrawCouponVO }>('/v2-app-mall/coupon/getCouponDrawCoupon', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 9.查询用户新人优惠券 GET /v2-app-mall/coupon/getNewUserCoupon */
export async function couponControllerGetNewUserCoupon(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.CouponControllerGetNewUserCouponParams,
  options?: { [key: string]: any },
) {
  return request<API.CommonRes & { data?: API.GetNewUserCouponResVO }>('/v2-app-mall/coupon/getNewUserCoupon', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 34. 新人优惠券信息 GET /v2-app-mall/coupon/getNewUserCouponInfo */
export async function couponControllerGetNewUserCouponInfo(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.CouponControllerGetNewUserCouponInfoParams,
  options?: { [key: string]: any },
) {
  return request<API.CommonRes & { data?: API.UserCouponInfoVO }>('/v2-app-mall/coupon/getNewUserCouponInfo', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 14.查询商品可用优惠券列表 GET /v2-app-mall/coupon/getSelfCoupon */
export async function couponControllerGetSelfCoupon(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.CouponControllerGetSelfCouponParams,
  options?: { [key: string]: any },
) {
  return request<API.CommonRes & { data?: API.GetCouponDrawCouponVO }>('/v2-app-mall/coupon/getSelfCoupon', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 13.用户优惠券过期提醒数量 GET /v2-app-mall/coupon/getUserOverdueNum */
export async function couponControllerGetUserOverdueNum(options?: { [key: string]: any }) {
  return request<API.CommonRes & { data?: API.Number }>('/v2-app-mall/coupon/getUserOverdueNum', {
    method: 'GET',
    ...(options || {}),
  });
}
