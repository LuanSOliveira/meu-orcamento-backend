import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class UpdateLineTypeDto {
    @ApiProperty({
        description: 'Nome do tipo que será criada',
        example: 'Tipo Teste',
    })
    @IsNotEmpty({message: 'O nome do tipo é obrigatório'})
    name: string
}
