import MuiButton, { ButtonProps as MuiButtonProps } from '@mui/material/Button'

export interface ButtonProps extends MuiButtonProps {}

export const Button = ({ ...props }: ButtonProps) => {
  return <MuiButton {...props} />
}
