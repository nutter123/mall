import { createParamDecorator, ExecutionContext } from '@nestjs/common';

// 定义一个 TypeScript 接口，用于确保返回值的类型安全
export interface CommonHeadersWithoutSiteIdDto {
    edition?: string;
    'jxe-token'?: string;
    merchantId?: string;
    merchantTableId?: string;
    'n-d-version'?: string;
    nonce?: string;
    shop?: string;
    shopId?: string;
    sign?: string;
    siteShopId?: string;
    tableId?: string;
    timestamp?: string;
}

/**
 * 自定义参数装饰器：用于从请求中提取一组固定的公共 Header
 * 使用方式: @CommonHeaders() commonHeaders: CommonHeadersDto
 */
export const CommonHeadersWithoutSiteId = createParamDecorator(
    (data: unknown, ctx: ExecutionContext): CommonHeadersWithoutSiteIdDto => {
        const request = ctx.switchToHttp().getRequest();
        const headers = request.headers;

        // NestJS/Express 会将所有 Header key 自动转换为小写，所以我们必须使用小写键名来获取值
        return {
            edition: headers['edition'],
            'jxe-token': headers['jxe-token'], // NestJS 默认保留带横线的键名
            merchantId: headers['merchantid'],
            merchantTableId: headers['merchanttableid'],
            'n-d-version': headers['n-d-version'],
            nonce: headers['nonce'],
            shop: headers['shop'],
            shopId: headers['shopid'],
            sign: headers['sign'],
            siteShopId: headers['siteshopid'],
            tableId: headers['tableid'],
            timestamp: headers['timestamp'],
        } as CommonHeadersWithoutSiteIdDto;
    },
);