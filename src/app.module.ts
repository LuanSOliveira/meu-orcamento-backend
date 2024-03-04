import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostgresConfigService } from './config/postgres.config.service';
import { ConfigModule } from '@nestjs/config';
import { LineMarkModule } from './modules/line-mark/line-mark.module';
import { LineTypeModule } from './modules/line-type/line-type.module';
import { LineModule } from './modules/line/line.module';
import { OtherMaterialModule } from './modules/other-material/other-material.module';
import { SystemParamsModule } from './modules/system-params/system-params.module';
import { BudgetModule } from './modules/budget/budget.module';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useClass: PostgresConfigService,
      inject: [PostgresConfigService],
    }),
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    LineMarkModule,
    LineTypeModule,
    LineModule,
    OtherMaterialModule,
    SystemParamsModule,
    BudgetModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
