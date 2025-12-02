export interface IApiResponse<T = any> {
  code: number;
  data: T;
  msg: string;
}

export enum ApiCode {
  SUCCESS = 200,
  ERR_PARAM = 400,
  ERR_AUTH = 401,
  ERR_FORBIDDEN = 403,
  ERR_SYSTEM = 500,
}
