export enum BusinessErrorCode {
  // 基础错误
  COMMON_ERROR = 10001,
  
  // 用户模块 (2xxxx)
	USERNAME_EXIST = 20001,
	USERNAME_OR_PASSWORD_ERROR = 20002,
  
  // 权限模块 (4xxxx)
  ACCESS_FORBIDDEN = 40003,
  TOKEN_INVALID = 40001,
  
  // 业务逻辑错误
  CART_SKU_LIMIT = 50001, // 库存不足
}