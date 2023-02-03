import { ApiProperty } from '@nestjs/swagger';

import { IMonthlyPayment } from '@s-com/types';

export class MonthlyPayment implements IMonthlyPayment {
  @ApiProperty({
    example: 1,
    description: 'Month relative to start of the year.',
  })
  month: number;

  @ApiProperty({ example: 23958334, description: 'Amount in cents.' })
  restAmount: number;

  @ApiProperty({
    example: 1,
    description: 'Year relative to start of the loan.',
  })
  year: number;

  @ApiProperty({ example: 1083333, description: 'Amount in cents.' })
  payment: number;

  @ApiProperty({ example: 41667, description: 'Amount in cents.' })
  interest: number;

  @ApiProperty({ example: 1041666, description: 'Amount in cents.' })
  amortization: number;
}
