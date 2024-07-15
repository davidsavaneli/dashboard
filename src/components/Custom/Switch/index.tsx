import { forwardRef } from 'react'
import clsx from 'clsx'
import { MuiSwitch, MuiSwitchProps } from '../../Mui'
import FormControlLabel from '../FormControlLabel'

import './styles.css'

declare module '@mui/material/Switch' {
  interface SwitchPropsSizeOverrides {
    string: false
    small: false
    medium: false
    large: false
    sm: true
    md: true
    lg: true
  }

  interface SwitchPropsColorOverrides {
    default: false
    string: false
    primary: true
    primaryLight: true
    secondary: true
    dark: true
    medium: true
    light: true
    success: true
    error: true
    info: true
    warning: true
  }
}

export interface SwitchProps extends MuiSwitchProps {
  label?: string
}

const Radio = forwardRef<HTMLButtonElement, SwitchProps>(
  ({ label, size = 'md', color = 'medium', disabled, ...props }: SwitchProps, ref) => {
    const classNames = clsx({
      ['MuiSwitch-colorPrimary']: color === 'primary',
      ['MuiSwitch-colorPrimaryLight']: color === 'primaryLight',
      ['MuiSwitch-colorSecondary']: color === 'secondary',
      ['MuiSwitch-colorDark']: color === 'dark',
      ['MuiSwitch-colorMedium']: color === 'medium',
      ['MuiSwitch-colorLight']: color === 'light',
      ['MuiSwitch-colorSuccess']: color === 'success',
      ['MuiSwitch-colorError']: color === 'error',
      ['MuiSwitch-colorInfo']: color === 'info',
      ['MuiSwitch-colorWarning']: color === 'warning',
      ['MuiSwitch-sizeSm']: size === 'sm',
      ['MuiSwitch-sizeMd']: size === 'md',
      ['MuiSwitch-sizeLg']: size === 'lg',
      ['Mui-disabled']: disabled,
    })

    return (
      <FormControlLabel size={size} control={<MuiSwitch ref={ref} className={classNames} {...props} />} label={label} />
    )
  },
)

export default Radio
