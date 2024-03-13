import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateOtherMaterialDto } from './dto/create-other-material.dto';
import { UpdateOtherMaterialDto } from './dto/update-other-material.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { OtherMaterialEntity } from './entities/other-material.entity';
import { Repository } from 'typeorm';
import { ICreatedData, IDeletedData, IUpdatedData } from 'src/shared/types';

@Injectable()
export class OtherMaterialService {
  constructor(
    @InjectRepository(OtherMaterialEntity)
    private readonly otherMaterialRepository: Repository<OtherMaterialEntity>
  ){}

  async create(createOtherMaterialDto: CreateOtherMaterialDto): Promise<ICreatedData> {
    const newMaterial = new OtherMaterialEntity()
    newMaterial.name = createOtherMaterialDto.name
    newMaterial.type = createOtherMaterialDto.type
    newMaterial.imageLink = createOtherMaterialDto.imageLink
    newMaterial.value = createOtherMaterialDto.value
    newMaterial.weight = createOtherMaterialDto.weight
    newMaterial.otherInformations = createOtherMaterialDto.otherInformations

    await this.otherMaterialRepository.save(createOtherMaterialDto)
    return {
      data: newMaterial,
      message: 'Mateerial criado com sucesso.'
    }
  }

  async findAll(): Promise<OtherMaterialEntity[]> {
    return await this.otherMaterialRepository.find()
  }

  async findOne(id: string): Promise<OtherMaterialEntity> {
    try{
      const material = await this.otherMaterialRepository.findOneBy({id: id})
      if(material === null){
        throw new NotFoundException(`O tipo com id: ${id} não foi encontrado.`)
      }
      return material
    }
    catch(err){
      throw new NotFoundException(`O material com id: ${id} não foi encontrado.`)
    }
  }

  async update(id: string, updateOtherMaterialDto: UpdateOtherMaterialDto): Promise<IUpdatedData> {
    try{
      const material = await this.otherMaterialRepository.findOneBy({id: id})
      if(material === null){
        throw new NotFoundException(`O tipo com id: ${id} não foi encontrado.`)
      }
      await this.otherMaterialRepository.update(id, updateOtherMaterialDto)
      const updatedMaterial = await this.otherMaterialRepository.findOneBy({id: id})
      return {
        updateData: updateOtherMaterialDto,
        data: updatedMaterial,
        message: 'Material atualizado com sucesso.'
      }
    }
    catch(err){
      throw new NotFoundException(`O tipo com id: ${id} não foi encontrado.`)
    }
  }

  async remove(id: string): Promise<IDeletedData> {
    try{
      const deletedMaterial = await this.otherMaterialRepository.findOneBy({id: id})
      if(deletedMaterial === null){
        throw new NotFoundException(`O tipo com id: ${id} não foi encontrado.`)
      }
      await this.otherMaterialRepository.delete(id)
      return {
        data: deletedMaterial,
        message: 'Material deletado com sucesso.'
      }
    }
    catch(err){
      throw new NotFoundException(`O tipo com id: ${id} não foi encontrado.`)
    }
  }
}
