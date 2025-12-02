import { DataSource } from 'typeorm';
import * as dotenv from 'dotenv';
import { join } from 'path';

// 加载 .env 环境变量
dotenv.config();

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT || '3306'),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  // ⚠️ 关键点：不再自动同步
  synchronize: false,
  logging: true,
  // 扫描所有的 entity
  entities: [join(__dirname, '../modules/**/entities/*.entity.{ts,js}')],
  // 迁移文件存放路径
  migrations: [join(__dirname, '../migrations/*.{ts,js}')],
  migrationsTableName: 'migrations_history', // 数据库里记录迁移历史的表名
});
