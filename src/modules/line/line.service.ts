import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateLineDto } from './dto/create-line.dto';
import { UpdateLineDto } from './dto/update-line.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { LineEntity } from './entities/line.entity';
import { Repository } from 'typeorm';
import { ICreatedData, IDeletedData, IUpdatedData } from 'src/shared/types';
import { LineTypeEntity } from '../line-type/entities/line-type.entity';
import { LineMarkEntity } from '../line-mark/entities/line-mark.entity';

@Injectable()
export class LineService {
  constructor(
    @InjectRepository(LineEntity)
    private readonly lineRepository: Repository<LineEntity>,

    @InjectRepository(LineTypeEntity)
    private readonly lineTypeRepository: Repository<LineTypeEntity>,

    @InjectRepository(LineMarkEntity)
    private readonly lineMarkRepository: Repository<LineMarkEntity>
  ){}

  async create(createLineDto: CreateLineDto): Promise<ICreatedData> {
    const lineType = await this.lineTypeRepository.findOneBy({id: createLineDto.lineType})
    const lineMark = await this.lineMarkRepository.findOneBy({id: createLineDto.lineMark})
    if(lineType === null || lineType === undefined){
      throw new NotFoundException(`O tipo com id: ${createLineDto.lineType} não foi encontrado.`)
    }
    if(lineMark === null || lineMark === undefined){
      throw new NotFoundException(`A marca com id: ${createLineDto.lineMark} não foi encontrada.`)
    }
    const newLine = new LineEntity()
    newLine.lineMark = lineMark
    newLine.lineType = lineType
    newLine.imageLink = createLineDto.imageLink
    newLine.value = createLineDto.value
    newLine.weightLine = createLineDto.weightLine
    newLine.pointsPerWeightQt = createLineDto.pointsPerWeightQt
    newLine.weightPerPoints = createLineDto.weightPerPoints
    newLine.hoursPointsQt = createLineDto.hoursPointsQt
    newLine.minutesPerPoints = createLineDto.minutesPerPoints
    newLine.otherInformations = createLineDto.otherInformations

    await this.lineRepository.save(newLine)
    return {
      data: newLine,
      message: 'Linha criada com sucesso.'
    }
  }

  async findAll(): Promise<LineEntity[]> {
    return await this.lineRepository.createQueryBuilder('line')
    .leftJoinAndSelect('line.lineType', 'lineType')
    .leftJoinAndSelect('line.lineMark', 'lineMark')
    .getMany();
  }

  async findOne(id: string): Promise<LineEntity> {
    try{
      const line = await this.lineRepository
        .createQueryBuilder('line')
        .leftJoinAndSelect('line.lineType', 'lineType')
        .leftJoinAndSelect('line.lineMark', 'lineMark')
        .where('line.id = :id', { id })
        .getOne();

      if(line === null || line === undefined){
        throw new NotFoundException(`A linha com id: ${id} não foi encontrada.`)
      }
      return line
    }
    catch(err){
      throw new NotFoundException(`A linha com id: ${id} não foi encontrada.`)
    }
  }

  async update(id: string, updateLineDto: UpdateLineDto): Promise<IUpdatedData> {
    if(updateLineDto.lineMark){
      try{
        await this.lineMarkRepository.findOneBy({id: updateLineDto.lineMark}) 
      }
      catch(err){
        throw new NotFoundException(`A marca com id: ${updateLineDto.lineMark} não foi encontrada.`)
      }
    }
    if(updateLineDto.lineType){
      try{
        await this.lineTypeRepository.findOneBy({id: updateLineDto.lineType}) 
      }
      catch(err){
        throw new NotFoundException(`O tipo com id: ${updateLineDto.lineType} não foi encontrado.`)
      }
    }

    const updateData = {}    
    for (const key in updateLineDto){
      if(Object.prototype.hasOwnProperty.call(updateLineDto, key)){
        const value = updateLineDto[key]
        if(key === 'lineMark'){
          const lineMark = await this.lineMarkRepository.findOneBy({id: updateLineDto.lineMark})
          updateData[key] = lineMark
        }
        else if(key === 'lineType'){
          const lineType = await this.lineTypeRepository.findOneBy({id: updateLineDto.lineType})
          updateData[key] = lineType
        }
        else{
          updateData[key] = value
        }
      }
    }

    try{
      const line = await this.lineRepository.findOneBy({id: id})
      if(line === null){
        throw new NotFoundException(`A linha com id: ${id} não foi encontrada.`)
      }
      await this.lineRepository.update(id, updateData);
      const updatedLine = await this.lineRepository
      .createQueryBuilder('line')
      .leftJoinAndSelect('line.lineType', 'lineType')
      .leftJoinAndSelect('line.lineMark', 'lineMark')
      .where('line.id = :id', { id })
      .getOne();
      return{
        updateData: updateLineDto,
        data: updatedLine,
        message: 'Linha atualizada com sucesso.'
      }
    }
    catch(err){
      throw new NotFoundException(`A linha com id: ${id} não foi encontrada.`)
    }
  }

  async remove(id: string): Promise<IDeletedData> {
    try{
      const line = await this.lineRepository.findOneBy({id: id})
      if(line === null){
        throw new NotFoundException(`A linha com id: ${id} não foi encontrada.`)
      }
      const deletedLine = await this.lineRepository
      .createQueryBuilder('line')
      .leftJoinAndSelect('line.lineType', 'lineType')
      .leftJoinAndSelect('line.lineMark', 'lineMark')
      .where('line.id = :id', { id })
      .getOne();
      await this.lineRepository.delete(id)
      return {
        data: deletedLine,
        message: 'Linha deletada com sucesso.'
      }
    }
    catch(err){
      throw new NotFoundException(`A linha com id: ${id} não foi encontrada.`)
    }
  }
}
