import { BadRequestException, Body, Controller, Post } from '@nestjs/common';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';

import { LoanCalculationRequestSchema } from '@s-com/types';

import { LoanCalculationRequest } from '../dto/LoanCalculationRequest.dto';
import { LoanCalculationResult } from '../dto/LoanCalculationResult.dto';
import { LoanCalculationService } from '../services/loan-calculation.service';

@Controller({ path: 'loan', version: '1' })
@ApiTags('Loan')
export class LoanCalculationController {
  constructor(private localCalculationService: LoanCalculationService) {}

  @Post('calculate')
  @ApiCreatedResponse({
    type: LoanCalculationResult,
    description: 'Returns loan calculation for the given loan request.',
  })
  calculate(@Body() request: LoanCalculationRequest): LoanCalculationResult {
    try {
      LoanCalculationRequestSchema.parse(request);
    } catch (e) {
      throw new BadRequestException(e.message);
    }

    return this.localCalculationService.calculate(request);
  }
}
