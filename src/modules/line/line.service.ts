import { Injectable } from '@nestjs/common';
import { CreateLineDto } from './dto/create-line.dto';
import { UpdateLineDto } from './dto/update-line.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { LineEntity } from './entities/line.entity';
import { Repository } from 'typeorm';
import { ICreatedData, IDeletedData, IUpdatedData } from 'src/shared/types';

@Injectable()
export class LineService {
  constructor(
    @InjectRepository(LineEntity)
    private readonly lineRepository: Repository<LineEntity>,
  ){}

  async create(createLineDto: CreateLineDto): Promise<ICreatedData> {
    const newLine = new LineEntity()
    newLine.lineMark = createLineDto.lineMark
    newLine.lineType = createLineDto.lineType
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
    return await this.lineRepository.find();
  }

  async findOne(id: string): Promise<LineEntity> {
    return await this.lineRepository.findOneBy({id: id});
  }

  async update(id: string, updateLineDto: UpdateLineDto): Promise<IUpdatedData> {    
    await this.lineRepository.update(id, updateLineDto);
    const updatedLine = await this.lineRepository.findOneBy({id: id})
    return{
      updateData: updateLineDto,
      data: updatedLine,
      message: 'Linha atualizada com sucesso.'
    }
  }

  async remove(id: string): Promise<IDeletedData> {
    const deletedLine = await this.lineRepository.findOneBy({id: id})
    await this.lineRepository.delete(id)
    return {
      data: deletedLine,
      message: 'Linha deletada com sucesso.'
    }
  }
}
