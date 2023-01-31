import { Controller, Post } from '@nestjs/common';

@Controller({ path: 'loan', version: '1' })
export class LoanCalculationController {
  @Post('calculate')
  calculate() {
    return 'Hello World!';
  }
}
