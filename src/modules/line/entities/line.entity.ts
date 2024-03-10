import { BudgetEntity } from "src/modules/budget/entities/budget.entity";
import { LineMarkEntity } from "../../line-mark/entities/line-mark.entity";
import { LineTypeEntity } from "src/modules/line-type/entities/line-type.entity";
import { TypeOrmEntity } from "src/shared/entities/shared-typeorm";
import { Column, Entity, JoinTable, ManyToMany, ManyToOne } from "typeorm";

@Entity('lines')
export class LineEntity extends TypeOrmEntity{
    @ManyToOne(() => LineMarkEntity, (lineMark) => lineMark.line)
    lineMark: LineMarkEntity;

    @ManyToOne(() => LineTypeEntity, (lineType) => lineType.line)
    lineType: LineTypeEntity;

    @Column({name: 'image_link'})
    imageLink: string;

    @Column({name: 'value', nullable: false})
    value: number;

    @Column({name: 'weight_line', nullable: false})
    weightLine: number;

    @Column({name: 'points_per_weight_qt', nullable: false})
    pointsPerWeightQt: number;

    @Column({name: 'weight_per_points', nullable: false})
    weightPerPoints: number;

    @Column({name: 'hours_points-qt', nullable: false})
    hoursPointsQt: number;

    @Column({name: 'minutes_per_points', nullable: false})
    minutesPerPoints: number;

    @Column({name: 'other_informations', length: 1000})
    otherInformations: string;

    @ManyToMany(() => BudgetEntity, (budget) => budget.lines)
    @JoinTable()
    budget: BudgetEntity[]
}
