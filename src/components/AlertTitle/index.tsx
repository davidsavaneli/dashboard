import { forwardRef } from 'react'
import MuiAlertTitle, { AlertTitleProps as MuiAlertTitleProps } from '@mui/material/AlertTitle'

export interface AlertTitleProps extends MuiAlertTitleProps {}

const AlertTitle = forwardRef<HTMLDivElement, AlertTitleProps>(({ ...props }: AlertTitleProps, ref) => {
  return <MuiAlertTitle ref={ref} {...props} />
})

export default AlertTitle
