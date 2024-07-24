import { forwardRef } from 'react'
import clsx from 'clsx'
import MuiRadio, { RadioProps as MuiRadioProps } from '@mui/material/Radio'
import FormControlLabel from '../FormControlLabel'

import './styles.css'

declare module '@mui/material/Radio' {
  interface RadioPropsSizeOverrides {
    string: false
    small: false
    medium: false
    large: false
    sm: true
    md: true
    lg: true
  }

  interface RadioPropsColorOverrides {
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

export interface RadioProps extends MuiRadioProps {
  label?: string
  error?: boolean
  helperText?: string
}

const Radio = forwardRef<HTMLButtonElement, RadioProps>(
  ({ label, error, helperText, size = 'md', color = 'medium', ...props }: RadioProps, ref) => {
    const classNames = clsx({
      ['MuiRadio-colorPrimary']: color === 'primary',
      ['MuiRadio-colorPrimaryLight']: color === 'primaryLight',
      ['MuiRadio-colorSecondary']: color === 'secondary',
      ['MuiRadio-colorDark']: color === 'dark',
      ['MuiRadio-colorMedium']: color === 'medium',
      ['MuiRadio-colorLight']: color === 'light',
      ['MuiRadio-colorSuccess']: color === 'success',
      ['MuiRadio-colorError']: color === 'error',
      ['MuiRadio-colorInfo']: color === 'info',
      ['MuiRadio-colorWarning']: color === 'warning',
      ['MuiRadio-sizeSm']: size === 'sm',
      ['MuiRadio-sizeMd']: size === 'md',
      ['MuiRadio-sizeLg']: size === 'lg',
      ['MuiRadio-error']: error,
    })

    return (
      <FormControlLabel
        size={size}
        control={
          <MuiRadio
            ref={ref}
            className={classNames}
            icon={<RadioIcon />}
            checkedIcon={<RadioCheckedIcon />}
            {...props}
          />
        }
        label={label}
      />
    )
  },
)

export default Radio

const RadioIcon = () => (
  <div className='MuiRadio-icon'>
    <div className='MuiRadio-icon-inner'></div>
  </div>
)
const RadioCheckedIcon = () => (
  <div className='MuiRadio-checked-icon'>
    <div className='MuiRadio-checked-icon-inner'>
      <div className='MuiRadio-checked-icon-dot'></div>
    </div>
  </div>
)
