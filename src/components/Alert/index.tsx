import { forwardRef } from 'react'
import MuiAlert, { AlertProps as MuiAlertProps } from '@mui/material/Alert'

export interface AlertProps extends MuiAlertProps {}

const Alert = forwardRef<HTMLDivElement, AlertProps>(({ variant = 'outlined', ...props }: AlertProps, ref) => {
  return <MuiAlert ref={ref} variant={variant} {...props} />
})

export default Alert
