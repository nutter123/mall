# 项目目录结构

## 1. 根目录结构

```
mall-monorepo/
├── .editorconfig            # 编辑器配置
├── .gitignore              # Git 忽略文件配置
├── .idea/                  # IntelliJ IDEA 项目配置
├── .npmrc                  # npm 配置
├── .prettierrc.js          # Prettier 配置
├── .vscode/                # VS Code 配置
├── README.md               # 项目根目录 README
├── apps/                   # 应用层：具体的项目代码
├── docker-compose.yml      # Docker Compose 配置
├── markdown/               # 项目文档
├── package.json            # 根配置，定义脚本一键启动所有端
├── pnpm-lock.yaml          # pnpm 依赖锁定文件
├── pnpm-workspace.yaml     # pnpm 工作区配置
├── tsconfig.base.json      # 全局 TypeScript 配置（统一路径别名等）
└── turbo.json              # Turborepo 缓存配置，加速构建
```

## 2. 应用层结构 (apps/)

### 2.1 微信小程序应用 (apps/client-mp/)

```
client-mp/
├── miniprogram/            # 小程序源码目录
│   ├── api/               # API 接口封装
│   │   ├── auth.ts        # 认证相关接口
│   │   └── cart.ts        # 购物车相关接口
│   ├── app.json           # 小程序全局配置
│   ├── app.scss           # 小程序全局样式
│   ├── app.ts             # 小程序入口文件
│   ├── assets/            # 静态资源
│   │   └── tabbar/        # 底部导航栏图标
│   ├── components/        # 自定义组件
│   │   ├── demo/          # 示例组件
│   │   ├── navigation-bar/ # 导航栏组件
│   │   └── search/        # 搜索组件
│   ├── pages/             # 页面目录
│   │   ├── cart/          # 购物车页面
│   │   ├── category/      # 分类页面
│   │   ├── demo/          # 示例页面
│   │   ├── goods/         # 商品详情页面
│   │   ├── home/          # 首页
│   │   └── user/          # 用户中心页面
│   ├── sitemap.json       # 小程序 sitemap 配置
│   ├── styles/            # 样式文件
│   │   └── _utilities.scss # 工具样式
│   ├── types/             # 类型定义
│   │   └── index.ts       # 全局类型定义
│   └── utils/             # 工具函数
│       ├── request.ts     # 网络请求封装
│       ├── sku-helper.ts  # SKU 处理工具
│       └── util.ts        # 通用工具函数
├── package.json           # 小程序项目配置
├── project.config.json    # 微信开发者工具项目配置
├── project.private.config.json # 微信开发者工具私有配置
├── tsconfig.json          # TypeScript 配置
└── typings/               # 类型声明文件
    └── index.d.ts         # 全局类型声明
```

### 2.2 后台管理应用 (apps/admin-web/)

```
admin-web/
├── .gitignore             # Git 忽略文件配置
├── README.md              # 后台管理应用 README
├── config/                # 配置文件
│   ├── config.ts          # 主配置文件
│   ├── defaultSettings.ts # 默认设置
│   ├── proxy.ts           # 代理配置
│   └── routes.ts          # 路由配置
├── package.json           # 后台管理应用配置
├── public/                # 静态资源目录
│   ├── CNAME              # CNAME 配置
│   ├── favicon.ico        # 网站图标
│   ├── icons/             # 图标资源
│   ├── logo.svg           # 网站 logo
│   ├── pro_icon.svg       # Pro 图标
│   └── scripts/           # 脚本文件
│       └── loading.js     # 加载脚本
├── src/                   # 源代码目录
│   ├── access.ts          # 权限配置
│   ├── app.tsx            # 应用入口
│   ├── assets/            # 资源文件
│   ├── components/        # 自定义组件
│   │   ├── Footer/        # 页脚组件
│   │   ├── Guide/         # 引导组件
│   │   ├── HeaderDropdown/ # 头部下拉菜单组件
│   │   ├── RightContent/  # 右侧内容组件
│   │   └── index.ts       # 组件导出
│   ├── constants/         # 常量定义
│   │   └── index.ts       # 全局常量
│   ├── global.less        # 全局样式
│   ├── global.style.ts    # 全局样式文件
│   ├── loading.tsx        # 加载组件
│   ├── locales/           # 国际化配置
│   │   ├── zh-CN/         # 中文配置
│   │   └── zh-CN.ts       # 中文主配置
│   ├── models/            # 数据模型
│   │   └── global.ts      # 全局数据模型
│   ├── pages/             # 页面目录
│   │   ├── 404.tsx        # 404 页面
│   │   ├── Admin.tsx      # 管理页面
│   │   ├── Product/       # 商品管理页面
│   │   ├── Welcome.tsx    # 欢迎页面
│   │   ├── account/       # 账户相关页面
│   │   ├── dashboard/     # 仪表盘
│   │   ├── exception/     # 异常页面
│   │   ├── form/          # 表单示例
│   │   ├── list/          # 列表示例
│   │   ├── profile/       # 个人资料
│   │   ├── result/        # 结果页面
│   │   ├── table-list/    # 表格列表
│   │   └── user/          # 用户管理
│   ├── services/          # API 服务层
│   │   ├── ant-design-pro/ # Ant Design Pro 示例服务
│   │   ├── demo/          # 示例服务
│   │   ├── index.ts       # 服务导出
│   │   ├── product.ts     # 商品服务
│   │   └── swagger/       # Swagger 服务
│   ├── types/             # 类型定义
│   │   └── index.ts       # 全局类型
│   └── utils/             # 工具函数
│       └── format.ts      # 格式化工具
├── tailwind.config.js     # Tailwind CSS 配置
├── tailwind.css           # Tailwind CSS 入口
├── tsconfig.json          # TypeScript 配置
├── types/                 # 类型声明
│   ├── cache/             # 缓存类型
│   └── index.d.ts         # 全局类型声明
└── typings.d.ts           # 类型声明文件
```

### 2.3 后端 API 服务 (apps/server-api/)

```
server-api/
├── .env                   # 环境变量配置
├── README.md              # 后端服务 README
├── nest-cli.json          # NestJS CLI 配置
├── package.json           # 后端服务配置
├── src/                   # 源代码目录
│   ├── app.controller.spec.ts # App 控制器测试
│   ├── app.controller.ts  # App 控制器
│   ├── app.module.ts      # App 模块
│   ├── app.service.ts     # App 服务
│   ├── common/            # 通用模块
│   │   ├── decorators/    # 自定义装饰器
│   │   ├── entities/      # 通用实体
│   │   ├── filters/       # 过滤器
│   │   ├── guards/        # 守卫
│   │   ├── interceptors/  # 拦截器
│   │   └── interfaces/    # 通用接口
│   ├── config/            # 配置文件
│   │   └── typeorm.datasource.ts # TypeORM 数据源配置
│   ├── main.ts            # 应用入口文件
│   ├── migrations/        # 数据库迁移文件
│   └── modules/           # 核心业务模块
│       ├── auth/          # 认证模块
│       ├── cart/          # 购物车模块
│       ├── product/       # 商品模块
│       ├── upload/        # 文件上传模块
│       └── user/          # 用户模块
├── test/                  # 测试文件
│   ├── app.e2e-spec.ts    # 端到端测试
│   └── jest-e2e.json      # Jest 端到端测试配置
├── tsconfig.build.json    # TypeScript 构建配置
├── tsconfig.build.tsbuildinfo # TypeScript 构建信息
└── tsconfig.json          # TypeScript 配置
```

## 3. 文档目录结构 (markdown/)

```
markdown/
├── Index.md               # 文档索引
├── Project_Conventions.md # 项目约定
├── Project_Structure.md   # 项目结构文档
├── admin/                 # 后台管理应用文档
├── client/                # 客户端应用文档
│   └── WeChat_MP_Context.md # 微信小程序上下文文档
└── server/                # 后端服务文档
```

## 4. 主要配置文件说明

### 4.1 package.json (根目录)

- 定义项目脚本，支持一键启动所有应用
- 管理项目依赖

### 4.2 pnpm-workspace.yaml

- 定义 pnpm 工作区，管理多个子项目

### 4.3 tsconfig.base.json

- 全局 TypeScript 配置
- 定义路径别名，如 `@/*` 对应 `src/`

### 4.4 turbo.json

- Turborepo 配置
- 加速构建过程，缓存构建结果

## 5. 核心业务模块

### 5.1 用户模块 (user)

- 用户注册、登录、信息管理
- 权限控制

### 5.2 商品模块 (product)

- 商品列表、详情
- 商品分类、搜索

### 5.3 购物车模块 (cart)

- 购物车添加、删除、修改
- 购物车结算

### 5.4 认证模块 (auth)

- JWT 认证
- 权限验证

### 5.5 订单模块 (order)

- 订单创建、查询
- 订单状态管理

## 6. 数据流向

1. 前端应用 (admin-web 或 client-mp) 发起 API 请求
2. 后端服务 (server-api) 接收请求，进行业务处理
3. 后端服务与数据库交互，获取或修改数据
4. 后端服务返回响应给前端应用
5. 前端应用处理响应，更新界面

## 7. 技术栈分布

| 应用       | 框架           | 语言       | UI 组件库           | 样式                |
| ---------- | -------------- | ---------- | ------------------- | ------------------- |
| admin-web  | React          | TypeScript | Ant Design Pro      | Less / Tailwind CSS |
| client-mp  | 原生微信小程序 | TypeScript | TDesign Miniprogram | Sass                |
| server-api | NestJS         | TypeScript | -                   | -                   |
