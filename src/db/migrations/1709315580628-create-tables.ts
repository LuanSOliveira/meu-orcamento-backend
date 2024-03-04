import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTables1709315580628 implements MigrationInterface {
    name = 'CreateTables1709315580628'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "line-types" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "deleted_at" TIMESTAMP, "created_at" TIMESTAMP DEFAULT now(), "updated_at" TIMESTAMP DEFAULT now(), "name" character varying(100) NOT NULL, CONSTRAINT "PK_bc93788ad8e122e9aec5ff4f9b0" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "line-marks" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "deleted_at" TIMESTAMP, "created_at" TIMESTAMP DEFAULT now(), "updated_at" TIMESTAMP DEFAULT now(), "name" character varying(100) NOT NULL, CONSTRAINT "PK_b47036c9dd87cb715e43b90b297" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "line-marks"`);
        await queryRunner.query(`DROP TABLE "line-types"`);
    }

}
