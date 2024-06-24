import MuiCheckbox, { CheckboxProps as MuiCheckboxProps } from '@mui/material/Checkbox'

export interface CheckboxProps extends MuiCheckboxProps {}

export const Checkbox = ({ ...props }: CheckboxProps) => {
  return <MuiCheckbox {...props} />
}
