import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { OtherMaterialService } from './other-material.service';
import { CreateOtherMaterialDto } from './dto/create-other-material.dto';
import { UpdateOtherMaterialDto } from './dto/update-other-material.dto';
import { ApiQuery, ApiTags } from '@nestjs/swagger';

enum FilterByType {
  Name = 'name',
  Type = 'type',
}

@ApiTags('other-material')
@Controller('other-material')
export class OtherMaterialController {
  constructor(private readonly otherMaterialService: OtherMaterialService) {}

  @Post()
  async create(@Body() createOtherMaterialDto: CreateOtherMaterialDto) {
    return await this.otherMaterialService.create(createOtherMaterialDto);
  }

  @Get()
  @ApiQuery({name: 'page', required: false, type: Number})
  @ApiQuery({name: 'limit', required: false, type: Number})
  @ApiQuery({name: 'filter', required: false, type: String})
  @ApiQuery({name: 'filterBy', required: false, type: 'string', enum: FilterByType})
  async findAll(
    @Query('page') page = 1, 
    @Query('limit') limit = 15, 
    @Query('filter') filter: string, 
    @Query('filterBy') filterBy: 'name' | 'type' = 'name'
  ) {
    limit = (limit > 15) ? 15 : limit
    return await this.otherMaterialService.findAll({page, limit}, filter, filterBy);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.otherMaterialService.findOne(id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateOtherMaterialDto: UpdateOtherMaterialDto) {
    return await this.otherMaterialService.update(id, updateOtherMaterialDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.otherMaterialService.remove(id);
  }
}
