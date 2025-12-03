import { applyDecorators, Type } from '@nestjs/common';
import { ApiOkResponse, getSchemaPath } from '@nestjs/swagger';
import { CommonRes } from '../dto/common-res.dto'; // 导入我们定义的 CommonRes DTO

/**
 * 组合式 Swagger 装饰器：用于包装统一返回结构 (CommonRes<T>)
 * @param model 接口实际返回的数据体类型 (例如 UserVO, ProductVO)
 */
export const ApiResWrapper = <TModel extends Type<any>>(model: TModel) => {
  return applyDecorators(
    // 1. 确保 CommonRes DTO 被 Swagger 知道
    ApiOkResponse({
      // 2. 使用 $ref 引用 CommonRes DTO
      schema: {
        allOf: [
          // 引用 CommonRes 结构作为外层包装
          { $ref: getSchemaPath(CommonRes) },
          // 定义 data 字段的具体类型
          {
            properties: {
              data: {
                // 将 data 字段的类型设置为传入的 model (UserVO, AllInfoVO等)
                $ref: getSchemaPath(model),
              },
            },
          },
        ],
      },
    }),
  );
};
