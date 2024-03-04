import { Injectable } from '@nestjs/common';
import { CreateOtherMaterialDto } from './dto/create-other-material.dto';
import { UpdateOtherMaterialDto } from './dto/update-other-material.dto';

@Injectable()
export class OtherMaterialService {
  create(createOtherMaterialDto: CreateOtherMaterialDto) {
    return 'This action adds a new otherMaterial';
  }

  findAll() {
    return `This action returns all otherMaterial`;
  }

  findOne(id: number) {
    return `This action returns a #${id} otherMaterial`;
  }

  update(id: number, updateOtherMaterialDto: UpdateOtherMaterialDto) {
    return `This action updates a #${id} otherMaterial`;
  }

  remove(id: number) {
    return `This action removes a #${id} otherMaterial`;
  }
}
