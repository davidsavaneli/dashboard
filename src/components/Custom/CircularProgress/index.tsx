import { forwardRef } from 'react'
import { MuiCircularProgress, MuiCircularProgressProps } from '../../Mui'
import clsx from 'clsx'

import './styles.css'

declare module '@mui/material/CircularProgress' {
  interface CircularProgressPropsColorOverrides {
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

export interface CircularProgressProps extends MuiCircularProgressProps {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | number
}

const CircularProgress = forwardRef<HTMLDivElement, CircularProgressProps>(
  ({ color = 'primary', size = 'md', ...props }: CircularProgressProps, ref) => {
    const classNames = clsx({
      ['MuiCircularProgress-colorPrimary']: color === 'primary',
      ['MuiCircularProgress-colorPrimaryLight']: color === 'primaryLight',
      ['MuiCircularProgress-colorSecondary']: color === 'secondary',
      ['MuiCircularProgress-colorDark']: color === 'dark',
      ['MuiCircularProgress-colorMedium']: color === 'medium',
      ['MuiCircularProgress-colorLight']: color === 'light',
      ['MuiCircularProgress-colorSuccess']: color === 'success',
      ['MuiCircularProgress-colorError']: color === 'error',
      ['MuiCircularProgress-colorInfo']: color === 'info',
      ['MuiCircularProgress-colorWarning']: color === 'warning',
      ['MuiCircularProgress-sizeXs']: size === 'xs',
      ['MuiCircularProgress-sizeSm']: size === 'sm',
      ['MuiCircularProgress-sizeMd']: size === 'md',
      ['MuiCircularProgress-sizeLg']: size === 'lg',
      ['MuiCircularProgress-sizeXl']: size === 'xl',
      ['MuiCircularProgress-sizeXxl']: size === 'xxl',
    })
    return <MuiCircularProgress ref={ref} className={classNames} size={size} {...props} />
  },
)

export default CircularProgress
