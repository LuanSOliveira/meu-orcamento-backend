import { Test, TestingModule } from '@nestjs/testing';
import { OtherMaterialController } from './other-material.controller';
import { OtherMaterialService } from './other-material.service';

describe('OtherMaterialController', () => {
  let controller: OtherMaterialController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OtherMaterialController],
      providers: [OtherMaterialService],
    }).compile();

    controller = module.get<OtherMaterialController>(OtherMaterialController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
