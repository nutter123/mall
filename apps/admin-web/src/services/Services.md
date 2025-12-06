# 后台管理系统服务层文档

## 1. 服务层概述

admin-web应用的服务层位于`src/services/`目录下，用于封装与后端API的交互，提供统一的数据请求接口。服务层使用Umi提供的`request`方法进行HTTP请求，并对请求和响应进行统一处理。

## 2. 服务层结构

```
src/services/
├── ant-design-pro/    # Ant Design Pro示例服务
└── mall/           # 商城服务
```

## 3. 核心服务

## 4. 请求配置

### 4.1 全局请求配置

服务层使用Umi提供的`request`方法，全局请求配置位于`src/app.tsx`中：

```typescript
// src/app.tsx
export const request = {
  timeout: 10000,
  errorHandler: (error: any) => {
    // 错误处理逻辑
    console.error('Request error:', error);
    return Promise.reject(error);
  },
  // 其他配置
};
```

### 4.2 响应格式

所有API请求的响应格式统一为：

```typescript
interface ApiResponse<T = any> {
  code: number; // 状态码，200表示成功
  message: string; // 提示信息
  data: T; // 返回数据
}
```

## 5. 服务层开发规范

1. **服务命名**: 使用小驼峰命名法，如 `getProductList`
2. **服务文件**: 按业务模块划分服务文件，如 `product.ts`、`order.ts`
3. **类型定义**: 使用TypeScript接口定义请求参数和响应数据类型
4. **错误处理**: 统一处理API请求错误，并返回友好的错误信息
5. **文档注释**: 为每个服务方法添加详细的文档注释

## 6. 服务层维护

1. **API更新**: 当后端API发生变化时，及时更新对应的服务方法
2. **性能优化**: 对频繁调用的API添加缓存机制
3. **安全考虑**: 避免在客户端存储敏感信息，如密码、密钥等
4. **日志记录**: 对关键API请求添加日志记录，便于调试和监控
