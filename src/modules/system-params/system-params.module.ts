import { Module } from '@nestjs/common';
import { SystemParamsService } from './system-params.service';
import { SystemParamsController } from './system-params.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SystemParamEntity } from './entities/system-param.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SystemParamEntity])],
  controllers: [SystemParamsController],
  providers: [SystemParamsService],
})
export class SystemParamsModule {}
