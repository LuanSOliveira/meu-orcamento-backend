import { Injectable } from '@nestjs/common';
import { CreateLineMarkDto } from './dto/create-line-mark.dto';
import { UpdateLineMarkDto } from './dto/update-line-mark.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { LineMarkEntity } from './entities/line-mark.entity';
import { Repository } from 'typeorm';
import { ICreatedData, IDeletedData, IUpdatedData } from 'src/shared/types';

@Injectable()
export class LineMarkService {
  constructor(
    @InjectRepository(LineMarkEntity)
    private readonly lineMarkRepository: Repository<LineMarkEntity>
  ){}

  async createLineMark(createLineMarkDto: CreateLineMarkDto): Promise<ICreatedData> {
    const newLineMark = new LineMarkEntity()
    newLineMark.name = createLineMarkDto.name

    await this.lineMarkRepository.save(newLineMark)
    return {
      data: newLineMark,
      message: 'Marca criada com sucesso.'
    }
  }

  async findAllLineMark(): Promise<LineMarkEntity[]> {
    return await this.lineMarkRepository.find();
  }

  async findOneLineMark(id: string): Promise<LineMarkEntity> {
    return await this.lineMarkRepository.findOneBy({id: id})
  }

  async updateLineMark(id: string, updateLineMarkDto: UpdateLineMarkDto): Promise<IUpdatedData> {
    await this.lineMarkRepository.update(id, updateLineMarkDto)
    const updatedMark = await this.lineMarkRepository.findOneBy({id: id})
    return{
      updateData: updateLineMarkDto,
      data: updatedMark,
      message: 'Marca atualizada com sucesso.'
    }
  }

  async deleteLineMark(id: string): Promise<IDeletedData> {
    const selectedMark = await this.lineMarkRepository.findOneBy({id: id}) 
    await this.lineMarkRepository.delete(id)

    return {
      data: selectedMark,
      message: 'Marca deletada com sucesso.'
    }
  }
}
