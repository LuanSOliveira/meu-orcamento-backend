import { ApiResponseOptions } from '@nestjs/swagger';

export const successfulCreateLine: ApiResponseOptions = {
  status: 201,
  schema: {
    properties: {
      data: {
        example: {
          lineMark: {
            id: '004367bd-38b7-4133-88e2-debb333b3c32',
            deletedAt: null,
            createdAt: '2024-03-19T13:59:50.163Z',
            updatedAt: '2024-03-19T13:59:50.163Z',
            name: 'marca 2',
          },
          lineType: {
            id: 'f5a90511-b9db-4625-8a65-b58940513503',
            deletedAt: null,
            createdAt: '2024-03-19T13:59:29.925Z',
            updatedAt: '2024-03-19T13:59:29.925Z',
            name: 'tipo teste 2',
          },
          imageLink: 'http://teste.com',
          value: '5',
          weightLine: '10',
          pointsPerWeightQt: '5',
          weightPerPoints: '5',
          hoursPointsQt: '5',
          minutesPerPoints: '60',
          otherInformations: 'Teste 4',
          createdAt: '2024-03-23T14:13:41.661Z',
          updatedAt: '2024-03-23T14:13:41.661Z',
          id: 'ef69b00e-d556-472f-8f44-6cbcd9f9ef08',
          deletedAt: null,
        },
      },
      message: {
        example: 'Linha criada com sucesso.',
      },
    },
  },
};
