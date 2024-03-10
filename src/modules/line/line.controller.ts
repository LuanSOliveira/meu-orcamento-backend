import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LineService } from './line.service';
import { CreateLineDto } from './dto/create-line.dto';
import { UpdateLineDto } from './dto/update-line.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('line')
@Controller('line')
export class LineController {
  constructor(private readonly lineService: LineService) {}

  @Post()
  async create(@Body() createLineDto: CreateLineDto) {
    return await this.lineService.create(createLineDto)
  }

  @Get()
  async findAll() {
    return await this.lineService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.lineService.findOne(id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateLineDto: UpdateLineDto) {
    return await this.lineService.update(id, updateLineDto)
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.lineService.remove(id)
  }
}
