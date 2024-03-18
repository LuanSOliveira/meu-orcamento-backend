import { BadRequestException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreateLineTypeDto } from './dto/create-line-type.dto';
import { UpdateLineTypeDto } from './dto/update-line-type.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { LineTypeEntity } from './entities/line-type.entity';
import { QueryFailedError, Repository } from 'typeorm';
import { ICreatedData, IDeletedData, IUpdatedData } from 'src/shared/types';

@Injectable()
export class LineTypeService {
  constructor(
    @InjectRepository(LineTypeEntity)
    private readonly lineTypeRepository: Repository<LineTypeEntity>
  ){}

  async createLineType(createLineTypeDto: CreateLineTypeDto): Promise<ICreatedData> {
    const newLineType = new LineTypeEntity()
    newLineType.name = createLineTypeDto.name
    await this.lineTypeRepository.save(newLineType)

    return {
      data: newLineType,
      message: 'Tipo criado com sucesso.'
    }
  }

  async findAllLineType(): Promise<LineTypeEntity[]> {
    return await this.lineTypeRepository.find();
  }

  async findOneLineType(id: string): Promise<LineTypeEntity> {
    try{
      const lineType = await this.lineTypeRepository.findOneBy({id: id});
      if(lineType === null){
        throw new NotFoundException(`O tipo com id: ${id} não foi encontrado.`)
      }
      return lineType
    }
    catch(err){
      throw new NotFoundException(`O tipo com id: ${id} não foi encontrado.`)
    }
  }

  async updateLineType(id: string, updateLineTypeDto: UpdateLineTypeDto): Promise<IUpdatedData> {
    try{
      const lineType = await this.lineTypeRepository.findOneBy({id: id});
      if(lineType === null){
        throw new NotFoundException(`O tipo com id: ${id} não foi encontrado.`)
      }
      await this.lineTypeRepository.update(id, updateLineTypeDto)
      const updatedType = await this.lineTypeRepository.findOneBy({id: id})
      return{
        updateData: updateLineTypeDto,
        data: updatedType,
        message: 'Tipo atualizado com sucesso.'
      }
    }
    catch(err){
      throw new NotFoundException(`O tipo com id: ${id} não foi encontrado.`)
    }
  }

  async deleteLineType(id: string): Promise<IDeletedData> {
    try{
      const deletedLineType = await this.lineTypeRepository.findOneBy({id: id})
      if(deletedLineType === null){
        throw new NotFoundException(`O tipo com id: ${id} não foi encontrado.`)
      }
      await this.lineTypeRepository.delete(id)
  
      return {
        data: deletedLineType,
        message: 'Tipo deletado com sucesso.'
      }
    }
    catch(err){
      if (err instanceof QueryFailedError && err.message.includes('violates foreign key constraint')) {
        throw new BadRequestException('Não é possível excluir este tipo de linha porque existem linhas associadas a ele.');
      } else {
        throw new InternalServerErrorException('Ocorreu um erro ao tentar excluir o tipo de linha.');
      }
    }
  }
}
