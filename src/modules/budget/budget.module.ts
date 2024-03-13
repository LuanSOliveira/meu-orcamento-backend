import { Module } from '@nestjs/common';
import { BudgetService } from './budget.service';
import { BudgetController } from './budget.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BudgetEntity } from './entities/budget.entity';
import { LineEntity } from '../line/entities/line.entity';
import { OtherMaterialEntity } from '../other-material/entities/other-material.entity';

@Module({
  imports: [TypeOrmModule.forFeature([BudgetEntity, LineEntity, OtherMaterialEntity])],
  controllers: [BudgetController],
  providers: [BudgetService],
})
export class BudgetModule {}
