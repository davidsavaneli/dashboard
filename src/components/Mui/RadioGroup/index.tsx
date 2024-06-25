import MuiRadioGroup, { RadioGroupProps as MuiRadioGroupProps } from '@mui/material/RadioGroup'

export interface RadioGroupProps extends MuiRadioGroupProps {}

export const RadioGroup = ({ ...props }: RadioGroupProps) => {
  return <MuiRadioGroup {...props} />
}
