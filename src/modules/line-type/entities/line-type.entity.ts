import { LineEntity } from "src/modules/line/entities/line.entity";
import { TypeOrmEntity } from "src/shared/entities/shared-typeorm";
import { Column, Entity, OneToMany } from "typeorm";

@Entity('line-types')
export class LineTypeEntity extends TypeOrmEntity {
    @Column({name: 'name', length: 100, nullable: false})
    name: string

    @OneToMany(() => LineEntity, (line) => line.lineType)
    line: LineEntity[]
}
