import { Test, TestingModule } from '@nestjs/testing';
import { OtherMaterialService } from './other-material.service';

describe('OtherMaterialService', () => {
  let service: OtherMaterialService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OtherMaterialService],
    }).compile();

    service = module.get<OtherMaterialService>(OtherMaterialService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
