import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BudgetService } from './budget.service';
import { CreateBudgetDto } from './dto/create-budget.dto';
import { UpdateBudgetDto } from './dto/update-budget.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('budget')
@Controller('budget')
export class BudgetController {
  constructor(private readonly budgetService: BudgetService) {}

  @Post()
  async create(@Body() createBudgetDto: CreateBudgetDto) {
    return await this.budgetService.create(createBudgetDto);
  }

  @Get()
  async findAll() {
    return await this.budgetService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.budgetService.findOne(id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateBudgetDto: UpdateBudgetDto) {
    return await this.budgetService.update(id, updateBudgetDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.budgetService.remove(id);
  }
}
