import MuiAlert, { AlertProps as MuiAlertProps } from '@mui/material/Alert'

export interface AlertProps extends MuiAlertProps {}

export const Alert = ({ ...props }: AlertProps) => {
  return <MuiAlert {...props} />
}
