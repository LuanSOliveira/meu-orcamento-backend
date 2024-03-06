import { Injectable } from '@nestjs/common';
import { CreateLineDto } from './dto/create-line.dto';
import { UpdateLineDto } from './dto/update-line.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { LineEntity } from './entities/line.entity';
import { Repository } from 'typeorm';

@Injectable()
export class LineService {
  constructor(
    @InjectRepository(LineEntity)
    private readonly lineRepository: Repository<LineEntity>,
  ){}

  async create(createLineDto: CreateLineDto): Promise<LineEntity> {
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
    return newLine
  }

  async findAll() {
    return await this.lineRepository.find();
  }

  async findOne(id: string) {
    return await this.lineRepository.findOneBy({id: id});
  }

  async update(id: string, updateLineDto: UpdateLineDto) {    
    await this.lineRepository.update(id, updateLineDto);
  }

  async remove(id: string) {
    await this.lineRepository.delete(id)
  }
}
