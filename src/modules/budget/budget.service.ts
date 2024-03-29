import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBudgetDto } from './dto/create-budget.dto';
import { UpdateBudgetDto } from './dto/update-budget.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { BudgetEntity } from './entities/budget.entity';
import { Repository } from 'typeorm';
import { ICreatedData, IUpdatedData } from 'src/shared/types';
import { LineEntity } from '../line/entities/line.entity';
import { OtherMaterialEntity } from '../other-material/entities/other-material.entity';
import { IPaginationOptions, Pagination, paginate } from 'nestjs-typeorm-paginate';

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
    for (const lineId of createBudgetDto.lines) {
      const lineById = await this.lineRepository.findOne({ where: { id: lineId }, relations: ['lineType', 'lineMark'] });
      if (!lineById) {
          throw new NotFoundException(`A linha com id: ${lineId} não foi encontrada.`);
      }
      linesList.push(lineById);
    }

    for (const materialId of createBudgetDto.materials) {
        const materialById = await this.materialRepository.findOne({ where: { id: materialId } });
        if (!materialById) {
            throw new NotFoundException(`O material com id: ${materialId} não foi encontrado.`);
        }
        materialsList.push(materialById);
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

  async findAll(options: IPaginationOptions, filter: string): Promise<Pagination<BudgetEntity>> {
    const queryBuilder = this.budgetRepository.createQueryBuilder('budget')
    .select([
      'budget.id', 'budget.name', 'budget.linkRecipe', 'budget.extraTime',
      'budget.freight', 'budget.created_at', 'budget.updated_at',
    ])
    .leftJoinAndSelect('budget.lines', 'lines')
    .leftJoinAndSelect('lines.lineMark', 'lineMark')
    .leftJoinAndSelect('lines.lineType', 'lineType')
    .leftJoinAndSelect('budget.materials', 'materials')
    .orderBy('budget.name', 'ASC');

    if(filter){
      queryBuilder.andWhere('LOWER(budget.name) LIKE :name', {name: `%${filter.toLocaleLowerCase()}%`})
    }

    return paginate<BudgetEntity>(queryBuilder, options)
  }

  async findOne(id: string): Promise<BudgetEntity> {
    try{
      const budget = this.budgetRepository.findOne({ where: { id: id }, relations: ['lines', 'lines.lineType', 'lines.lineMark', 'materials'] })

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
    const linesList: LineEntity[] = []
    const materialsList: OtherMaterialEntity[] = []
    const updateData = await this.budgetRepository.findOne({ where: { id: id }, relations: {lines: true, materials: true} })
    if(updateData === null){
      throw new NotFoundException(`O orçamento com id: ${id} não foi encontrado.`)
    }

    for(const key in updateBudgetDto){
      if(Object.prototype.hasOwnProperty.call(updateBudgetDto, key)){
        const value = updateBudgetDto[key]
        if(key === 'lines'){
          if(updateBudgetDto.lines.length > 0){
            for (const lineId of updateBudgetDto.lines) {
              const lineById = await this.lineRepository.findOne({ where: { id: lineId }, relations: ['lineType', 'lineMark'] });
              if (!lineById) {
                  throw new NotFoundException(`A linha com id: ${lineId} não foi encontrada.`);
              }
              linesList.push(lineById);
            }
          }
          updateData[key] = linesList
        }
        else if(key === 'materials'){
          if(updateBudgetDto.materials.length > 0){
            for (const materialId of updateBudgetDto.materials) {
                const materialById = await this.materialRepository.findOne({ where: { id: materialId } });
                if (!materialById) {
                    throw new NotFoundException(`O material com id: ${materialId} não foi encontrado.`);
                }
                materialsList.push(materialById);
            }
          }
          updateData[key] = materialsList
        }
        else{
          updateData[key] = value
        }
      }
    }      

    try{
      await this.budgetRepository.save(updateData)
      const updatedBudget = await this.budgetRepository.findOne({ where: { id: id }, relations: ['lines', 'lines.lineType', 'lines.lineMark', 'materials'] })
      return {
        updateData: updateBudgetDto,
        data: updatedBudget,
        message: 'Orçamento atualizado com sucesso.'
      }
    }
    catch(err){
      throw new NotFoundException(`O orçamento com id: ${id} não foi encontrado.`)
    }
  }

  async remove(id: string): Promise<ICreatedData> {
    try{
      const budget = await this.budgetRepository.findOneBy({id : id})
        if(budget === null || budget === undefined){
          throw new NotFoundException(`O orçamento com id: ${id} não foi encontrado.`)
        }
      const deletedBudget = await this.budgetRepository.findOne({ where: { id: id }, relations: ['lines', 'lines.lineType', 'lines.lineMark', 'materials'] })
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
