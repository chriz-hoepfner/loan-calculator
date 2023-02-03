import { StandardTextFieldProps, TextField } from '@mui/material';

import { ILoanCalculationRequest } from '@s-com/types';

import { useLoanForm } from '@/hooks/forms';

interface IProps extends StandardTextFieldProps {
  name: keyof ILoanCalculationRequest;
}

export const LoanFormTextInput = (props: IProps) => {
  const { values, touched, errors, handleChangeAndSubmit } = useLoanForm();

  return (
    <TextField
      {...props}
      size="small"
      type="number"
      onChange={handleChangeAndSubmit}
      value={values[props.name]}
      error={touched[props.name] && Boolean(errors[props.name])}
      helperText={touched[props.name] && errors[props.name]}
    />
  );
};
