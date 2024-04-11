import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class UpdateSystemParamDto {
  @ApiProperty({
    description: 'Valor do salário mensal',
    example: '2500,00',
  })
  @IsOptional()
  salaryPerMonth: string;

  @ApiProperty({
    description: 'Valor de horas trabalhadas',
    example: '1',
  })
  @IsOptional()
  workingHoursPerMonth: string;

  @ApiProperty({
    description: 'Porcentagem de valor de lucro',
    example: '15',
  })
  @IsOptional()
  profit: string;
}
