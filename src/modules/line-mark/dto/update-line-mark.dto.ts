import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class UpdateLineMarkDto {
    @ApiProperty({
        description: 'Nome da marca que será atualizada',
        example: 'Marca Atualizada',
    })
    @IsNotEmpty({message: 'O nome da marca é obrigatório'})
    name: string;
}
