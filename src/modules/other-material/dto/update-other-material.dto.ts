import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class UpdateOtherMaterialDto {
  @ApiProperty({
    description: 'Nome do Material',
    example: 'Teste',
  })
  @IsOptional()
  name: string;

  @ApiProperty({
    description: 'Tipo do material',
    example: 'unit',
  })
  @IsOptional()
  type: string;

  @ApiProperty({
    description: 'Link da imagem do material - opcional',
    example: 'http://imagemteste.com',
  })
  @IsOptional()
  imageLink: string;

  @ApiProperty({
    description: 'Valor do material',
    example: '30',
  })
  @IsOptional()
  value: string;

  @ApiProperty({
    description: 'Peso do material',
    example: '30',
  })
  @IsOptional()
  weight: string;

  @ApiProperty({
    description: 'Informações adicionais para o material',
    example: 'Informações de teste',
  })
  @IsOptional()
  otherInformations: string;
}
