import { ApiProperty } from "@nestjs/swagger";
import { IsOptional } from "class-validator";
import { LineMarkEntity } from "src/modules/line-mark/entities/line-mark.entity";
import { LineTypeEntity } from "src/modules/line-type/entities/line-type.entity";

export class UpdateLineDto {
    
    @ApiProperty({
        description: 'Marca da linha que será atribuída',
        example: {
            id: "123456",
            name: "teste"
        },
    })
    @IsOptional()
    lineMark: LineMarkEntity;

    @ApiProperty({
        description: 'Tipo da linha que será atribuída',
        example: {
            id: "123456",
            name: "teste"
        },
    })
    @IsOptional()
    lineType: LineTypeEntity;

    @ApiProperty({
        description: 'Link da imagem da linha - opcional',
        example: 'http://imagemteste.com',
    })
    @IsOptional()
    imageLink: string;

    @ApiProperty({
        description: 'Valor do novelo',
        example: 30,
    })
    @IsOptional()
    value: number;

    @ApiProperty({
        description: 'Peso do novelo em gramas',
        example: 125,
    })
    @IsOptional()
    weightLine: number;

    @ApiProperty({
        description: 'Quantidade de pontos para medida de grama',
        example: 100,
    })
    @IsOptional()
    pointsPerWeightQt: number;

    @ApiProperty({
        description: 'Quantidade de gramas dos pontos informados',
        example: 50,
    })
    @IsOptional()
    weightPerPoints: number;

    @ApiProperty({
        description: 'Quantidade de pontos para a medida de minutos',
        example: 100,
    })
    @IsOptional()
    hoursPointsQt: number;

    @ApiProperty({
        description: 'Quantidade de minutos para os pontos informados',
        example: 20,
    })
    @IsOptional()
    minutesPerPoints: number;

    @ApiProperty({
        description: 'Informações adicionais para a linha',
        example: 'Informações de teste',
    })
    @IsOptional()
    otherInformations: string;
}
