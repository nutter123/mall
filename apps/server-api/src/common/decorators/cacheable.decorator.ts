import { SetMetadata } from '@nestjs/common';

export const CACHE_KEY_METADATA = 'cache_key_metadata';
export const CACHE_TTL_METADATA = 'cache_ttl_metadata';

/**
 * 自动缓存装饰器
 * @param ttl 缓存时间(秒)
 * @param keyPrefix 自定义Key前缀，如果不传则自动生成
 */
export const Cacheable = (ttl: number = 60, keyPrefix?: string) => {
  return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
    SetMetadata(CACHE_TTL_METADATA, ttl)(target, propertyKey, descriptor);
    SetMetadata(CACHE_KEY_METADATA, keyPrefix)(target, propertyKey, descriptor);
  };
};
