import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class UpdateLineDto {
  @ApiProperty({
    description: 'Id da marca da linha que será atribuída',
    example: '123456',
  })
  @IsOptional()
  lineMark: string;

  @ApiProperty({
    description: 'Id do tipo da linha que será atribuído',
    example: '123456',
  })
  @IsOptional()
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
  @IsOptional()
  value: string;

  @ApiProperty({
    description: 'Peso do novelo em gramas',
    example: '125',
  })
  @IsOptional()
  weightLine: string;

  @ApiProperty({
    description: 'Quantidade de pontos para medida de grama',
    example: '100',
  })
  @IsOptional()
  pointsPerWeightQt: string;

  @ApiProperty({
    description: 'Quantidade de gramas dos pontos informados',
    example: '50',
  })
  @IsOptional()
  weightPerPoints: string;

  @ApiProperty({
    description: 'Quantidade de pontos para a medida de minutos',
    example: '100',
  })
  @IsOptional()
  hoursPointsQt: string;

  @ApiProperty({
    description: 'Quantidade de minutos para os pontos informados',
    example: '20',
  })
  @IsOptional()
  minutesPerPoints: string;

  @ApiProperty({
    description: 'Informações adicionais para a linha',
    example: 'Informações de teste',
  })
  @IsOptional()
  otherInformations: string;
}
