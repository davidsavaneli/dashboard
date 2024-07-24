import { forwardRef } from 'react'
import MuiAlert, { AlertProps as MuiAlertProps } from '@mui/material/Alert'
import Icon from '../Icon'

import './styles.css'

export interface AlertProps extends MuiAlertProps {}

const Alert = forwardRef<HTMLDivElement, AlertProps>(
  ({ variant = 'standard', severity = 'info', ...props }: AlertProps, ref) => {
    const CloseIcon = () => <Icon name='CloseSquare' variant='Bulk' color={variant === 'filled' ? 'secondary' : 'primary'} />

    return (
      <MuiAlert
        ref={ref}
        slots={{
          closeIcon: CloseIcon,
        }}
        variant={variant}
        severity={severity}
        iconMapping={{
          success: <Icon name='TickCircle' variant='Bold' color={variant === 'filled' ? 'secondary' : 'success'} />,
          error: <Icon name='CloseCircle' variant='Bold' color={variant === 'filled' ? 'secondary' : 'error'} />,
          warning: <Icon name='Warning2' variant='Bold' color={variant === 'filled' ? 'secondary' : 'warning'} />,
          info: <Icon name='InfoCircle' variant='Bold' color={variant === 'filled' ? 'secondary' : 'info'} />,
        }}
        {...props}
      />
    )
  },
)

export default Alert
