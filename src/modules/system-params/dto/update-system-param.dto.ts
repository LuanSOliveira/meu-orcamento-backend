import { ApiProperty } from "@nestjs/swagger";
import { IsOptional } from "class-validator";

export class UpdateSystemParamDto {
    @ApiProperty({
        description: 'Valor do salário mensal',
        example: 2500,
    })
    @IsOptional()
    salaryPerMonth: number;

    @ApiProperty({
        description: 'Valor de horas trabalhadas',
        example: 1,
    })
    @IsOptional()
    workingHoursPerMonth: number;

    @ApiProperty({
        description: 'Porcentagem de valor de lucro',
        example: 15,
    })
    @IsOptional()
    profit: number;
}
