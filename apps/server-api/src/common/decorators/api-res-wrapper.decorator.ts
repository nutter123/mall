import { applyDecorators, Type } from '@nestjs/common';
import { ApiExtraModels, ApiOkResponse, getSchemaPath } from '@nestjs/swagger';
import { CommonRes } from '../dto/common-res.dto'; // 导入我们定义的 CommonRes DTO
import { CommonPageRes } from '../dto/common-page.dto'; // 导入 CommonPageRes DTO

/**
 * 组合式 Swagger 装饰器：用于包装统一返回结构 (CommonRes<T>)
 * 只是用于 Swagger 文档，实际运行时不会改变返回值
 * @param model 接口实际返回的数据体类型 (例如 UserVO, ProductVO, CommonPageRes<UserVO>)
 */
export const ApiResWrapper = <TModel extends Type<any>>(model: TModel) => {
  // 获取模型的构造函数名称
  const modelName = model.name;

  // 检查是否为 CommonPageRes 类型
  const isCommonPageRes = modelName === 'CommonPageRes';

  // 创建装饰器链
  const decorators = [];

  // 1. 注册所有相关模型到 Swagger
  decorators.push(ApiExtraModels(CommonRes));

  // 如果是分页响应，需要额外注册 CommonPageRes 和 CommonPageMeta
  if (isCommonPageRes) {
    decorators.push(ApiExtraModels(CommonPageRes));
  } else {
    // 如果是普通模型，注册该模型
    decorators.push(ApiExtraModels(model));
  }

  // 2. 定义响应结构
  decorators.push(
    ApiOkResponse({
      schema: {
        allOf: [
          // 引用 CommonRes 结构作为外层包装
          { $ref: getSchemaPath(CommonRes) },
          // 定义 data 字段的具体类型
          {
            properties: {
              data: {
                // 根据是否为分页响应设置不同的 data 结构
                ...(isCommonPageRes
                  ? {
                      // 分页响应：引用 CommonPageRes 并定义 records 字段的类型
                      allOf: [
                        { $ref: getSchemaPath(CommonPageRes) },
                        {
                          properties: {
                            records: {
                              type: 'array',
                              items: {
                                // 这里需要手动指定实际的记录类型
                                // 注意：由于 TypeScript 泛型在运行时丢失，我们无法自动获取 T 的类型
                                // 需要在使用时确保泛型参数已正确注册
                                type: 'object',
                              },
                            },
                          },
                        },
                      ],
                    }
                  : {
                      // 普通响应：直接引用传入的模型
                      $ref: getSchemaPath(model),
                    }),
              },
            },
          },
        ],
      },
    }),
  );

  return applyDecorators(...decorators);
};
