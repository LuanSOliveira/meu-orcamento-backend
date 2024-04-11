import { TypeOrmEntity } from 'src/shared/entities/shared-typeorm';
import { Column, Entity } from 'typeorm';

@Entity('system-params')
export class SystemParamEntity extends TypeOrmEntity {
  @Column({ name: 'salary_per_month', nullable: false })
  salaryPerMonth: string;

  @Column({ name: 'working_hours_per_month', nullable: false })
  workingHoursPerMonth: string;

  @Column({ name: 'profit', nullable: false })
  profit: string;
}
