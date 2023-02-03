import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from '@mui/material';

import { ILoanCalculationResult } from '@s-com/types';

import { formatCurrency } from '@/services/currencies';

interface IProps {
  calculation: ILoanCalculationResult;
}

export const LoanSummary = ({ calculation }: IProps) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableBody>
          <TableRow>
            <TableCell sx={{ fontWeight: 'bold' }} variant="head">
              Monatliche Rate
            </TableCell>

            <TableCell align="right">
              {formatCurrency(calculation.monthlyPayment)}
            </TableCell>
          </TableRow>

          {calculation.fixedInterestPeriodInYears > 0 && (
            <TableRow>
              <TableCell sx={{ fontWeight: 'bold' }} variant="head">
                Restschuld nach Zinsbindung
              </TableCell>

              <TableCell align="right">
                {formatCurrency(calculation.restAmount)}
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
