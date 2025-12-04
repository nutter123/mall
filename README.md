# 聚合 monorepo

## 项目结构

```tree
mall-monorepo/
├── package.json              // 根配置，定义 script 脚本一键启动所有端
├── pnpm-workspace.yaml       // pnpm 工作区配置
├── tsconfig.base.json        // 全局 TS 配置（统一路径别名等）
├── turbo.json                // (可选) Turborepo 缓存配置，加速构建
│
├── apps/                     // 【应用层】：具体的项目代码
│   │
│   ├── admin-web/            // 2. 后台管理 (React + AntD Pro)
│   │   ├── src/
│   │   │   ├── pages/        // 页面 (商品管理/订单管理)
│   │   │   ├── services/     // API 接口层
│   │   │   └── components/
│   │   ├── package.json
│   │   └── tsconfig.json
│   │
│   └── server-api/           // 3. 后端服务 (NestJS)
│       ├── src/
│       │   ├── common/       // 通用模块 (过滤器/拦截器/工具类)
│       │   ├── config/       // 数据库配置
│       │   ├── modules/      // 【核心业务模块】
│       │   │   ├── product/  // 商品模块 (Controller, Service, Entity)
│       │   │   ├── order/    // 订单模块
│       │   │   ├── user/     // 用户模块
│       │   │   └── auth/     // 登录鉴权模块
│       │   └── main.ts       // 入口文件
│       ├── package.json
│       └── tsconfig.json
│
└── packages/                 // 【共享层】：存放公共代码
    └── shared-types/         // 重点！前后端共用的 TS 类型
        ├── index.ts
        ├── package.json
        └── src/
            ├── dto/          // 接口入参定义 (如 CreateProductDto)
            └── vo/           // 接口返回定义 (如 ProductVo)
```

## 清单

1. Monorepo + TS path alias
2. docker mysql/redis
3. shared types
4. 统一接口返回和错误处理
