import { ApiProperty } from '@nestjs/swagger';

import { ILoanCalculationRequest } from '@s-com/types';

export class LoanCalculationRequest implements ILoanCalculationRequest {
  @ApiProperty({
    example: '25000000',
    description: 'Positive integer value. Amount in cents.',
  })
  amount: number;

  @ApiProperty({
    example: '0.02',
    description: 'Percentage as positive float value (0.02 = 2%).',
  })
  interestRate: number;

  @ApiProperty({
    example: '2',
    description:
      'Fixed interest period years as positive integer value between 1 and 30. -1 to have no fixed interest period.',
  })
  fixedInterestPeriodInYears: number;

  @ApiProperty({
    example: '0.03',
    description: 'Percentage as positive float value (0.02 = 2%).',
  })
  amortizationRate: number;
}
