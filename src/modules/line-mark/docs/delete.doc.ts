import { ApiResponseOptions } from "@nestjs/swagger";

export const successfulDeleteLineMark: ApiResponseOptions = {
    status: 200,
    schema: {
        properties: {
            data: {
                example: {
                    id: "b6cf8e07-82b8-4ce5-a21d-666429545a94",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                    name: "Nome"
                }
            },
            message: {
                example: 'Marca deletada com sucesso.'
            }
        }
    }
}