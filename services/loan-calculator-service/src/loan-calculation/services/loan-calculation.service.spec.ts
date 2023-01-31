import { Test, TestingModule } from '@nestjs/testing';
import { LoanCalculationService } from './loan-calculation.service';

describe('LoanCalculationService', () => {
  let service: LoanCalculationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LoanCalculationService],
    }).compile();

    service = module.get<LoanCalculationService>(LoanCalculationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
