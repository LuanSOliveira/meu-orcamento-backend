import { Module } from '@nestjs/common';
import { BudgetService } from './budget.service';
import { BudgetController } from './budget.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BudgetEntity } from './entities/budget.entity';

@Module({
  imports: [TypeOrmModule.forFeature([BudgetEntity])],
  controllers: [BudgetController],
  providers: [BudgetService],
})
export class BudgetModule {}
