import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateSystemParamDto {
  @ApiProperty({
    description: 'Valor do salário mensal',
    example: '2500,00',
  })
  @IsNotEmpty({ message: 'O valor do salário mensal é obrigatório' })
  salaryPerMonth: string;

  @ApiProperty({
    description: 'Valor de horas trabalhadas',
    example: '1',
  })
  @IsNotEmpty({ message: 'A quantidade de horas é obrigatório' })
  workingHoursPerMonth: string;

  @ApiProperty({
    description: 'Porcentagem de valor de lucro',
    example: '15',
  })
  @IsNotEmpty({ message: 'A porcentagem de lucro pe obrigatória' })
  profit: string;
}
