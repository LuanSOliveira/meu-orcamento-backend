import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBudgetDto } from './dto/create-budget.dto';
import { UpdateBudgetDto } from './dto/update-budget.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { BudgetEntity } from './entities/budget.entity';
import { Repository } from 'typeorm';
import { ICreatedData, IUpdatedData } from 'src/shared/types';
import { LineEntity } from '../line/entities/line.entity';
import { OtherMaterialEntity } from '../other-material/entities/other-material.entity';

@Injectable()
export class BudgetService {
  constructor(
    @InjectRepository(BudgetEntity)
    private readonly budgetRepository: Repository<BudgetEntity>,

    @InjectRepository(LineEntity)
    private readonly lineRepository: Repository<LineEntity>,

    @InjectRepository(OtherMaterialEntity)
    private readonly materialRepository: Repository<OtherMaterialEntity>
  ){}

  async create(createBudgetDto: CreateBudgetDto): Promise<ICreatedData> {
    const linesList: LineEntity[] = []
    const materialsList: OtherMaterialEntity[] = []
    createBudgetDto.lines.forEach(
      async lineId => {
        const lineById = await this.lineRepository.findOneBy({id: lineId})
        if(lineById === null){
          throw new NotFoundException(`A linha com id: ${lineId} não foi encontrada.`)
        }
        linesList.push(lineById)
      }
    )
    if(createBudgetDto.materials.length > 0){
      createBudgetDto.materials.forEach(
        async materialId => {
          const materialById = await this.materialRepository.findOneBy({id: materialId})
          if(materialById === null){
            throw new NotFoundException(`O material com id: ${materialId} não foi encontrado.`)
          }
        }
      )
    }
    const newBudget = new BudgetEntity()
    newBudget.name = createBudgetDto.name
    newBudget.linkRecipe = createBudgetDto.linkRecipe
    newBudget.lines = linesList
    newBudget.materials = materialsList
    newBudget.extraTime = createBudgetDto.extraTime
    newBudget.freight = createBudgetDto.freight

    await this.budgetRepository.save(newBudget)
    return {
      data: newBudget,
      message: 'Orçamento criado com sucesso.'
    };
  }

  async findAll(): Promise<BudgetEntity[]> {
    return await this.budgetRepository.find({
      relations: {
        lines: true,
        materials: true
      }
    })
    // return await this.budgetRepository.createQueryBuilder('budget')
    // .leftJoinAndSelect('budget.lines', 'lines')
    // .leftJoinAndSelect('budget.materials', 'materials')
    // .getMany();
  }

  async findOne(id: string): Promise<BudgetEntity> {
    try{
      const budget = this.budgetRepository.createQueryBuilder('budget')
      .leftJoinAndSelect('budget.lines', 'lines')
      .leftJoinAndSelect('budget.materials', 'materials')
      .where('budget.id = :id', { id })
      .getOne();

      if(budget === null || budget === undefined){
        throw new NotFoundException(`O material com id: ${id} não foi encontrado.`)
      }

      return budget
    }
    catch(err){
      throw new NotFoundException(`O material com id: ${id} não foi encontrado.`)
    }
  }

  async update(id: string, updateBudgetDto: UpdateBudgetDto): Promise<IUpdatedData> {
    try{
      const budget = this.budgetRepository.findOneBy({id : id})
      if(budget === null){
        throw new NotFoundException(`O material com id: ${id} não foi encontrado.`)
      }
      await this.budgetRepository.update(id, updateBudgetDto)
      const updatedBudget = await this.budgetRepository.createQueryBuilder('budget')
      .leftJoinAndSelect('budget.lines', 'lines')
      .leftJoinAndSelect('budget.materials', 'materials')
      .where('budget.id = :id', { id })
      .getOne();
      return {
        updateData: updateBudgetDto,
        data: updatedBudget,
        message: 'Orçamento atualizado com sucesso.'
      }
    }
    catch(err){

    }
  }

  async remove(id: string): Promise<ICreatedData> {
    try{
      const budget = await this.budgetRepository.findOneBy({id : id})
        if(budget === null || budget === undefined){
          throw new NotFoundException(`O orçamento com id: ${id} não foi encontrado.`)
        }
      const deletedBudget = await this.budgetRepository.createQueryBuilder('budget')
      .leftJoinAndSelect('budget.lines', 'lines')
      .leftJoinAndSelect('budget.materials', 'materials')
      .where('budget.id = :id', { id })
      .getOne();
      await this.budgetRepository.delete(id)
      return {
        data: deletedBudget,
        message: 'Orçamento deletado com sucesso.'
      }
    }
    catch(err){
      throw new NotFoundException(`O orçamento com id: ${id} não foi encontrado.`)
    }
  }
}
