import { useState } from 'react';

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Box, Collapse, IconButton, TableCell, TableRow } from '@mui/material';

import { IYearlyPayment } from '@s-com/types';

import { formatCurrency } from '@/services/currencies';
import { padNumber } from '@/services/numbers';

import { LoanTableRowTable } from './LoanTableRowTable';

interface IProps {
  yearlyPayment: IYearlyPayment;
}

export const LoanTableRow = ({ yearlyPayment }: IProps) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <TableRow onClick={() => setOpen(!open)} sx={{ cursor: 'pointer' }}>
        <TableCell padding="checkbox">
          <IconButton size="small">
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>

        <TableCell>{padNumber(yearlyPayment.year)}</TableCell>

        <TableCell align="right">
          {formatCurrency(yearlyPayment.payment)}
        </TableCell>

        <TableCell align="right">
          {formatCurrency(yearlyPayment.interest)}
        </TableCell>

        <TableCell align="right">
          {formatCurrency(yearlyPayment.amortization)}
        </TableCell>

        <TableCell align="right">
          {formatCurrency(yearlyPayment.restAmount)}
        </TableCell>
      </TableRow>

      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ marginTop: 1, marginBottom: 3 }}>
              <LoanTableRowTable
                monthlyPayments={yearlyPayment.monthlyPayments}
              />
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
};
