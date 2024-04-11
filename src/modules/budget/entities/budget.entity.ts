import { LineEntity } from 'src/modules/line/entities/line.entity';
import { OtherMaterialEntity } from 'src/modules/other-material/entities/other-material.entity';
import { TypeOrmEntity } from 'src/shared/entities/shared-typeorm';
import { Column, Entity, JoinTable, ManyToMany } from 'typeorm';

@Entity('budgets')
export class BudgetEntity extends TypeOrmEntity {
  @Column({ name: 'name', nullable: false })
  name: string;

  @Column({ name: 'link_recipe', nullable: true })
  linkRecipe: string;

  @ManyToMany(() => LineEntity, (line) => line.budget)
  @JoinTable()
  lines: LineEntity[];

  @ManyToMany(() => OtherMaterialEntity, (material) => material.budget)
  @JoinTable()
  materials: OtherMaterialEntity[];

  @Column({ name: 'extra_time', nullable: false })
  extraTime: string;

  @Column({ name: 'freight', nullable: true })
  freight: string;
}
