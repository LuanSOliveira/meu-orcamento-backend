import { Module } from '@nestjs/common';
import { OtherMaterialService } from './other-material.service';
import { OtherMaterialController } from './other-material.controller';
import { OtherMaterialEntity } from './entities/other-material.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([OtherMaterialEntity])],
  controllers: [OtherMaterialController],
  providers: [OtherMaterialService],
})
export class OtherMaterialModule {}
