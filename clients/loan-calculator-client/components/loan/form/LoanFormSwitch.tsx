import { InputLabel, Switch, Typography } from '@mui/material';

import { useLoanForm } from '@/hooks/forms';

interface IProps {
  label: string;
  checked: boolean;
  onChange: (
    event: React.ChangeEvent<HTMLInputElement>,
    checked: boolean,
  ) => void;
}

export const LoanFormSwitch = ({ label, checked, onChange }: IProps) => {
  const { handleChangeAndSubmit } = useLoanForm();

  return (
    <InputLabel>
      <Typography variant="caption">{label}</Typography>

      <Switch
        id="switch"
        checked={checked}
        onChange={(event, checked) => {
          onChange(event, checked);
          handleChangeAndSubmit(event);
        }}
      />
    </InputLabel>
  );
};
