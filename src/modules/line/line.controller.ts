import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LineService } from './line.service';
import { CreateLineDto } from './dto/create-line.dto';
import { UpdateLineDto } from './dto/update-line.dto';

@Controller('line')
export class LineController {
  constructor(private readonly lineService: LineService) {}

  @Post()
  async create(@Body() createLineDto: CreateLineDto) {
    const newLine = await this.lineService.create(createLineDto)
    return {
      line: newLine,
      message: "Linha criada com sucesso."
    }
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
    await this.lineService.update(id, updateLineDto)
    return {
      line: {
        id: id,
        data: updateLineDto,
      },
      message: 'Linha atualizada com sucesso.'
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const deletedLine = await this.lineService.remove(id)
    return {
      line: deletedLine,
      message: 'Linha deletada com sucesso.'
    }
  }
}
