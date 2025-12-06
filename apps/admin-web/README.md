# 后台管理系统 (admin-web)

## 1. 应用概述

admin-web是基于React + Ant Design Pro构建的电商后台管理系统，提供商品管理、订单管理、用户管理等核心功能，支持权限控制、数据统计等高级特性。

## 2. 技术栈

| 技术           | 版本 | 用途          |
| -------------- | ---- | ------------- |
| React          | 18.x | UI框架        |
| TypeScript     | 5.x  | 编程语言      |
| Ant Design Pro | 5.x  | 管理系统模板  |
| Umi            | 4.x  | 前端构建工具  |
| Less           | 4.x  | CSS预处理器   |
| Tailwind CSS   | 3.x  | 原子化CSS框架 |
| Axios          | 1.x  | HTTP客户端    |

## 3. 目录结构

```
admin-web/
├── .gitignore             # Git忽略文件配置
├── README.md              # 应用README
├── config/                # 配置文件
│   ├── config.ts          # 主配置文件
│   ├── defaultSettings.ts # 默认设置
│   ├── proxy.ts           # 代理配置
│   └── routes.ts          # 路由配置
├── package.json           # 项目配置
├── public/                # 静态资源目录
├── src/                   # 源代码目录
│   ├── access.ts          # 权限配置
│   ├── app.tsx            # 应用入口
│   ├── assets/            # 资源文件
│   ├── components/        # 自定义组件
│   ├── constants/         # 常量定义
│   ├── global.less        # 全局样式
│   ├── global.style.ts    # 全局样式文件
│   ├── loading.tsx        # 加载组件
│   ├── locales/           # 国际化配置
│   ├── models/            # 数据模型
│   ├── pages/             # 页面目录
│   ├── services/          # API服务层
│   ├── types/             # 类型定义
│   └── utils/             # 工具函数
├── tailwind.config.js     # Tailwind CSS配置
├── tailwind.css           # Tailwind CSS入口
├── tsconfig.json          # TypeScript配置
└── typings.d.ts           # 类型声明文件
```

### 3.1 核心目录说明

- **src/pages/**：页面目录，包含所有业务页面
- **src/components/**：自定义组件，用于复用UI元素
- **src/services/**：API服务层，封装与后端的交互
- **src/utils/**：工具函数，提供通用功能
- **src/models/**：数据模型，管理应用状态
- **config/**：应用配置，包括路由、代理、主题等

## 4. 核心功能

- 登录认证
- 用户管理

## 5. 快速开始

### 5.1 安装依赖

```bash
pnpm install
```

### 5.2 启动开发服务器

```bash
pnpm dev:admin
```

应用将在 http://localhost:8000 启动。

### 5.3 构建生产版本

```bash
pnpm build:admin
```

构建产物将输出到 `dist/` 目录。

### 5.4 预览生产版本

```bash
pnpm preview:admin
```

## 6. 配置说明

### 6.1 路由配置

路由配置文件位于 `config/routes.ts`，使用Umi的路由配置语法：

```typescript
export default [
  {
    path: '/',
    component: '@/layouts/index',
    routes: [
      {
        path: '/',
        component: '@/pages/Welcome',
      },
      {
        path: '/product',
        component: '@/pages/Product',
        name: '商品管理',
      },
      // 其他路由
    ],
  },
];
```

### 6.2 代理配置

代理配置文件位于 `config/proxy.ts`，用于开发环境下的API请求代理：

```typescript
export default {
  dev: {
    '/api/': {
      target: 'http://localhost:3000',
      changeOrigin: true,
    },
  },
};
```

### 6.3 主题配置

主题配置文件位于 `config/defaultSettings.ts`，用于配置Ant Design Pro的主题：

```typescript
export default {
  navTheme: 'light',
  primaryColor: '#1890ff',
  layout: 'mix',
  contentWidth: 'Fluid',
  fixedHeader: false,
  fixSiderbar: true,
  colorWeak: false,
  title: '电商后台管理系统',
  pwa: false,
  iconfontUrl: '',
};
```

## 7. 开发指南

### 7.1 页面开发

页面开发遵循Ant Design Pro的页面结构，通常包含的增删改查参考用户管理(user/manage)：

### 7.2 API调用

使用封装的API服务进行后端交互：

```typescript
import { request } from 'umi';

export async function getProductList(params: { page: number; pageSize: number }) {
  return request<API.ProductList>('/api/product/list', {
    method: 'GET',
    params,
  });
}
```

### 7.3 组件开发

自定义组件开发遵循React组件规范：

```typescript
import React from 'react';
import { Button } from 'antd';

interface CustomButtonProps {
	type?: 'primary' | 'default';
	onClick?: () => void;
}

const CustomButton: React.FC<CustomButtonProps> = ({
	type = 'default',
	onClick,
	children,
}) => {
	return (
		<Button type={type} onClick={onClick}>
			{children}
		</Button>
	);
};

export default CustomButton;
```

## 8. 权限管理

暂不支持

## 9. 国际化

暂不支持

## 10. 构建与部署

### 10.1 构建生产版本

```bash
pnpm build:admin
```

### 10.2 部署

构建产物可以部署到任何静态文件服务器，如Nginx、Apache等。

#### Nginx配置示例

```nginx
server {
	listen 80;
	server_name admin.example.com;
	root /path/to/admin-web/dist;
	index index.html;

	location / {
		try_files $uri $uri/ /index.html;
	}

	location /api/ {
		proxy_pass http://localhost:3000;
		proxy_set_header Host $host;
		proxy_set_header X-Real-IP $remote_addr;
	}
}
```

## 11. 常见问题

## 12. 开发规范

- 遵循项目统一的[代码规范](../Project_Conventions.md)
- 组件命名使用大驼峰命名法
- 页面命名使用小驼峰命名法
- 函数命名使用小驼峰命名法
- 使用TypeScript严格模式，避免使用any类型
- 为公共组件添加详细的文档注释

## 13. 更新日志
