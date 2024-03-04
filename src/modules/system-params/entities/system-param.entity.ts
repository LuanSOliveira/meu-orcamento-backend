import { TypeOrmEntity } from "src/shared/entities/shared-typeorm";
import { Column, Entity } from "typeorm";

@Entity('system-params')
export class SystemParamEntity extends TypeOrmEntity {
    @Column({name: 'salary_per_month', nullable: false})
    salaryPerMonth: number;

    @Column({name: 'working_hours_per_month', nullable: false})
    workingHoursPerMonth: number;

    @Column({name: 'profit', nullable: false})
    profit: number;
}
