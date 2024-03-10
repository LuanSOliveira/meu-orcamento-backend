import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SystemParamsService } from './system-params.service';
import { CreateSystemParamDto } from './dto/create-system-param.dto';
import { UpdateSystemParamDto } from './dto/update-system-param.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('system-params')
@Controller('system-params')
export class SystemParamsController {
  constructor(private readonly systemParamsService: SystemParamsService) {}

  @Post()
  async create(@Body() createSystemParamDto: CreateSystemParamDto) {
    return await this.systemParamsService.createSystemParam(createSystemParamDto);
  }

  @Get()
  async findAll() {
    return await this.systemParamsService.findAllSystemParam();
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateSystemParamDto: UpdateSystemParamDto) {
    return await this.systemParamsService.updateSystemParam(id, updateSystemParamDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.systemParamsService.deleteSystemParam(id);
  }
}
