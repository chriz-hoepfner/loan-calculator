import { ApiProperty } from '@nestjs/swagger';

import { ILoanCalculationResult, IYearlyPayment } from '@s-com/types';

import { LoanCalculationRequest } from './LoanCalculationRequest.dto';
import { YearlyPayment } from './YearlyPayment.dto';

export class LoanCalculationResult
  extends LoanCalculationRequest
  implements ILoanCalculationResult
{
  @ApiProperty({ example: 1083333, description: 'Amount in cents.' })
  monthlyPayment: number;

  @ApiProperty({ example: 12384784, description: 'Amount in cents.' })
  restAmount: number;

  @ApiProperty({ type: YearlyPayment, isArray: true })
  yearlyPayments: IYearlyPayment[];
}
