import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@mui/material';

import { IMonthlyPayment } from '@s-com/types';

import { formatCurrency } from '@/services/currencies';
import { padNumber } from '@/services/numbers';

interface IProps {
  monthlyPayments: IMonthlyPayment[];
}

export const LoanTableRowTable = ({ monthlyPayments }: IProps) => {
  return (
    <Table size="small" aria-label="purchases">
      <TableHead>
        <TableRow>
          <TableCell sx={{ fontWeight: 'bold' }}>Monat</TableCell>
          <TableCell sx={{ fontWeight: 'bold' }} align="right">
            Rate
          </TableCell>
          <TableCell sx={{ fontWeight: 'bold' }} align="right">
            Zins
          </TableCell>
          <TableCell sx={{ fontWeight: 'bold' }} align="right">
            Tilgung
          </TableCell>
          <TableCell sx={{ fontWeight: 'bold' }} align="right">
            Restschuld
          </TableCell>
        </TableRow>
      </TableHead>

      <TableBody>
        {monthlyPayments.map(monthlyPayments => (
          <TableRow key={monthlyPayments.month}>
            <TableCell>{padNumber(monthlyPayments.month)}</TableCell>

            <TableCell align="right">
              {formatCurrency(monthlyPayments.payment)}
            </TableCell>

            <TableCell align="right">
              {formatCurrency(monthlyPayments.interest)}
            </TableCell>

            <TableCell align="right">
              {formatCurrency(monthlyPayments.amortization)}
            </TableCell>

            <TableCell align="right">
              {formatCurrency(monthlyPayments.restAmount)}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
