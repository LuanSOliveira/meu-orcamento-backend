import { Injectable } from '@nestjs/common';
import { CreateLineTypeDto } from './dto/create-line-type.dto';
import { UpdateLineTypeDto } from './dto/update-line-type.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { LineTypeEntity } from './entities/line-type.entity';
import { Repository } from 'typeorm';

@Injectable()
export class LineTypeService {
  constructor(
    @InjectRepository(LineTypeEntity)
    private readonly lineTypeRepository: Repository<LineTypeEntity>
  ){}

  async createLineType(createLineTypeDto: CreateLineTypeDto): Promise<LineTypeEntity> {
    const newLineType = new LineTypeEntity()
    newLineType.name = createLineTypeDto.name
    await this.lineTypeRepository.save(newLineType)

    return newLineType;
  }

  async findAllLineType() {
    return await this.lineTypeRepository.find();
  }

  async findOneLineType(id: string) {
    return await this.lineTypeRepository.findOneBy({id: id});
  }

  async updateLineType(id: string, updateLineTypeDto: UpdateLineTypeDto) {
    await this.lineTypeRepository.update(id, updateLineTypeDto)
  }

  async deleteLineType(id: string): Promise<LineTypeEntity> {
    const deletedLineType = await this.lineTypeRepository.findOneBy({id: id})
    await this.lineTypeRepository.delete(id)

    return deletedLineType

  }
}
