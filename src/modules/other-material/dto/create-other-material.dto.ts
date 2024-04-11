import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional } from 'class-validator';

export class CreateOtherMaterialDto {
  @ApiProperty({
    description: 'Nome do Material',
    example: 'Teste',
  })
  @IsNotEmpty({ message: 'O nome é obrigatório' })
  name: string;

  @ApiProperty({
    description: 'Tipo do material',
    example: 'unit',
  })
  @IsNotEmpty({ message: 'O tipo é obrigatório' })
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
  @IsNotEmpty({ message: 'O valor é obrigatório' })
  value: string;

  @ApiProperty({
    description: 'Peso do material',
    example: '30',
  })
  @IsNotEmpty({ message: 'O valor é obrigatório' })
  weight: string;

  @ApiProperty({
    description: 'Informações adicionais para o material',
    example: 'Informações de teste',
  })
  @IsOptional()
  otherInformations: string;
}
