import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { LineService } from './line.service';
import { CreateLineDto } from './dto/create-line.dto';
import { UpdateLineDto } from './dto/update-line.dto';
import { ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { successfulCreateLine, successfulDeleteLine, successfulFindAllLine, successfulFindOneLine, successfullUpdateLine } from './docs';

enum FilterByType {
  Mark = 'mark',
  Type = 'type',
}

@ApiTags('line')
@Controller('line')
export class LineController {
  constructor(private readonly lineService: LineService) {}

  @ApiResponse(successfulCreateLine)
  @Post()
  async create(@Body() createLineDto: CreateLineDto) {
    return await this.lineService.create(createLineDto)
  }

  @ApiResponse(successfulFindAllLine)
  @Get()
  @ApiQuery({name: 'page', required: false, type: Number})
  @ApiQuery({name: 'limit', required: false, type: Number})
  @ApiQuery({name: 'filter', required: false, type: String})
  @ApiQuery({name: 'filterBy', required: false, type: 'string', enum: FilterByType})
  async findAll(
    @Query('page') page = 1, 
    @Query('limit') limit = 15, 
    @Query('filter') filter: string, 
    @Query('filterBy') filterBy: 'mark' | 'type' = 'mark'
  ) {
    limit = (limit > 15) ? 15 : limit
    return await this.lineService.findAll({page, limit}, filter, filterBy);
  }

  @ApiResponse(successfulFindOneLine)
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.lineService.findOne(id);
  }

  @ApiResponse(successfullUpdateLine)
  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateLineDto: UpdateLineDto) {
    return await this.lineService.update(id, updateLineDto)
  }

  @ApiResponse(successfulDeleteLine)
  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.lineService.remove(id)
  }
}
