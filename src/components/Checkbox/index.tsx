import { forwardRef } from 'react'
import clsx from 'clsx'
import MuiCheckbox, { CheckboxProps as MuiCheckboxProps } from '@mui/material/Checkbox'
import FormControlLabel from '../FormControlLabel'
import './styles.css'

declare module '@mui/material/Checkbox' {
  interface CheckboxPropsSizeOverrides {
    string: false
    small: false
    medium: false
    large: false
    sm: true
    md: true
    lg: true
  }

  interface CheckboxPropsColorOverrides {
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

export interface CheckboxProps extends MuiCheckboxProps {
  label?: string
  error?: boolean
  helperText?: string
}

const Checkbox = forwardRef<HTMLButtonElement, CheckboxProps>(
  ({ label, error, helperText, size = 'md', color = 'medium', ...props }: CheckboxProps, ref) => {
    const classNames = clsx({
      ['MuiCheckbox-colorPrimary']: color === 'primary',
      ['MuiCheckbox-colorPrimaryLight']: color === 'primaryLight',
      ['MuiCheckbox-colorSecondary']: color === 'secondary',
      ['MuiCheckbox-colorDark']: color === 'dark',
      ['MuiCheckbox-colorMedium']: color === 'medium',
      ['MuiCheckbox-colorLight']: color === 'light',
      ['MuiCheckbox-colorSuccess']: color === 'success',
      ['MuiCheckbox-colorError']: color === 'error',
      ['MuiCheckbox-colorInfo']: color === 'info',
      ['MuiCheckbox-colorWarning']: color === 'warning',
      ['MuiCheckbox-sizeSm']: size === 'sm',
      ['MuiCheckbox-sizeMd']: size === 'md',
      ['MuiCheckbox-sizeLg']: size === 'lg',
      ['MuiCheckbox-error']: error,
    })

    return (
      <FormControlLabel
        size={size}
        control={
          <MuiCheckbox
            ref={ref}
            className={classNames}
            icon={<CheckboxIcon />}
            checkedIcon={<CheckboxCheckedIcon />}
            indeterminateIcon={<CheckboxIndeterminateIcon />}
            {...props}
          />
        }
        label={label}
      />
    )
  },
)

export default Checkbox

const CheckboxIcon = () => (
  <svg
    className='MuiCheckbox-icon'
    xmlns='http://www.w3.org/2000/svg'
    width='24'
    height='24'
    viewBox='0 0 24 24'
    fill='none'
  >
    <path
      d='M9.3 21h5.4c4.5 0 6.3-1.8 6.3-6.3V9.3C21 4.8 19.2 3 14.7 3H9.3C4.8 3 3 4.8 3 9.3v5.4C3 19.2 4.8 21 9.3 21Z'
      stroke='none'
      strokeWidth='1'
      strokeLinecap='round'
      strokeLinejoin='round'
    ></path>
  </svg>
)

const CheckboxCheckedIcon = () => (
  <svg
    className='MuiCheckbox-checked-icon'
    xmlns='http://www.w3.org/2000/svg'
    width='24'
    height='24'
    viewBox='0 0 24 24'
    fill='none'
  >
    <path
      d='M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2Zm.59 7.7-5.67 5.67a.75.75 0 0 1-1.06 0l-2.83-2.83a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l2.3 2.3 5.14-5.14c.29-.29.77-.29 1.06 0 .29.29.29.76 0 1.06Z'
      fill='none'
    ></path>
  </svg>
)

const CheckboxIndeterminateIcon = () => (
  <svg
    className='MuiCheckbox-indeterminate-icon'
    xmlns='http://www.w3.org/2000/svg'
    width='24'
    height='24'
    viewBox='0 0 24 24'
    fill='none'
  >
    <path
      d='M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2ZM16 12.75H8c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h8c.41 0 .75.34.75.75s-.34.75-.75.75Z'
      fill='none'
    ></path>
  </svg>
)
