import { ChangeEvent, useCallback } from 'react';

import { useFormikContext } from 'formik';

import { ILoanCalculationRequest } from '@s-com/types';

export const useLoanForm = () => {
  const { submitCount, submitForm, values, touched, errors, handleChange } =
    useFormikContext<ILoanCalculationRequest>();

  const handleChangeAndSubmit = useCallback(
    (event: ChangeEvent<any>) => {
      handleChange(event);

      if (submitCount > 0) {
        setTimeout(submitForm, 0);
      }
    },
    [handleChange, submitCount, submitForm],
  );

  return {
    submitCount,
    submitForm,
    values,
    touched,
    errors,
    handleChange,
    handleChangeAndSubmit,
  };
};
