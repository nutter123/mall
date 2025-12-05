import { applyDecorators } from '@nestjs/common';
import { ApiHeader } from '@nestjs/swagger';

// 定义所有公共 Header 的数组
const commonHeaders = [
    { name: 'edition', description: '客户端（dict_type: mall_edition）', required: false },
    { name: 'jxe-token', description: '令牌', required: false },
    { name: 'merchantId', description: '商家id', required: false },
    { name: 'merchantTableId', description: '商家桌号id', required: false },
    { name: 'n-d-version', description: '服务版本', required: false },
    { name: 'nonce', description: '随机字符串', required: false },
    { name: 'shop', description: '是否打酒站', required: false },
    { name: 'shopId', description: '门店id', required: false },
    { name: 'sign', description: '签名串', required: false },
    { name: 'siteId', description: '站点id', required: false },
    { name: 'siteShopId', description: '进站门店id', required: false },
    { name: 'tableId', description: '桌号id', required: false },
    { name: 'timestamp', description: '请求时间戳', required: false },
];

/**
 * 组合式 Swagger 装饰器：用于一次性向 Swagger 文档添加所有公共 Header。
 * 使用方式: @MallHeaders()
 */
export function MallHeaders() {
    // 将所有 ApiHeader 装饰器应用到同一个方法上
    return applyDecorators(
        ...commonHeaders.map(header => ApiHeader(header)),
    );
}

export function MallHeadersWithoutSiteId() {
    // 将所有 ApiHeader 装饰器应用到同一个方法上
    return applyDecorators(
        ...commonHeaders.filter(header => header.name !== 'siteId').map(header => ApiHeader(header)),
    );
}