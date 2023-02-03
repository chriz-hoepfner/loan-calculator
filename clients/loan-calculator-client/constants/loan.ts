import { ILoanCalculationRequest } from '@s-com/types';

export const DEFAULT_VALUES: ILoanCalculationRequest = {
  amount: 250000,
  interestRate: 2,
  fixedInterestPeriodInYears: 10,
  amortizationRate: 3,
};
