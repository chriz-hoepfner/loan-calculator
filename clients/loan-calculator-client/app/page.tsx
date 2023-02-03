'use client';

import { Box, Card, Stack } from '@mui/material';

import { LoanSummary } from '@/components/LoanSummary';
import { LoanForm } from '@/components/loan/form/LoanForm';
import { LoanTable } from '@/components/loan/table/LoanTable';
import { useCalculateLoan } from '@/hooks/api/loan';

export default function Home() {
  const {
    calculateLoan,
    data: calculation,
    error,
    isMutating,
  } = useCalculateLoan();

  return (
    <Stack
      spacing={3}
      sx={{
        width: '100vw',
        maxWidth: '600px',
        p: '1rem',
      }}
    >
      <Card>
        <Box sx={{ padding: '1rem' }}>
          <LoanForm
            isMutating={isMutating}
            handleSubmit={values => calculateLoan(values)}
          />
        </Box>
      </Card>

      {isMutating ? (
        <Card>
          <Box
            sx={{
              padding: '1rem',
              fontStyle: 'italic',
              textAlign: 'center',
              fontSize: '0.8rem',
              color: '#444',
            }}
          >
            Wird berechnet...
          </Box>
        </Card>
      ) : error ? (
        <Card>
          <Box
            sx={{
              padding: '1rem',
              fontStyle: 'italic',
              textAlign: 'center',
              fontSize: '0.8rem',
              color: '#444',
            }}
          >
            Fehler bei der Berechnung
          </Box>
        </Card>
      ) : (
        calculation && (
          <>
            <LoanSummary calculation={calculation} />

            <LoanTable calculation={calculation} />
          </>
        )
      )}
    </Stack>
  );
}
