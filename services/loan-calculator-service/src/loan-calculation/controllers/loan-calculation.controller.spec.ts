import { Test, TestingModule } from '@nestjs/testing';
import { LoanCalculationController } from '../controllers/loan-calculation.controller';

describe('LoanCalculationController', () => {
  let controller: LoanCalculationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LoanCalculationController],
    }).compile();

    controller = module.get<LoanCalculationController>(
      LoanCalculationController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
