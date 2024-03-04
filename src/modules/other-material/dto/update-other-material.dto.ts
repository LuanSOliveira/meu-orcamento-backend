import { PartialType } from '@nestjs/swagger';
import { CreateOtherMaterialDto } from './create-other-material.dto';

export class UpdateOtherMaterialDto extends PartialType(CreateOtherMaterialDto) {}
