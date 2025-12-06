# 项目私有库文档

## 1. 项目概述

本项目是一个基于 Monorepo 架构的电商系统，包含两个主要应用：

- **后台管理系统 (admin-web)**：基于 React + Ant Design Pro 的管理后台，用于商品管理、订单管理、用户管理等
- **后端 API 服务 (server-api)**：基于 NestJS + TypeScript 的 API 服务，提供数据接口

## 2. 技术栈说明

| 应用           | 技术栈                                                     |
| -------------- | ---------------------------------------------------------- |
| **admin-web**  | TypeScript, React, Ant Design Pro, Umi, Less, Tailwind CSS |
| **server-api** | TypeScript, NestJS, TypeORM, MySQL, Redis                  |

## 3. 文档结构

### 应用层文档

- [后台管理系统 (admin-web)](admin/)：后台管理系统的详细文档
- [后端 API 服务 (server-api)](server/)：后端 API 服务的详细文档

## 4. 快速开始

### 4.1 环境要求

- Node.js >= 16.x
- pnpm >= 7.x
- Docker (可选，用于数据库部署)

### 4.2 安装依赖

```bash
pnpm install
```

### 4.3 启动应用

#### 启动单个应用

```bash
# 启动后台管理系统
pnpm dev:admin

# 启动后端 API 服务
pnpm dev:server
```

### 4.4 构建应用

```bash
pnpm build
```

## 5. 核心功能模块

### 用户管理

- 用户注册、登录
- 用户管理

## 6. 开发流程

1. **代码提交**：遵循 [项目约定](Project_Conventions.md) 中的提交规范
2. **分支管理**：使用 Git 分支进行开发，遵循分支管理规范
3. **代码审核**：提交 Pull Request 进行代码审核
4. **构建部署**：通过 CI/CD 流程进行构建和部署

## 7. 贡献指南

1. 克隆项目仓库
2. 创建功能分支
3. 编写代码
4. 提交代码，遵循提交规范
5. 创建 Pull Request

## 8. 常见问题

### 8.1 依赖安装失败

请确保使用 pnpm 安装依赖，且 Node.js 版本符合要求。

### 8.2 应用启动失败

检查环境变量配置是否正确，端口是否被占用。

### 8.3 数据库连接失败

确保 Docker 容器已启动，数据库配置正确。

