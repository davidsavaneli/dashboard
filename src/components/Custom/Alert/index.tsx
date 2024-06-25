import { forwardRef } from 'react'
import { MuiAlert, MuiAlertProps } from '../../Mui'

export interface AlertProps extends MuiAlertProps {}

const MDAlert = forwardRef<HTMLDivElement, AlertProps>(({ variant = 'outlined', ...props }: AlertProps, ref) => {
  return <MuiAlert ref={ref} variant={variant} {...props} />
})

export default MDAlert
