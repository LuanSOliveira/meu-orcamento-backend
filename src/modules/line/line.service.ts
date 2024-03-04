import { Injectable } from '@nestjs/common';
import { CreateLineDto } from './dto/create-line.dto';
import { UpdateLineDto } from './dto/update-line.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { LineEntity } from './entities/line.entity';
import { Repository } from 'typeorm';
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

  async create(createLineDto: CreateLineDto): Promise<LineEntity> {
    const lineMark = await this.lineMarkRepository.findOneBy({id: createLineDto.lineMarkId})
    const lineType = await this.lineTypeRepository.findOneBy({id: createLineDto.lineTypeId})
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
    return newLine
  }

  async findAll() {
    return await this.lineRepository.find();
  }

  async findOne(id: string) {
    return await this.lineRepository.findOneBy({id: id});
  }

  async update(id: string, updateLineDto: UpdateLineDto) {
    const updatedLine = new LineEntity()
    if(updateLineDto.lineMarkId){
      
    }
    const lineMark = await this.lineMarkRepository.findOneBy({id: updateLineDto.lineMarkId})
    const lineType = await this.lineTypeRepository.findOneBy({id: updateLineDto.lineTypeId})
    await this.lineRepository.update(id, updateLineDto);
  }

  async remove(id: string) {
    return `This action removes a #${id} line`;
  }
}
