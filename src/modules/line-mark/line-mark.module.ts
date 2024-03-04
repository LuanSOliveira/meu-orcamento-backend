import { Module } from '@nestjs/common';
import { LineMarkService } from './line-mark.service';
import { LineMarkController } from './line-mark.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LineMarkEntity } from './entities/line-mark.entity';

@Module({
  imports: [TypeOrmModule.forFeature([LineMarkEntity])],
  controllers: [LineMarkController],
  providers: [LineMarkService],
})
export class LineMarkModule {}
