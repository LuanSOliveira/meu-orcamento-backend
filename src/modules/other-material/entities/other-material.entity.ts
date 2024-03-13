import { BudgetEntity } from "src/modules/budget/entities/budget.entity";
import { TypeOrmEntity } from "src/shared/entities/shared-typeorm";
import { Column, Entity, JoinTable, ManyToMany } from "typeorm";

@Entity('other-materials')
export class OtherMaterialEntity extends TypeOrmEntity{
    @Column({name:'name', nullable: false})
    name: string;

    @Column({name:'type', nullable: false})
    type: string;

    @Column({name:'image_link', nullable: true})
    imageLink: string;

    @Column({name:'value', nullable: false})
    value: number;

    @Column({name:'weight', nullable: false})
    weight: number;

    @Column({name:'other_informations', nullable: true})
    otherInformations: string

    @ManyToMany(() => BudgetEntity, (budget) => budget.materials)
    budget: BudgetEntity[]
}
