import { MigrationInterface, QueryRunner } from "typeorm";

export class  $npmConfigName1764899330600 implements MigrationInterface {
    name = ' $npmConfigName1764899330600'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`create_time\``);
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`update_time\``);
        await queryRunner.query(`ALTER TABLE \`admin_user\` ADD \`phone\` varchar(255) NULL COMMENT '手机号'`);
        await queryRunner.query(`ALTER TABLE \`admin_user\` ADD UNIQUE INDEX \`IDX_f5989ac64f666bd51826693cb9\` (\`phone\`)`);
        await queryRunner.query(`ALTER TABLE \`admin_user\` ADD \`role\` varchar(255) NULL COMMENT '角色'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`admin_user\` DROP COLUMN \`role\``);
        await queryRunner.query(`ALTER TABLE \`admin_user\` DROP INDEX \`IDX_f5989ac64f666bd51826693cb9\``);
        await queryRunner.query(`ALTER TABLE \`admin_user\` DROP COLUMN \`phone\``);
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`update_time\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6)`);
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`create_time\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)`);
    }

}
