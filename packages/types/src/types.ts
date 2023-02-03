export interface ILoanCalculationRequest {
  amount: number;
  interestRate: number;
  fixedInterestPeriodInYears: number;
  amortizationRate: number;
}

export interface ILoanCalculationResult extends ILoanCalculationRequest {
  monthlyPayment: number;
  restAmount: number;
  yearlyPayments: IYearlyPayment[];
}

interface Payment {
  year: number;
  payment: number;
  interest: number;
  amortization: number;
}

export interface IYearlyPayment extends Payment {
  restAmount: number;
  monthlyPayments: IMonthlyPayment[];
}

export interface IMonthlyPayment extends Payment {
  month: number;
  restAmount: number;
}
