import { applyDecorators, Type } from '@nestjs/common';
import { ApiExtraModels, ApiOkResponse, getSchemaPath } from '@nestjs/swagger';
import { CommonRes } from '../dto/common-res.dto';
import { CommonPageRes } from '../dto/common-page.dto';

/**
 * 统一响应装饰器
 * @param model 数据模型 (例如 AdminUserVo)
 * @param isPage 是否为分页数据 (默认 false)
 */
export const ApiResWrapper = <TModel extends Type<any>>(model: TModel, isPage: boolean = false) => {
  return applyDecorators(
    // 1. 将用到的模型注册到 Swagger (否则 getSchemaPath 会找不到)
    ApiExtraModels(CommonRes, CommonPageRes, model),

    // 2. 定义响应结构
    ApiOkResponse({
      schema: {
        allOf: [
          // 第一层：继承 CommonRes (status, message, prompt 等)
          { $ref: getSchemaPath(CommonRes) },
          {
            properties: {
              // 重写 data 字段
              data: isPage
                ? {
                    allOf: [
                      { $ref: getSchemaPath(CommonPageRes) },
                      {
                        properties: {
                          records: {
                            type: 'array',
                            items: { $ref: getSchemaPath(model) },
                          },
                        },
                      },
                    ],
                  }
                : {
                    // === 单条数据情况 ===
                    $ref: getSchemaPath(model),
                  },
            },
          },
        ],
      },
    }),
  );
};
