import { MigrationInterface, QueryRunner } from "typeorm";

export class  $npmConfigName1764667672778 implements MigrationInterface {
    name = ' $npmConfigName1764667672778'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`admin_users\` (\`id\` varchar(36) NOT NULL, \`username\` varchar(255) NOT NULL COMMENT '管理员用户名', \`password\` varchar(255) NOT NULL COMMENT '加密后的密码', \`nickname\` varchar(255) NULL COMMENT '昵称', \`avatar\` varchar(255) NULL COMMENT '头像', \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), UNIQUE INDEX \`IDX_2873882c38e8c07d98cb64f962\` (\`username\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`users\` (\`id\` varchar(36) NOT NULL, \`openid\` varchar(255) NOT NULL, \`nickname\` varchar(255) NULL, \`avatar\` varchar(255) NULL, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), UNIQUE INDEX \`IDX_9c98f005249412c8333a3b2c59\` (\`openid\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`products\` (\`id\` varchar(36) NOT NULL, \`title\` varchar(255) NOT NULL COMMENT '商品名称', \`description\` text NULL COMMENT '商品描述', \`mainImage\` varchar(255) NOT NULL COMMENT '主图URL', \`images\` text NULL COMMENT '轮播图URLs', \`status\` int NOT NULL COMMENT '上架状态' DEFAULT '0', \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`skus\` (\`id\` varchar(36) NOT NULL, \`price\` decimal(10,2) NOT NULL COMMENT '价格', \`stock\` int NOT NULL COMMENT '库存', \`attributes\` json NOT NULL COMMENT 'SKU规格属性', \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`productId\` varchar(36) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`cart_items\` (\`id\` varchar(36) NOT NULL, \`userId\` varchar(255) NOT NULL, \`skuId\` varchar(255) NOT NULL, \`count\` int NOT NULL DEFAULT '1', \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`skus\` ADD CONSTRAINT \`FK_7beba067c3aa6601fa17a0bda80\` FOREIGN KEY (\`productId\`) REFERENCES \`products\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`cart_items\` ADD CONSTRAINT \`FK_84e765378a5f03ad9900df3a9ba\` FOREIGN KEY (\`userId\`) REFERENCES \`users\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`cart_items\` ADD CONSTRAINT \`FK_59c547323fa4f015c6ca29ee9f9\` FOREIGN KEY (\`skuId\`) REFERENCES \`skus\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`cart_items\` DROP FOREIGN KEY \`FK_59c547323fa4f015c6ca29ee9f9\``);
        await queryRunner.query(`ALTER TABLE \`cart_items\` DROP FOREIGN KEY \`FK_84e765378a5f03ad9900df3a9ba\``);
        await queryRunner.query(`ALTER TABLE \`skus\` DROP FOREIGN KEY \`FK_7beba067c3aa6601fa17a0bda80\``);
        await queryRunner.query(`DROP TABLE \`cart_items\``);
        await queryRunner.query(`DROP TABLE \`skus\``);
        await queryRunner.query(`DROP TABLE \`products\``);
        await queryRunner.query(`DROP INDEX \`IDX_9c98f005249412c8333a3b2c59\` ON \`users\``);
        await queryRunner.query(`DROP TABLE \`users\``);
        await queryRunner.query(`DROP INDEX \`IDX_2873882c38e8c07d98cb64f962\` ON \`admin_users\``);
        await queryRunner.query(`DROP TABLE \`admin_users\``);
    }

}
