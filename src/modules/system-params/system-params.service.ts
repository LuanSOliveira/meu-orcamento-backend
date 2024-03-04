import { Injectable } from '@nestjs/common';
import { CreateSystemParamDto } from './dto/create-system-param.dto';
import { UpdateSystemParamDto } from './dto/update-system-param.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { SystemParamEntity } from './entities/system-param.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SystemParamsService {
  constructor(
    @InjectRepository(SystemParamEntity)
    private readonly systemParamRepository: Repository<SystemParamEntity>
  ){}

  async createSystemParam(createSystemParamDto: CreateSystemParamDto): Promise<SystemParamEntity> {
    const newSystemParam = new SystemParamEntity()
    newSystemParam.salaryPerMonth = createSystemParamDto.salaryPerMonth
    newSystemParam.workingHoursPerMonth = createSystemParamDto.workingHoursPerMonth
    newSystemParam.profit = createSystemParamDto.profit

    await this.systemParamRepository.save(newSystemParam)
    return newSystemParam

  }

  async findAllSystemParam() {
    return await this.systemParamRepository.find();
  }

  async updateSystemParam(id: string, updateSystemParamDto: UpdateSystemParamDto) {
    await this.systemParamRepository.update(id, updateSystemParamDto);
  }

  async deleteSystemParam(id: string) {
    await this.systemParamRepository.delete(id);
  }
}
