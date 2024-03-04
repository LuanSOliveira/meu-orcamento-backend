import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SystemParamsService } from './system-params.service';
import { CreateSystemParamDto } from './dto/create-system-param.dto';
import { UpdateSystemParamDto } from './dto/update-system-param.dto';

@Controller('system-params')
export class SystemParamsController {
  constructor(private readonly systemParamsService: SystemParamsService) {}

  @Post()
  async create(@Body() createSystemParamDto: CreateSystemParamDto) {
    const newSystemParam = await this.systemParamsService.createSystemParam(createSystemParamDto);
    return{
      systemParam: newSystemParam,
      message: 'Parâmetros do sistema cadastrados com sucesso'
    }
  }

  @Get()
  async findAll() {
    return await this.systemParamsService.findAllSystemParam();
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateSystemParamDto: UpdateSystemParamDto) {
    await this.systemParamsService.updateSystemParam(id, updateSystemParamDto);
    return{
      systemParam: {
        id: id,
        salaryPerMonth: updateSystemParamDto.salaryPerMonth,
        workingHoursPerMonth: updateSystemParamDto.workingHoursPerMonth,
        profit: updateSystemParamDto.profit,
      },
      message: 'Parâmetros atualizados com sucesso.'
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    await this.systemParamsService.deleteSystemParam(id);
    return {
      message: 'Parâmetros deletados com sucesso.'
    }
  }
}
