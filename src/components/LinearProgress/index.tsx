import { forwardRef } from 'react'
import MuiLinearProgress, { LinearProgressProps as MuiLinearProgressProps } from '@mui/material/LinearProgress'

import './styles.css'
import clsx from 'clsx'

declare module '@mui/material/LinearProgress' {
  interface LinearProgressPropsColorOverrides {
    inherit: false
    string: false
    primary: true
    primaryLight: true
    secondary: true
    dark: true
    light: true
    medium: true
    success: true
    error: true
    info: true
    warning: true
  }
}

export interface LinearProgressProps extends MuiLinearProgressProps {}

const LinearProgress = forwardRef<HTMLDivElement, LinearProgressProps>(
  ({ color = 'primary', ...props }: LinearProgressProps, ref) => {
    const classNames = clsx({
      ['MuiLinearProgress-colorPrimary']: color === 'primary',
      ['MuiLinearProgress-colorPrimaryLight']: color === 'primaryLight',
      ['MuiLinearProgress-colorSecondary']: color === 'secondary',
      ['MuiLinearProgress-colorDark']: color === 'dark',
      ['MuiLinearProgress-colorMedium']: color === 'medium',
      ['MuiLinearProgress-colorLight']: color === 'light',
      ['MuiLinearProgress-colorSuccess']: color === 'success',
      ['MuiLinearProgress-colorError']: color === 'error',
      ['MuiLinearProgress-colorInfo']: color === 'info',
      ['MuiLinearProgress-colorWarning']: color === 'warning',
    })

    return <MuiLinearProgress ref={ref} className={classNames} {...props} />
  },
)

export default LinearProgress
