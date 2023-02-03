import { Module } from '@nestjs/common';

import { LoanCalculationModule } from './loan-calculation/loan-calculation.module';

@Module({
  imports: [LoanCalculationModule],
})
export class AppModule {}
