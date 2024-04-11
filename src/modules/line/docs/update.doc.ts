import { ApiResponseOptions } from '@nestjs/swagger';

export const successfullUpdateLine: ApiResponseOptions = {
  status: 200,
  schema: {
    example: {
      updateData: {
        value: '50',
      },
      data: {
        id: '4b2e660e-a62c-49ad-841b-c3c6644319fa',
        deletedAt: null,
        createdAt: '2024-03-18T11:33:10.881Z',
        updatedAt: '2024-04-01T17:03:13.111Z',
        imageLink: 'http://teste.com',
        value: '50',
        weightLine: '10',
        pointsPerWeightQt: '5',
        weightPerPoints: '5',
        hoursPointsQt: '5',
        minutesPerPoints: '60',
        otherInformations: 'informação teste 2',
        lineType: {
          id: 'b6cf8e07-82b8-4ce5-a21d-666429545a94',
          deletedAt: null,
          createdAt: '2024-03-18T11:31:28.120Z',
          updatedAt: '2024-03-18T19:40:44.240Z',
          name: 'type atualizado',
        },
        lineMark: {
          id: '20c5f6f0-8851-4e6b-9798-7b9259fde70c',
          deletedAt: null,
          createdAt: '2024-03-18T11:31:38.652Z',
          updatedAt: '2024-03-18T11:31:38.652Z',
          name: 'marca 1',
        },
      },
      message: 'Linha atualizada com sucesso.',
    },
  },
};
