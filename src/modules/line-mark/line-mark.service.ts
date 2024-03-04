import { Injectable } from '@nestjs/common';
import { CreateLineMarkDto } from './dto/create-line-mark.dto';
import { UpdateLineMarkDto } from './dto/update-line-mark.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { LineMarkEntity } from './entities/line-mark.entity';
import { Repository } from 'typeorm';

@Injectable()
export class LineMarkService {
  constructor(
    @InjectRepository(LineMarkEntity)
    private readonly lineMarkRepository: Repository<LineMarkEntity>
  ){}

  async createLineMark(createLineMarkDto: CreateLineMarkDto): Promise<LineMarkEntity> {
    const newLineMark = new LineMarkEntity()
    newLineMark.name = createLineMarkDto.name

    await this.lineMarkRepository.save(newLineMark)
    return newLineMark;
  }

  async findAllLineMark() {
    return await this.lineMarkRepository.find();
  }

  async findOneLineMark(id: string) {
    return await this.lineMarkRepository.findOneBy({id: id})
  }

  async updateLineMark(id: string, updateLineMarkDto: UpdateLineMarkDto) {
    await this.lineMarkRepository.update(id, updateLineMarkDto)
  }

  async deleteLineMark(id: string): Promise<LineMarkEntity> {
    const selectedMark = await this.lineMarkRepository.findOneBy({id: id}) 
    await this.lineMarkRepository.delete(id)

    return selectedMark
  }
}
