import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTables1710187925131 implements MigrationInterface {
    name = 'CreateTables1710187925131'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "other-materials" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "deleted_at" TIMESTAMP, "created_at" TIMESTAMP DEFAULT now(), "updated_at" TIMESTAMP DEFAULT now(), "name" character varying NOT NULL, "type" character varying NOT NULL, "image_link" character varying, "value" integer NOT NULL, "weight" integer NOT NULL, "other_informations" character varying, CONSTRAINT "PK_2147e33d09156b14a7fa36392ad" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "budgets" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "deleted_at" TIMESTAMP, "created_at" TIMESTAMP DEFAULT now(), "updated_at" TIMESTAMP DEFAULT now(), "name" character varying NOT NULL, "link_recipe" character varying, "extra_time" integer NOT NULL, "freight" integer, CONSTRAINT "PK_9c8a51748f82387644b773da482" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "line-marks" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "deleted_at" TIMESTAMP, "created_at" TIMESTAMP DEFAULT now(), "updated_at" TIMESTAMP DEFAULT now(), "name" character varying(100) NOT NULL, CONSTRAINT "PK_b47036c9dd87cb715e43b90b297" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "line-types" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "deleted_at" TIMESTAMP, "created_at" TIMESTAMP DEFAULT now(), "updated_at" TIMESTAMP DEFAULT now(), "name" character varying(100) NOT NULL, CONSTRAINT "PK_bc93788ad8e122e9aec5ff4f9b0" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "lines" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "deleted_at" TIMESTAMP, "created_at" TIMESTAMP DEFAULT now(), "updated_at" TIMESTAMP DEFAULT now(), "image_link" character varying NOT NULL, "value" integer NOT NULL, "weight_line" integer NOT NULL, "points_per_weight_qt" integer NOT NULL, "weight_per_points" integer NOT NULL, "hours_points-qt" integer NOT NULL, "minutes_per_points" integer NOT NULL, "other_informations" character varying(1000) NOT NULL, "lineMarkId" uuid, "lineTypeId" uuid, CONSTRAINT "PK_155ad34738bc0e1aab0ca198dea" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "system-params" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "deleted_at" TIMESTAMP, "created_at" TIMESTAMP DEFAULT now(), "updated_at" TIMESTAMP DEFAULT now(), "salary_per_month" integer NOT NULL, "working_hours_per_month" integer NOT NULL, "profit" integer NOT NULL, CONSTRAINT "PK_4e08b1f4f92c74bbb9b7bb922ac" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "budgets_lines_lines" ("budgetsId" uuid NOT NULL, "linesId" uuid NOT NULL, CONSTRAINT "PK_6947023bc03a5d68fe9dd245263" PRIMARY KEY ("budgetsId", "linesId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_e1ba6d41b2d3e92dc0585fe254" ON "budgets_lines_lines" ("budgetsId") `);
        await queryRunner.query(`CREATE INDEX "IDX_bd5e2e42c209e1b3872a6578b6" ON "budgets_lines_lines" ("linesId") `);
        await queryRunner.query(`CREATE TABLE "budgets_materials_other-materials" ("budgetsId" uuid NOT NULL, "otherMaterialsId" uuid NOT NULL, CONSTRAINT "PK_fef0c6bba8a06ea2fd83d2ff6e8" PRIMARY KEY ("budgetsId", "otherMaterialsId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_844b13676339e3df2dafc2ae54" ON "budgets_materials_other-materials" ("budgetsId") `);
        await queryRunner.query(`CREATE INDEX "IDX_92c5578595b5ef1f607003bf13" ON "budgets_materials_other-materials" ("otherMaterialsId") `);
        await queryRunner.query(`ALTER TABLE "lines" ADD CONSTRAINT "FK_1ed855b98a3a51fb8c042602ed9" FOREIGN KEY ("lineMarkId") REFERENCES "line-marks"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "lines" ADD CONSTRAINT "FK_bf98301a312968869d6eedbd2d6" FOREIGN KEY ("lineTypeId") REFERENCES "line-types"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "budgets_lines_lines" ADD CONSTRAINT "FK_e1ba6d41b2d3e92dc0585fe254f" FOREIGN KEY ("budgetsId") REFERENCES "budgets"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "budgets_lines_lines" ADD CONSTRAINT "FK_bd5e2e42c209e1b3872a6578b65" FOREIGN KEY ("linesId") REFERENCES "lines"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "budgets_materials_other-materials" ADD CONSTRAINT "FK_844b13676339e3df2dafc2ae547" FOREIGN KEY ("budgetsId") REFERENCES "budgets"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "budgets_materials_other-materials" ADD CONSTRAINT "FK_92c5578595b5ef1f607003bf130" FOREIGN KEY ("otherMaterialsId") REFERENCES "other-materials"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "budgets_materials_other-materials" DROP CONSTRAINT "FK_92c5578595b5ef1f607003bf130"`);
        await queryRunner.query(`ALTER TABLE "budgets_materials_other-materials" DROP CONSTRAINT "FK_844b13676339e3df2dafc2ae547"`);
        await queryRunner.query(`ALTER TABLE "budgets_lines_lines" DROP CONSTRAINT "FK_bd5e2e42c209e1b3872a6578b65"`);
        await queryRunner.query(`ALTER TABLE "budgets_lines_lines" DROP CONSTRAINT "FK_e1ba6d41b2d3e92dc0585fe254f"`);
        await queryRunner.query(`ALTER TABLE "lines" DROP CONSTRAINT "FK_bf98301a312968869d6eedbd2d6"`);
        await queryRunner.query(`ALTER TABLE "lines" DROP CONSTRAINT "FK_1ed855b98a3a51fb8c042602ed9"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_92c5578595b5ef1f607003bf13"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_844b13676339e3df2dafc2ae54"`);
        await queryRunner.query(`DROP TABLE "budgets_materials_other-materials"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_bd5e2e42c209e1b3872a6578b6"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_e1ba6d41b2d3e92dc0585fe254"`);
        await queryRunner.query(`DROP TABLE "budgets_lines_lines"`);
        await queryRunner.query(`DROP TABLE "system-params"`);
        await queryRunner.query(`DROP TABLE "lines"`);
        await queryRunner.query(`DROP TABLE "line-types"`);
        await queryRunner.query(`DROP TABLE "line-marks"`);
        await queryRunner.query(`DROP TABLE "budgets"`);
        await queryRunner.query(`DROP TABLE "other-materials"`);
    }

}
