import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';

import { ILoanCalculationResult } from '@s-com/types';

import { LoanTableRow } from './LoanTableRow';

interface IProps {
  calculation: ILoanCalculationResult;
}

export const LoanTable = ({ calculation }: IProps) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontWeight: 'bold' }}></TableCell>
            <TableCell sx={{ fontWeight: 'bold' }}>Jahr</TableCell>
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
          {calculation.yearlyPayments.map((yearlyPayment, index) => (
            <LoanTableRow key={index} yearlyPayment={yearlyPayment} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
