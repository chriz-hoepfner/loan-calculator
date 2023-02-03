import { Injectable } from '@nestjs/common';

import {
  ILoanCalculationRequest,
  ILoanCalculationResult,
  IMonthlyPayment,
  IYearlyPayment,
} from '@s-com/types';

@Injectable()
export class LoanCalculationService {
  calculate(request: ILoanCalculationRequest): ILoanCalculationResult {
    const {
      amount,
      amortizationRate,
      interestRate,
      fixedInterestPeriodInYears,
    } = request;

    const monthlyPayment = this.getMonthlyPayment({
      amount,
      interestRate,
      amortizationRate,
    });

    const { monthlyPayments, restAmount } =
      this.getMonthlyPaymentsAndRestAmount(request, monthlyPayment);

    const yearlyPayments = this.aggregateYearlyPayments(
      amount,
      monthlyPayments,
    );

    return {
      amount,
      fixedInterestPeriodInYears,
      amortizationRate,
      interestRate,
      monthlyPayment,
      restAmount,
      yearlyPayments,
    };
  }

  private getMonthlyPayment({
    amount,
    interestRate,
    amortizationRate,
  }: {
    amount: number;
    interestRate: number;
    amortizationRate: number;
  }) {
    const initialInterest = (amount * interestRate) / 12;
    const initialAmortization = (amount * amortizationRate) / 12;

    return Math.round(initialInterest + initialAmortization);
  }

  private getMonthlyPaymentsAndRestAmount(
    {
      amount,
      interestRate,
      fixedInterestPeriodInYears,
    }: ILoanCalculationRequest,
    monthlyPayment: number,
  ) {
    const monthlyPayments: IMonthlyPayment[] = [];

    let restAmount = amount;
    let fixedInterestPeriodInMonths =
      fixedInterestPeriodInYears !== -1 ? fixedInterestPeriodInYears * 12 : -1;

    while (fixedInterestPeriodInMonths !== 0 && restAmount > 0) {
      const interest = Math.round((restAmount * interestRate) / 12);
      const amortization = Math.min(restAmount, monthlyPayment - interest);

      restAmount -= amortization;
      fixedInterestPeriodInMonths--;

      monthlyPayments.push({
        year: Math.floor(monthlyPayments.length / 12) + 1,
        month: (monthlyPayments.length % 12) + 1,
        payment: interest + amortization,
        interest,
        amortization,
        restAmount,
      });
    }

    return {
      monthlyPayments,
      restAmount,
    };
  }

  private aggregateYearlyPayments(
    amount: number,
    monthlyPayments: IMonthlyPayment[],
  ) {
    let totalRestAmount = amount;

    return monthlyPayments.reduce<IYearlyPayment[]>(
      (
        yearlyPayments,
        { year, amortization, interest, month, payment, restAmount },
      ) => {
        const index = year - 1;

        if (!yearlyPayments[index]) {
          yearlyPayments[index] = {
            year,
            payment: 0,
            interest: 0,
            amortization: 0,
            monthlyPayments: [],
            restAmount: totalRestAmount,
          };
        }

        totalRestAmount -= amortization;

        yearlyPayments[index] = {
          ...yearlyPayments[index],
          payment: yearlyPayments[index].payment + payment,
          interest: yearlyPayments[index].interest + interest,
          amortization: yearlyPayments[index].amortization + amortization,
          restAmount: totalRestAmount,
          monthlyPayments: [
            ...yearlyPayments[index].monthlyPayments,
            {
              year,
              amortization,
              interest,
              month,
              payment,
              restAmount,
            },
          ],
        };

        return yearlyPayments;
      },
      [],
    );
  }
}
