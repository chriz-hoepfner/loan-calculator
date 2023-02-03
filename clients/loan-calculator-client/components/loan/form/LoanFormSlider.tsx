import { Box, Slider, Typography } from '@mui/material';

import { ILoanCalculationRequest } from '@s-com/types';

import { useLoanForm } from '@/hooks/forms';

interface IProps {
  label: string;
  name: keyof ILoanCalculationRequest;
}

export const LoanFormSlider = ({ label, name }: IProps) => {
  const { submitCount, submitForm, values, handleChange } = useLoanForm();

  return (
    <Box border="1px solid #BBB" borderRadius={1} px={2} py={1}>
      <Typography variant="caption">{label}</Typography>

      <Slider
        size="small"
        value={values[name]}
        name={name}
        onChangeCommitted={() => {
          if (submitCount > 0) {
            submitForm();
          }
        }}
        onChange={handleChange}
        valueLabelDisplay="auto"
        step={1}
        min={1}
        max={30}
        marks={[1, 10, 20, 30].map(value => ({
          value,
          label: value,
        }))}
      />
    </Box>
  );
};
