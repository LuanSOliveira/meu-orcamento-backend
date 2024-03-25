import { ApiResponseOptions } from "@nestjs/swagger";

export const successfulFindAllLine: ApiResponseOptions = {
    status: 200,
    schema: {
        items: {
            properties:{
                id: {
                    example: ['e40771c5-2e06-44b5-ac54-79743e558f4b']
                },
            }
        },
        // properties: {
        //     meta:{
        //         example:{
                    
        //         }
        //     }
        // }
    }
    
}

export const successfulFindOneLine: ApiResponseOptions = {
    status: 200,
    schema: {
        properties:{
            id: {
                type: 'string',
                example: 'e40771c5-2e06-44b5-ac54-79743e558f4b'
            },
            name: {
                type: 'string',
                example: 'Tipo Teste'
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