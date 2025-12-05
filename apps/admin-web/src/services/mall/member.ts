// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 此处后端没有提供注释 GET /v2-app-mall/member */
export async function memberControllerFindAll(options?: { [key: string]: any }) {
  return request<string>('/v2-app-mall/member', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /v2-app-mall/member */
export async function memberControllerCreate(body: API.CreateMemberDto, options?: { [key: string]: any }) {
  return request<string>('/v2-app-mall/member', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /v2-app-mall/member/${param0} */
export async function memberControllerFindOne(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.MemberControllerFindOneParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<string>(`/v2-app-mall/member/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 DELETE /v2-app-mall/member/${param0} */
export async function memberControllerRemove(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.MemberControllerRemoveParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<string>(`/v2-app-mall/member/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 PATCH /v2-app-mall/member/${param0} */
export async function memberControllerUpdate(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.MemberControllerUpdateParams,
  body: API.UpdateMemberDto,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<string>(`/v2-app-mall/member/${param0}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}
