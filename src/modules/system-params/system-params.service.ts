import { Injectable } from '@nestjs/common';
import { CreateSystemParamDto } from './dto/create-system-param.dto';
import { UpdateSystemParamDto } from './dto/update-system-param.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { SystemParamEntity } from './entities/system-param.entity';
import { Repository } from 'typeorm';
import { ICreatedData, IDeletedData, IUpdatedData } from 'src/shared/types';

@Injectable()
export class SystemParamsService {
  constructor(
    @InjectRepository(SystemParamEntity)
    private readonly systemParamRepository: Repository<SystemParamEntity>
  ){}

  async createSystemParam(createSystemParamDto: CreateSystemParamDto): Promise<ICreatedData> {
    const newSystemParam = new SystemParamEntity()
    newSystemParam.salaryPerMonth = createSystemParamDto.salaryPerMonth
    newSystemParam.workingHoursPerMonth = createSystemParamDto.workingHoursPerMonth
    newSystemParam.profit = createSystemParamDto.profit

    await this.systemParamRepository.save(newSystemParam)
    return {
      data: newSystemParam,
      message: 'Parâmetros do sistema cadastrados com sucesso'
    }
  }

  async findAllSystemParam(): Promise<SystemParamEntity[]> {
    return await this.systemParamRepository.find();
  }

  async updateSystemParam(id: string, updateSystemParamDto: UpdateSystemParamDto): Promise<IUpdatedData> {
    await this.systemParamRepository.update(id, updateSystemParamDto);
    const updatedParams = await this.systemParamRepository.findOneBy({id: id})
    return {
      updateData: updateSystemParamDto,
      data: updatedParams,
      message: 'Parâmetros atualizados com sucesso.'
    }
  }

  async deleteSystemParam(id: string): Promise<IDeletedData> {
    const deletedParams = await this.systemParamRepository.findOneBy({id: id})
    await this.systemParamRepository.delete(id);
    return {
      data: deletedParams,
      message: 'Parâmetros deletados com sucesso.'
    }
  }
}
