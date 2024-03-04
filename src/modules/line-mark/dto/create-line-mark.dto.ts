import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class CreateLineMarkDto {
    @ApiProperty({
        description: 'Nome da marca que será criada',
        example: 'Marca Teste',
    })
    @IsNotEmpty({message: 'O nome da marca é obrigatório'})
    name: string
}
