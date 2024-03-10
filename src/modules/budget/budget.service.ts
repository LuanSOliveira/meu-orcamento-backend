import { Injectable } from '@nestjs/common';
import { CreateBudgetDto } from './dto/create-budget.dto';
import { UpdateBudgetDto } from './dto/update-budget.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { BudgetEntity } from './entities/budget.entity';
import { Repository } from 'typeorm';
import { ICreatedData, IUpdatedData } from 'src/shared/types';

@Injectable()
export class BudgetService {
  constructor(
    @InjectRepository(BudgetEntity)
    private readonly budgetRepository: Repository<BudgetEntity>
  ){}

  async create(createBudgetDto: CreateBudgetDto): Promise<ICreatedData> {
    const newBudget = new BudgetEntity()
    newBudget.name = createBudgetDto.name
    newBudget.linkRecipe = createBudgetDto.linkRecipe
    newBudget.lines = createBudgetDto.lines
    newBudget.materials = createBudgetDto.materials
    newBudget.extraTime = createBudgetDto.extraTime
    newBudget.freight = createBudgetDto.freight

    await this.budgetRepository.save(newBudget)
    return {
      data: newBudget,
      message: 'Orçamento criado com sucesso.'
    };
  }

  async findAll(): Promise<BudgetEntity[]> {
    return await this.budgetRepository.find();
  }

  async findOne(id: string): Promise<BudgetEntity> {
    return await this.budgetRepository.findOneBy({id: id});
  }

  async update(id: string, updateBudgetDto: UpdateBudgetDto): Promise<IUpdatedData> {
    await this.budgetRepository.update(id, updateBudgetDto)
    const updatedBudget = await this.budgetRepository.findOneBy({id: id})
    return {
      updateData: updateBudgetDto,
      data: updatedBudget,
      message: 'Orçamento atualizado com sucesso.'
    }
  }

  async remove(id: string): Promise<ICreatedData> {
    const deletedBudget = await this.budgetRepository.findOneBy({id: id})
    await this.budgetRepository.delete(id)
    return {
      data: deletedBudget,
      message: 'Orçamento deletado com sucesso.'
    }
  }
}
