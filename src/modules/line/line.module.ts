import { Module } from '@nestjs/common';
import { LineService } from './line.service';
import { LineController } from './line.controller';
import { LineEntity } from './entities/line.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([LineEntity])],
  controllers: [LineController],
  providers: [LineService],
})
export class LineModule {}
