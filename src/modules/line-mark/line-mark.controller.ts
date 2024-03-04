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
    const newLineMark = await this.lineMarkService.createLineMark(createLineMarkDto)

    return {
      lineMark: newLineMark,
      message: "Marca criada com sucesso."
    }
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
    await this.lineMarkService.updateLineMark(id, updateLineMarkDto)
    return{
      lineMark:{
        id: id,
        name: updateLineMarkDto.name
      },
      mesaage: 'Marca atualizada com sucesso.'
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const deletedMark = await this.lineMarkService.deleteLineMark(id)
    return {
      lineMark: deletedMark,
      message: 'Marca deletada com sucesso.'
    }
  }
}
