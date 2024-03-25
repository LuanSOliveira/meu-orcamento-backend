import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { BudgetService } from './budget.service';
import { CreateBudgetDto } from './dto/create-budget.dto';
import { UpdateBudgetDto } from './dto/update-budget.dto';
import { ApiQuery, ApiTags } from '@nestjs/swagger';

@ApiTags('budget')
@Controller('budget')
export class BudgetController {
  constructor(private readonly budgetService: BudgetService) {}

  @Post()
  async create(@Body() createBudgetDto: CreateBudgetDto) {
    return await this.budgetService.create(createBudgetDto);
  }

  @Get()
  @ApiQuery({name: 'page', required: false, type: Number})
  @ApiQuery({name: 'limit', required: false, type: Number})
  @ApiQuery({name: 'filter', required: false, type: String})
  async findAll(
    @Query('page') page = 1, 
    @Query('limit') limit = 15, 
    @Query('filter') filter: string,
  ) {
    limit = (limit > 15) ? 15 : limit
    return await this.budgetService.findAll({page, limit}, filter);
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
