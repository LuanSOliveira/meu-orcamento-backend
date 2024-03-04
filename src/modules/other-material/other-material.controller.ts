import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OtherMaterialService } from './other-material.service';
import { CreateOtherMaterialDto } from './dto/create-other-material.dto';
import { UpdateOtherMaterialDto } from './dto/update-other-material.dto';

@Controller('other-material')
export class OtherMaterialController {
  constructor(private readonly otherMaterialService: OtherMaterialService) {}

  @Post()
  create(@Body() createOtherMaterialDto: CreateOtherMaterialDto) {
    return this.otherMaterialService.create(createOtherMaterialDto);
  }

  @Get()
  findAll() {
    return this.otherMaterialService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.otherMaterialService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOtherMaterialDto: UpdateOtherMaterialDto) {
    return this.otherMaterialService.update(+id, updateOtherMaterialDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.otherMaterialService.remove(+id);
  }
}
