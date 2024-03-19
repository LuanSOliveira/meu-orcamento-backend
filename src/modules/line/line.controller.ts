import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { LineService } from './line.service';
import { CreateLineDto } from './dto/create-line.dto';
import { UpdateLineDto } from './dto/update-line.dto';
import { ApiQuery, ApiTags } from '@nestjs/swagger';

enum FilterByType {
  Mark = 'mark',
  Type = 'type',
}

@ApiTags('line')
@Controller('line')
export class LineController {
  constructor(private readonly lineService: LineService) {}

  @Post()
  async create(@Body() createLineDto: CreateLineDto) {
    return await this.lineService.create(createLineDto)
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
    @Query('filterBy') filterBy: 'mark' | 'type'
  ) {
    limit = (limit > 15) ? 15 : limit
    return await this.lineService.findAll({page, limit}, filter, filterBy);
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
