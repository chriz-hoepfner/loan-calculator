import { z } from 'zod';

import { ILoanCalculationRequest } from './types';

const schemaForType =
  <T>() =>
  <S extends z.ZodType<T, any, any>>(arg: S) => {
    return arg;
  };

export const LoanCalculationUISchema = schemaForType<ILoanCalculationRequest>()(
  z.object({
    amount: z.number().positive(),
    interestRate: z.number().positive(),
    fixedInterestPeriodInYears: z.literal(-1).or(z.number().min(1).max(30)),
    amortizationRate: z.number().positive(),
  }),
);

export const LoanCalculationRequestSchema =
  schemaForType<ILoanCalculationRequest>()(
    z.object({
      amount: z.number().positive(),
      interestRate: z.number().positive(),
      fixedInterestPeriodInYears: z.literal(-1).or(z.number().min(1).max(30)),
      amortizationRate: z.number().positive(),
    }),
  );
