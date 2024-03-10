import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OtherMaterialService } from './other-material.service';
import { CreateOtherMaterialDto } from './dto/create-other-material.dto';
import { UpdateOtherMaterialDto } from './dto/update-other-material.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('other-material')
@Controller('other-material')
export class OtherMaterialController {
  constructor(private readonly otherMaterialService: OtherMaterialService) {}

  @Post()
  async create(@Body() createOtherMaterialDto: CreateOtherMaterialDto) {
    return await this.otherMaterialService.create(createOtherMaterialDto);
  }

  @Get()
  async findAll() {
    return await this.otherMaterialService.findAll();
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
