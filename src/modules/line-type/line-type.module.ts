import { Module } from '@nestjs/common';
import { LineTypeService } from './line-type.service';
import { LineTypeController } from './line-type.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LineTypeEntity } from './entities/line-type.entity';

@Module({
  imports: [TypeOrmModule.forFeature([LineTypeEntity])],
  controllers: [LineTypeController],
  providers: [LineTypeService],
})
export class LineTypeModule {}
