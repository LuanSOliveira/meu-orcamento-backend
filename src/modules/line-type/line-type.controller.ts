import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LineTypeService } from './line-type.service';
import { CreateLineTypeDto } from './dto/create-line-type.dto';
import { UpdateLineTypeDto } from './dto/update-line-type.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('line-type')
@Controller('line-type')
export class LineTypeController {
  constructor(private readonly lineTypeService: LineTypeService) {}

  @Post()
  async create(@Body() createLineTypeDto: CreateLineTypeDto) {
    const newLineType = await this.lineTypeService.createLineType(createLineTypeDto)
    return {
      lineType: newLineType,
      message: 'Tipo criado com sucesso'
    }
  }

  @Get()
  async findAll() {
    return await this.lineTypeService.findAllLineType();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.lineTypeService.findOneLineType(id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateLineTypeDto: UpdateLineTypeDto) {
    await this.lineTypeService.updateLineType(id, updateLineTypeDto);
    return{
      lineMark:{
        id: id,
        name: updateLineTypeDto.name
      },
      message: 'Tipo atualizado com sucesso.'
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const deletedType = await this.lineTypeService.deleteLineType(id)
    return {
      lineType: deletedType,
      message: 'Tipo deletado com sucesso.'
    }
  }
}
