import { useState } from 'react';

import { Box, Button, Stack } from '@mui/material';
import { Form, Formik } from 'formik';
import { toFormikValidationSchema } from 'zod-formik-adapter';

import { ILoanCalculationRequest, LoanCalculationUISchema } from '@s-com/types';

import { DEFAULT_VALUES } from '@/constants/loan';

import { LoanFormSlider } from './LoanFormSlider';
import { LoanFormSwitch } from './LoanFormSwitch';
import { LoanFormTextInput } from './LoanFormTextInput';

interface IProps {
  isMutating: boolean;
  handleSubmit: (values: ILoanCalculationRequest) => void;
}

export const LoanForm = ({ isMutating, handleSubmit }: IProps) => {
  const [showSlider, setShowSlider] = useState(false);

  return (
    <Formik<ILoanCalculationRequest>
      initialValues={DEFAULT_VALUES}
      validationSchema={toFormikValidationSchema(LoanCalculationUISchema)}
      onSubmit={values => {
        handleSubmit({
          ...values,
          amount: Math.round(values.amount * 100),
          interestRate: values.interestRate / 100,
          amortizationRate: values.amortizationRate / 100,
          fixedInterestPeriodInYears: showSlider
            ? values.fixedInterestPeriodInYears
            : -1,
        });
      }}
    >
      {({ isValid }) => {
        return (
          <Form>
            <Stack spacing={2} direction={{ xs: 'column', md: 'row' }}>
              <LoanFormTextInput
                label="Darlehensbetrag"
                name="amount"
                required
              />

              <LoanFormTextInput
                label="Sollzinssatz"
                name="interestRate"
                required
              />

              <LoanFormTextInput
                size="small"
                label="Anfängliche Tilgung (%)"
                name="amortizationRate"
                required
              />
            </Stack>

            <Stack spacing={2} sx={{ mt: '0.5rem', width: '100%' }}>
              <LoanFormSwitch
                label="Begrenzte Zinsbindungsdauer"
                checked={showSlider}
                onChange={(_, checked) => setShowSlider(checked)}
              />

              {showSlider && (
                <LoanFormSlider
                  label="Zinsbindungsdauer in Jahren"
                  name="fixedInterestPeriodInYears"
                />
              )}
            </Stack>

            <Box sx={{ mt: '0.5rem' }}>
              <Button
                variant="contained"
                type="submit"
                disabled={isMutating || !isValid}
              >
                Berechnen
              </Button>
            </Box>
          </Form>
        );
      }}
    </Formik>
  );
};
