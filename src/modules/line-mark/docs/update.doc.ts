import { ApiResponseOptions } from "@nestjs/swagger";

export const successfullUpdateLineMark: ApiResponseOptions = {
    status: 200,
    schema: {
        properties: {
            updateData: {
                example: {
                    name: 'Nome Atualizado'
                } 
            },
            data: {
                example:{
                    id: "b6cf8e07-82b8-4ce5-a21d-666429545a94",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                    name: "Nome Atualizado"
                }
            },
            message: {
                example: 'Marca atualizada com sucesso.'
            }
        }
    }
}