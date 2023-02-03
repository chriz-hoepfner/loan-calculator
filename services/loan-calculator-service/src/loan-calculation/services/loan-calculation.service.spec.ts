import { Test, TestingModule } from '@nestjs/testing';

import { LoanCalculationResult } from '../dto/LoanCalculationResult.dto';
import { LoanCalculationService } from './loan-calculation.service';

const BASE_REQUEST = {
  amortizationRate: 0.5,
  amount: 25000000,
  interestRate: 0.02,
};

describe('LoanCalculationService', () => {
  let service: LoanCalculationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LoanCalculationService],
    }).compile();

    service = module.get<LoanCalculationService>(LoanCalculationService);
  });

  it('should calculate with fixed interest period', () => {
    const request = {
      ...BASE_REQUEST,
      fixedInterestPeriodInYears: 1,
    };

    const result = service.calculate(request);
    expect(result).toMatchObject({
      ...request,
      restAmount: 12384784,
      monthlyPayment: 1083333,
      yearlyPayments: [
        {
          year: 1,
          interest: 384780,
          amortization: 12615216,
          restAmount: 12384784,
          payment: 12999996,
          monthlyPayments: [
            {
              payment: 1083333,
              interest: 41667,
              amortization: 1041666,
              restAmount: 23958334,
            },
            {
              payment: 1083333,
              interest: 39931,
              amortization: 1043402,
              restAmount: 22914932,
            },
            {
              payment: 1083333,
              interest: 38192,
              amortization: 1045141,
              restAmount: 21869791,
            },
            {
              payment: 1083333,
              interest: 36450,
              amortization: 1046883,
              restAmount: 20822908,
            },
            {
              payment: 1083333,
              interest: 34705,
              amortization: 1048628,
              restAmount: 19774280,
            },
            {
              payment: 1083333,
              interest: 32957,
              amortization: 1050376,
              restAmount: 18723904,
            },
            {
              payment: 1083333,
              interest: 31207,
              amortization: 1052126,
              restAmount: 17671778,
            },
            {
              payment: 1083333,
              interest: 29453,
              amortization: 1053880,
              restAmount: 16617898,
            },
            {
              payment: 1083333,
              interest: 27696,
              amortization: 1055637,
              restAmount: 15562261,
            },
            {
              payment: 1083333,
              interest: 25937,
              amortization: 1057396,
              restAmount: 14504865,
            },
            {
              payment: 1083333,
              interest: 24175,
              amortization: 1059158,
              restAmount: 13445707,
            },
            {
              payment: 1083333,
              interest: 22410,
              amortization: 1060923,
              restAmount: 12384784,
            },
          ],
        },
      ],
    } as LoanCalculationResult);
  });

  it('should calculate with unlimited interest period', () => {
    const request = {
      ...BASE_REQUEST,
      fixedInterestPeriodInYears: -1,
    };

    const result = service.calculate(request);
    expect(result).toMatchObject({
      ...request,
      restAmount: 0,
      monthlyPayment: 1083333,
      yearlyPayments: [
        {
          year: 1,
          interest: 384780,
          amortization: 12615216,
          restAmount: 12384784,
          payment: 12999996,
          monthlyPayments: [
            {
              month: 1,
              payment: 1083333,
              interest: 41667,
              amortization: 1041666,
              restAmount: 23958334,
            },
            {
              month: 2,
              payment: 1083333,
              interest: 39931,
              amortization: 1043402,
              restAmount: 22914932,
            },
            {
              month: 3,
              payment: 1083333,
              interest: 38192,
              amortization: 1045141,
              restAmount: 21869791,
            },
            {
              month: 4,
              payment: 1083333,
              interest: 36450,
              amortization: 1046883,
              restAmount: 20822908,
            },
            {
              month: 5,
              payment: 1083333,
              interest: 34705,
              amortization: 1048628,
              restAmount: 19774280,
            },
            {
              month: 6,
              payment: 1083333,
              interest: 32957,
              amortization: 1050376,
              restAmount: 18723904,
            },
            {
              month: 7,
              payment: 1083333,
              interest: 31207,
              amortization: 1052126,
              restAmount: 17671778,
            },
            {
              month: 8,
              payment: 1083333,
              interest: 29453,
              amortization: 1053880,
              restAmount: 16617898,
            },
            {
              month: 9,
              payment: 1083333,
              interest: 27696,
              amortization: 1055637,
              restAmount: 15562261,
            },
            {
              month: 10,
              payment: 1083333,
              interest: 25937,
              amortization: 1057396,
              restAmount: 14504865,
            },
            {
              month: 11,
              payment: 1083333,
              interest: 24175,
              amortization: 1059158,
              restAmount: 13445707,
            },
            {
              month: 12,
              payment: 1083333,
              interest: 22410,
              amortization: 1060923,
              restAmount: 12384784,
            },
          ],
        },
        {
          year: 2,
          interest: 130146,
          amortization: 12384784,
          restAmount: 0,
          payment: 12514930,
          monthlyPayments: [
            {
              month: 1,
              payment: 1083333,
              interest: 20641,
              amortization: 1062692,
              restAmount: 11322092,
            },
            {
              month: 2,
              payment: 1083333,
              interest: 18870,
              amortization: 1064463,
              restAmount: 10257629,
            },
            {
              month: 3,
              payment: 1083333,
              interest: 17096,
              amortization: 1066237,
              restAmount: 9191392,
            },
            {
              month: 4,
              payment: 1083333,
              interest: 15319,
              amortization: 1068014,
              restAmount: 8123378,
            },
            {
              month: 5,
              payment: 1083333,
              interest: 13539,
              amortization: 1069794,
              restAmount: 7053584,
            },
            {
              month: 6,
              payment: 1083333,
              interest: 11756,
              amortization: 1071577,
              restAmount: 5982007,
            },
            {
              month: 7,
              payment: 1083333,
              interest: 9970,
              amortization: 1073363,
              restAmount: 4908644,
            },
            {
              month: 8,
              payment: 1083333,
              interest: 8181,
              amortization: 1075152,
              restAmount: 3833492,
            },
            {
              month: 9,
              payment: 1083333,
              interest: 6389,
              amortization: 1076944,
              restAmount: 2756548,
            },
            {
              month: 10,
              payment: 1083333,
              interest: 4594,
              amortization: 1078739,
              restAmount: 1677809,
            },
            {
              month: 11,
              payment: 1083333,
              interest: 2796,
              amortization: 1080537,
              restAmount: 597272,
            },
            {
              month: 12,
              payment: 598267,
              interest: 995,
              amortization: 597272,
              restAmount: 0,
            },
          ],
        },
      ],
    } as LoanCalculationResult);
  });
});
