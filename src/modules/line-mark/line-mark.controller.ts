import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LineMarkService } from './line-mark.service';
import { CreateLineMarkDto } from './dto/create-line-mark.dto';
import { UpdateLineMarkDto } from './dto/update-line-mark.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('line-mark')
@Controller('line-mark')
export class LineMarkController {
  constructor(private readonly lineMarkService: LineMarkService) {}

  @Post()
  async create(@Body() createLineMarkDto: CreateLineMarkDto) {
    return await this.lineMarkService.createLineMark(createLineMarkDto)
  }

  @Get()
  async findAll() {
    return await this.lineMarkService.findAllLineMark();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.lineMarkService.findOneLineMark(id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateLineMarkDto: UpdateLineMarkDto) {
    return await this.lineMarkService.updateLineMark(id, updateLineMarkDto)
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.lineMarkService.deleteLineMark(id)
  }
}
