import { Module } from '@nestjs/common';
import { OtherMaterialService } from './other-material.service';
import { OtherMaterialController } from './other-material.controller';

@Module({
  controllers: [OtherMaterialController],
  providers: [OtherMaterialService],
})
export class OtherMaterialModule {}
