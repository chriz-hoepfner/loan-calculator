import { ApiProperty } from '@nestjs/swagger';

import { IMonthlyPayment, IYearlyPayment } from '@s-com/types';

import { MonthlyPayment } from './MonthlyPayment.dto';

export class YearlyPayment implements IYearlyPayment {
  @ApiProperty({ example: 12615216, description: 'Amount in cents.' })
  amortization: number;

  @ApiProperty({ example: 384780, description: 'Amount in cents.' })
  interest: number;

  @ApiProperty({ type: MonthlyPayment, isArray: true })
  monthlyPayments: IMonthlyPayment[];

  @ApiProperty({ example: 12999996, description: 'Amount in cents.' })
  payment: number;

  @ApiProperty({ example: 12384784, description: 'Amount in cents.' })
  restAmount: number;

  @ApiProperty({
    example: 1,
    description: 'Year relative to start of the loan.',
  })
  year: number;
}
