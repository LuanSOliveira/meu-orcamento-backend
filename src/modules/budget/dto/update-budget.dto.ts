import { ApiProperty } from "@nestjs/swagger";
import { IsOptional } from "class-validator";
import { LineEntity } from "src/modules/line/entities/line.entity";
import { OtherMaterialEntity } from "src/modules/other-material/entities/other-material.entity";

export class UpdateBudgetDto {
    @ApiProperty({
        description: 'Nome do Material',
        example: 'Teste',
    })
    @IsOptional()
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
    @IsOptional()
    lines: LineEntity[];

    @ApiProperty({
        description: 'Link de materiais extras',
        example: [],
    })
    @IsOptional()
    materials: OtherMaterialEntity[];

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
