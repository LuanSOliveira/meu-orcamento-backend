import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsOptional } from "class-validator";

export class CreateBudgetDto {
    @ApiProperty({
        description: 'Nome do Material',
        example: 'Teste',
    })
    @IsNotEmpty({message: 'O nome é obrigatório.'})
    name: string;

    @ApiProperty({
        description: 'Link da receita - opcional',
        example: 'http://teste.com',
    })
    @IsOptional()
    linkRecipe: string;

    @ApiProperty({
        description: 'Lista de linhas',
        example: [],
    })
    @IsNotEmpty({message: 'O orçamento deve ter pelo menos 1 linha.'})
    lines: string[];

    @ApiProperty({
        description: 'Link de materiais extras',
        example: [],
    })
    @IsOptional()
    materials: string[];

    @ApiProperty({
        description: 'Quantidade de horas adicionais',
        example: 1,
    })
    @IsOptional()
    extraTime: number;

    @ApiProperty({
        description: 'Valor do Frete',
        example: 1,
    })
    @IsOptional()
    freight: number;
}
