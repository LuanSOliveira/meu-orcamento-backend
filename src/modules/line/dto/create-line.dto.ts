import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional } from 'class-validator';

export class CreateLineDto {
  @ApiProperty({
    description: 'Id da marca da linha que será atribuída',
    example: '123456',
  })
  @IsNotEmpty({ message: 'A Marca é obrigatória' })
  lineMark: string;

  @ApiProperty({
    description: 'Id do tipo da linha que será atribuído',
    example: '123456',
  })
  @IsNotEmpty({ message: 'O tipo é obrigatório' })
  lineType: string;

  @ApiProperty({
    description: 'Link da imagem da linha - opcional',
    example: 'http://imagemteste.com',
  })
  @IsOptional()
  imageLink: string;

  @ApiProperty({
    description: 'Valor do novelo',
    example: '30',
  })
  @IsNotEmpty({ message: 'O valor é obrigatório' })
  value: string;

  @ApiProperty({
    description: 'Peso do novelo em gramas',
    example: '125',
  })
  @IsNotEmpty({ message: 'As gramas do novelo são obrigatórias' })
  weightLine: string;

  @ApiProperty({
    description: 'Quantidade de pontos para medida de grama',
    example: '100',
  })
  @IsNotEmpty({
    message: 'A quantidade de pontos para as gramas é obrigatória',
  })
  pointsPerWeightQt: string;

  @ApiProperty({
    description: 'Quantidade de gramas dos pontos informados',
    example: '50',
  })
  @IsNotEmpty({ message: 'A quantidade de gramas é obrigatória' })
  weightPerPoints: string;

  @ApiProperty({
    description: 'Quantidade de pontos para a medida de minutos',
    example: '100',
  })
  @IsNotEmpty({ message: 'A quantidade de pontos para as horas é obrigatória' })
  hoursPointsQt: string;

  @ApiProperty({
    description: 'Quantidade de minutos para os pontos informados',
    example: '20',
  })
  @IsNotEmpty({ message: 'A quantidade de minutos é obrigatória' })
  minutesPerPoints: string;

  @ApiProperty({
    description: 'Informações adicionais para a linha',
    example: 'Informações de teste',
  })
  @IsOptional()
  otherInformations: string;
}
