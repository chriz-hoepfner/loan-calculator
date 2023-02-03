import { BadRequestException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';

import { LoanCalculationRequest } from '../dto/LoanCalculationRequest.dto';
import { LoanCalculationResult } from '../dto/LoanCalculationResult.dto';
import { LoanCalculationService } from '../services/loan-calculation.service';
import { LoanCalculationController } from './loan-calculation.controller';

const BASE_REQUEST: LoanCalculationRequest = {
  amount: 1,
  amortizationRate: 1,
  interestRate: 1,
  fixedInterestPeriodInYears: 1,
};

describe('LoanCalculationController', () => {
  let loanCalculationController: LoanCalculationController;
  let loanCalculationService: LoanCalculationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LoanCalculationController],
      providers: [LoanCalculationService],
    }).compile();

    loanCalculationController = module.get<LoanCalculationController>(
      LoanCalculationController,
    );

    loanCalculationService = module.get<LoanCalculationService>(
      LoanCalculationService,
    );
  });

  it('should throw a BadRequestException for invalid amount parameter', async () => {
    expect(() =>
      loanCalculationController.calculate({ ...BASE_REQUEST, amount: 0 }),
    ).toThrow(BadRequestException);

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { amount, ...requestWithout } = BASE_REQUEST;
    expect(() =>
      loanCalculationController.calculate(
        requestWithout as unknown as LoanCalculationRequest,
      ),
    ).toThrow(BadRequestException);
  });

  it('should throw a BadRequestException for invalid interestRate parameter', async () => {
    expect(() =>
      loanCalculationController.calculate({ ...BASE_REQUEST, interestRate: 0 }),
    ).toThrow(BadRequestException);

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { interestRate, ...requestWithout } = BASE_REQUEST;
    expect(() =>
      loanCalculationController.calculate(
        requestWithout as unknown as LoanCalculationRequest,
      ),
    ).toThrow(BadRequestException);
  });

  it('should throw a BadRequestException for invalid fixedInterestPeriodInYears parameter', async () => {
    expect(() =>
      loanCalculationController.calculate({
        ...BASE_REQUEST,
        fixedInterestPeriodInYears: 0,
      }),
    ).toThrow(BadRequestException);

    expect(() =>
      loanCalculationController.calculate({
        ...BASE_REQUEST,
        fixedInterestPeriodInYears: 31,
      }),
    ).toThrow(BadRequestException);

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { fixedInterestPeriodInYears, ...requestWithout } = BASE_REQUEST;
    expect(() =>
      loanCalculationController.calculate(
        requestWithout as unknown as LoanCalculationRequest,
      ),
    ).toThrow(BadRequestException);
  });

  it('should throw a BadRequestException for invalid amortizationRate parameter', async () => {
    expect(() =>
      loanCalculationController.calculate({
        ...BASE_REQUEST,
        amortizationRate: 0,
      }),
    ).toThrow(BadRequestException);

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { amortizationRate, ...requestWithout } = BASE_REQUEST;
    expect(() =>
      loanCalculationController.calculate(
        requestWithout as unknown as LoanCalculationRequest,
      ),
    ).toThrow(BadRequestException);
  });

  it('should return a calculation result for valid input', async () => {
    const mockResult: LoanCalculationResult = {
      ...BASE_REQUEST,
      monthlyPayment: 2125000,
      yearlyPayments: [],
      restAmount: 0,
    };

    jest
      .spyOn(loanCalculationService, 'calculate')
      .mockImplementation(() => mockResult);

    const result = await loanCalculationController.calculate(BASE_REQUEST);
    expect(result).toEqual(mockResult);
  });
});
