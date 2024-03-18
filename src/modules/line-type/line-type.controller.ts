import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LineTypeService } from './line-type.service';
import { CreateLineTypeDto } from './dto/create-line-type.dto';
import { UpdateLineTypeDto } from './dto/update-line-type.dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { successfulCreateLineType, successfulDeleteLineType, successfulFindAllLineType, successfulFindOneLineType, successfullUpdateLineType } from './docs';

@ApiTags('line-type')
@Controller('line-type')
export class LineTypeController {
  constructor(private readonly lineTypeService: LineTypeService) {}

  @ApiResponse(successfulCreateLineType)
  @Post()
  async create(@Body() createLineTypeDto: CreateLineTypeDto) {
    return await this.lineTypeService.createLineType(createLineTypeDto)
  }

  @ApiResponse(successfulFindAllLineType)
  @Get()
  async findAll() {
    return await this.lineTypeService.findAllLineType();
  }

  @ApiResponse(successfulFindOneLineType)
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.lineTypeService.findOneLineType(id);
  }

  @ApiResponse(successfullUpdateLineType)
  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateLineTypeDto: UpdateLineTypeDto) {
    return await this.lineTypeService.updateLineType(id, updateLineTypeDto);
  }

  @ApiResponse(successfulDeleteLineType)
  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.lineTypeService.deleteLineType(id)
  }
}
