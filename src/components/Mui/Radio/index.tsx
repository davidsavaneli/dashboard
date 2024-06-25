import MuiRadio, { RadioProps as MuiRadioProps } from '@mui/material/Radio'

export interface RadioProps extends MuiRadioProps {}

export const Radio = ({ ...props }: RadioProps) => {
  return <MuiRadio {...props} />
}
