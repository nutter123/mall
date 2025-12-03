# 后端API服务文档

## 1. 服务概述

server-api是基于NestJS框架开发的电商后端API服务，提供商品管理、订单管理、用户管理、购物车管理等核心功能的RESTful API接口。服务采用TypeScript开发，使用MySQL数据库存储数据，Redis缓存常用数据，具有良好的性能和可扩展性。

## 2. 技术栈

| 技术       | 版本    | 用途         |
| ---------- | ------- | ------------ |
| NestJS     | ^8.0.0  | 应用框架     |
| TypeScript | ^4.5.0  | 开发语言     |
| MySQL      | ^8.0.0  | 关系型数据库 |
| Redis      | ^6.0.0  | 缓存数据库   |
| TypeORM    | ^0.3.0  | ORM框架      |
| JWT        | ^8.0.0  | 认证授权     |
| Swagger    | ^5.0.0  | API文档      |
| Docker     | ^20.0.0 | 容器化部署   |

## 3. 目录结构

```
server-api/
├── src/
│   ├── app.controller.ts         # 应用控制器
│   ├── app.module.ts            # 应用模块
│   ├── app.service.ts           # 应用服务
│   ├── main.ts                  # 应用入口文件
│   ├── common/                  # 公共模块
│   │   ├── decorators/          # 自定义装饰器
│   │   ├── filters/             # 异常过滤器
│   │   ├── guards/              # 守卫
│   │   ├── interceptors/        # 拦截器
│   │   └── utils/               # 公共工具
│   ├── config/                  # 配置文件
│   ├── migrations/              # 数据库迁移文件
│   └── modules/                 # 业务模块
│       ├── auth/                # 认证模块
│       ├── cart/                # 购物车模块
│       ├── product/             # 商品模块
│       ├── upload/              # 文件上传模块
│       └── user/                # 用户模块
├── .env                         # 环境变量配置
├── nest-cli.json                # NestJS配置
├── package.json                 # 项目依赖配置
├── tsconfig.json                # TypeScript配置
└── README.md                    # 项目说明文档
```

## 4. 核心功能模块

### 4.1 认证模块 (auth)

**功能**: 提供用户认证和授权功能，包括用户登录、注册、Token刷新等。

**API列表**:

| 方法 | URL                     | 功能描述     |
| ---- | ----------------------- | ------------ |
| POST | /api/auth/register      | 用户注册     |
| POST | /api/auth/login         | 用户登录     |
| POST | /api/auth/refresh-token | 刷新Token    |
| GET  | /api/auth/profile       | 获取用户信息 |

### 4.2 用户模块 (user)

**功能**: 提供用户管理功能，包括用户列表、用户详情、用户更新、用户删除等。

**API列表**:

| 方法   | URL                   | 功能描述     |
| ------ | --------------------- | ------------ |
| GET    | /api/users            | 获取用户列表 |
| GET    | /api/users/:id        | 获取用户详情 |
| PUT    | /api/users/:id        | 更新用户信息 |
| DELETE | /api/users/:id        | 删除用户     |
| GET    | /api/users/:id/orders | 获取用户订单 |

### 4.3 商品模块 (product)

**功能**: 提供商品管理功能，包括商品列表、商品详情、商品创建、商品更新、商品删除等。

**API列表**:

| 方法   | URL                      | 功能描述     |
| ------ | ------------------------ | ------------ |
| GET    | /api/products            | 获取商品列表 |
| GET    | /api/products/:id        | 获取商品详情 |
| POST   | /api/products            | 创建商品     |
| PUT    | /api/products/:id        | 更新商品     |
| DELETE | /api/products/:id        | 删除商品     |
| GET    | /api/products/categories | 获取商品分类 |

### 4.4 购物车模块 (cart)

**功能**: 提供购物车管理功能，包括添加商品到购物车、修改购物车商品数量、删除购物车商品、清空购物车等。

**API列表**:

| 方法   | URL           | 功能描述           |
| ------ | ------------- | ------------------ |
| GET    | /api/cart     | 获取购物车列表     |
| POST   | /api/cart     | 添加商品到购物车   |
| PUT    | /api/cart/:id | 修改购物车商品数量 |
| DELETE | /api/cart/:id | 删除购物车商品     |
| DELETE | /api/cart     | 清空购物车         |

### 4.5 文件上传模块 (upload)

**功能**: 提供文件上传功能，支持图片、视频等文件的上传和管理。

**API列表**:

| 方法   | URL             | 功能描述     |
| ------ | --------------- | ------------ |
| POST   | /api/upload     | 上传文件     |
| GET    | /api/upload/:id | 获取文件信息 |
| DELETE | /api/upload/:id | 删除文件     |

## 5. 数据库设计

### 5.1 主要数据模型

- **用户表 (users)**: 用户信息
- **角色表 (roles)**: 用户角色
- **权限表 (permissions)**: 用户权限
- **商品表 (products)**: 商品信息
- **商品分类表 (product_categories)**: 商品分类
- **购物车表 (cart_items)**: 购物车商品
- **订单表 (orders)**: 订单信息
- **订单商品表 (order_items)**: 订单商品
- **收货地址表 (addresses)**: 用户收货地址

### 5.2 数据关系

- 用户与角色：多对多关系
- 角色与权限：多对多关系
- 用户与购物车：一对多关系
- 用户与订单：一对多关系
- 订单与订单商品：一对多关系
- 商品与商品分类：多对一关系

## 6. 快速开始

### 6.1 环境要求

- Node.js 14.0.0 或更高版本
- npm 6.0.0 或更高版本
- MySQL 8.0.0 或更高版本
- Redis 6.0.0 或更高版本
- Docker 20.0.0 或更高版本（可选）

### 6.2 安装依赖

```bash
cd apps/server-api
npm install
```

### 6.3 配置环境变量

创建.env文件，配置数据库连接信息、JWT密钥等：

```env
# 数据库配置
DB_HOST=localhost
DB_PORT=3306
DB_USERNAME=root
DB_PASSWORD=123456
DB_NAME=mall

# Redis配置
REDIS_HOST=localhost
REDIS_PORT=6379
REDIS_PASSWORD=

# JWT配置
JWT_SECRET=your-jwt-secret
JWT_EXPIRES_IN=7d

# 服务器配置
PORT=3000
```

### 6.4 数据库迁移

```bash
npm run typeorm:run-migrations
```

### 6.5 启动服务

```bash
# 开发模式
npm run start:dev

# 生产模式
npm run build
npm run start:prod
```

### 6.6 访问API文档

启动服务后，访问 http://localhost:3000/api-docs 查看Swagger API文档。

## 7. 认证与授权

### 7.1 JWT认证

服务使用JWT进行用户认证，用户登录成功后会返回access_token和refresh_token：

```json
{
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "refresh_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "expires_in": 604800
}
```

### 7.2 API授权

使用@AuthGuard()装饰器保护需要授权的API：

```typescript
@Controller('users')
export class UserController {
  @Get('profile')
  @UseGuards(AuthGuard())
  getProfile(@User() user: User) {
    return user;
  }
}
```

## 8. 异常处理

服务使用统一的异常过滤器处理API请求中的异常，返回统一的错误格式：

```json
{
  "statusCode": 400,
  "message": "请求参数错误",
  "error": "Bad Request"
}
```

## 9. 日志记录

服务使用NestJS内置的日志系统记录API请求和响应信息，方便调试和监控。

## 10. 测试

### 10.1 单元测试

```bash
npm run test
```

### 10.2 集成测试

```bash
npm run test:e2e
```

## 11. 构建与部署

### 11.1 构建

```bash
npm run build
```

### 11.2 Docker部署

```bash
docker build -t server-api .
docker run -p 3000:3000 --env-file .env server-api
```

## 12. 开发规范

1. **代码风格**: 遵循ESLint和Prettier的代码风格规范
2. **命名约定**: 使用大驼峰命名法命名类、接口、枚举等，使用小驼峰命名法命名变量、函数等
3. **模块设计**: 按业务功能划分模块，每个模块包含控制器、服务、实体、DTO等
4. **API设计**: 遵循RESTful API设计规范
5. **错误处理**: 使用统一的异常处理机制
6. **测试规范**: 为每个功能模块编写单元测试和集成测试

## 13. 常见问题

### 13.1 数据库连接失败

- 检查.env文件中的数据库配置是否正确
- 检查MySQL服务是否正常运行

### 13.2 API请求401错误

- 检查请求头中是否包含有效的Authorization头
- 检查Token是否过期

### 13.3 API请求500错误

- 检查服务器日志，查看具体的错误信息
- 检查数据库连接是否正常
- 检查代码中是否存在逻辑错误

## 14. 更新日志

### v1.0.0 (2023-01-01)

- 初始版本发布
- 实现用户认证、商品管理、购物车管理、订单管理等核心功能

## 15. 联系方式

如有问题或建议，请联系开发团队：

- 邮箱: dev@example.com
- GitHub: https://github.com/example/mall-monorepo
