import { Module } from '@nestjs/common';

import { LoanCalculationController } from './controllers/loan-calculation.controller';
import { LoanCalculationService } from './services/loan-calculation.service';

@Module({
  controllers: [LoanCalculationController],
  providers: [LoanCalculationService],
})
export class LoanCalculationModule {}
