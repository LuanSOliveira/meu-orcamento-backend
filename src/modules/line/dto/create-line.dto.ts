import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsOptional } from "class-validator";
import { LineMarkEntity } from "src/modules/line-mark/entities/line-mark.entity";
import { LineTypeEntity } from "src/modules/line-type/entities/line-type.entity";

export class CreateLineDto {
    
    @ApiProperty({
        description: 'Marca da linha que será atribuída',
        example: {
            id: "123456",
            name: "teste"
        },
    })
    @IsNotEmpty({message: 'A Marca é obrigatória'})
    lineMark: LineMarkEntity;

    @ApiProperty({
        description: 'Tipo da linha que será atribuída',
        example: {
            id: "123456",
            name: "teste"
        },
    })
    @IsNotEmpty({message: 'O tipo é obrigatório'})
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
    @IsNotEmpty({message: 'O valor é obrigatório'})
    value: number;

    @ApiProperty({
        description: 'Peso do novelo em gramas',
        example: 125,
    })
    @IsNotEmpty({message: 'As gramas do novelo são obrigatórias'})
    weightLine: number;

    @ApiProperty({
        description: 'Quantidade de pontos para medida de grama',
        example: 100,
    })
    @IsNotEmpty({message: 'A quantidade de pontos para as gramas é obrigatória'})
    pointsPerWeightQt: number;

    @ApiProperty({
        description: 'Quantidade de gramas dos pontos informados',
        example: 50,
    })
    @IsNotEmpty({message: 'A quantidade de gramas é obrigatória'})
    weightPerPoints: number;

    @ApiProperty({
        description: 'Quantidade de pontos para a medida de minutos',
        example: 100,
    })
    @IsNotEmpty({message: 'A quantidade de pontos para as horas é obrigatória'})
    hoursPointsQt: number;

    @ApiProperty({
        description: 'Quantidade de minutos para os pontos informados',
        example: 20,
    })
    @IsNotEmpty({message: 'A quantidade de minutos é obrigatória'})
    minutesPerPoints: number;

    @ApiProperty({
        description: 'Informações adicionais para a linha',
        example: 'Informações de teste',
    })
    @IsOptional()
    otherInformations: string;
}
