# 后台管理系统服务层文档

## 1. 服务层概述

admin-web应用的服务层位于`src/services/`目录下，用于封装与后端API的交互，提供统一的数据请求接口。服务层使用Umi提供的`request`方法进行HTTP请求，并对请求和响应进行统一处理。

## 2. 服务层结构

```
src/services/
├── ant-design-pro/    # Ant Design Pro示例服务
├── demo/              # 示例服务
├── index.ts           # 服务导出文件
├── product.ts         # 商品相关服务
└── swagger/           # Swagger相关服务
```

## 3. 核心服务

### 3.1 商品服务 (product.ts)

**路径**: `src/services/product.ts`

**功能**: 提供商品相关的API接口，包括商品列表、商品详情、商品创建、商品更新、商品删除等功能。

**API列表**:

| 方法名               | HTTP方法 | URL                     | 功能描述     |
| -------------------- | -------- | ----------------------- | ------------ |
| getProductList       | GET      | /api/product/list       | 获取商品列表 |
| getProductDetail     | GET      | /api/product/:id        | 获取商品详情 |
| createProduct        | POST     | /api/product            | 创建商品     |
| updateProduct        | PUT      | /api/product/:id        | 更新商品     |
| deleteProduct        | DELETE   | /api/product/:id        | 删除商品     |
| getProductCategories | GET      | /api/product/categories | 获取商品分类 |

**使用示例**:

```typescript
import { getProductList, getProductDetail } from '@/services/product';

// 获取商品列表
const productList = await getProductList({
  page: 1,
  pageSize: 10,
  categoryId: 1,
  keyword: '手机',
});

// 获取商品详情
const productDetail = await getProductDetail(1);
```

### 3.2 订单服务 (order.ts)

**路径**: `src/services/order.ts`

**功能**: 提供订单相关的API接口，包括订单列表、订单详情、订单状态更新等功能。

**API列表**:

| 方法名            | HTTP方法 | URL                   | 功能描述     |
| ----------------- | -------- | --------------------- | ------------ |
| getOrderList      | GET      | /api/order/list       | 获取订单列表 |
| getOrderDetail    | GET      | /api/order/:id        | 获取订单详情 |
| updateOrderStatus | PUT      | /api/order/:id/status | 更新订单状态 |
| exportOrders      | GET      | /api/order/export     | 导出订单     |

**使用示例**:

```typescript
import { getOrderList, updateOrderStatus } from '@/services/order';

// 获取订单列表
const orderList = await getOrderList({
  page: 1,
  pageSize: 10,
  status: 'pending',
  startTime: '2023-01-01',
  endTime: '2023-12-31',
});

// 更新订单状态
await updateOrderStatus(1, 'shipped');
```

### 3.3 用户服务 (user.ts)

**路径**: `src/services/user.ts`

**功能**: 提供用户相关的API接口，包括用户列表、用户详情、用户信息更新等功能。

**API列表**:

| 方法名           | HTTP方法 | URL                  | 功能描述     |
| ---------------- | -------- | -------------------- | ------------ |
| getUserList      | GET      | /api/user/list       | 获取用户列表 |
| getUserDetail    | GET      | /api/user/:id        | 获取用户详情 |
| updateUserInfo   | PUT      | /api/user/:id        | 更新用户信息 |
| updateUserStatus | PUT      | /api/user/:id/status | 更新用户状态 |

**使用示例**:

```typescript
import { getUserList, updateUserStatus } from '@/services/user';

// 获取用户列表
const userList = await getUserList({
  page: 1,
  pageSize: 10,
  username: 'test',
  status: 'active',
});

// 更新用户状态
await updateUserStatus(1, 'inactive');
```

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
