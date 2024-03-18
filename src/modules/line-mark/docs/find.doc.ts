import { ApiResponseOptions } from "@nestjs/swagger";

export const successfulFindAllLineMark: ApiResponseOptions = {
    status: 200,
    schema: {
        items: {
            properties:{
                id: {
                    type: 'string',
                    example: 'e40771c5-2e06-44b5-ac54-79743e558f4b'
                },
                name: {
                    type: 'string',
                    example: 'Marca Teste'
                },
                createdAt: {
                    type: 'date',
                    example: new Date()
                },
                updatedAt: {
                    type: 'date',
                    example: new Date()
                }
            }
        }
    }
}

export const successfulFindOneLineMark: ApiResponseOptions = {
    status: 200,
    schema: {
        properties:{
            id: {
                type: 'string',
                example: 'e40771c5-2e06-44b5-ac54-79743e558f4b'
            },
            name: {
                type: 'string',
                example: 'Marca Teste'
            },
            createdAt: {
                type: 'date',
                example: new Date()
            },
            updatedAt: {
                type: 'date',
                example: new Date()
            }
        }
    }
}