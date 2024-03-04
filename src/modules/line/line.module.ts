import { Module } from '@nestjs/common';
import { LineService } from './line.service';
import { LineController } from './line.controller';
import { LineEntity } from './entities/line.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LineTypeEntity } from '../line-type/entities/line-type.entity';
import { LineMarkEntity } from '../line-mark/entities/line-mark.entity';

@Module({
  imports: [TypeOrmModule.forFeature([LineEntity, LineTypeEntity, LineMarkEntity])],
  controllers: [LineController],
  providers: [LineService],
})
export class LineModule {}
