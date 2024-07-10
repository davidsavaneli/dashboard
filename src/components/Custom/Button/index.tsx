import { forwardRef } from 'react'
import { MuiButton, MuiButtonProps } from '../../Mui'
import clsx from 'clsx'

import './styles.css'

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    text: false
    contained: true
    outlined: true
    filled: true
    transparent: true
  }

  interface ButtonPropsSizeOverrides {
    string: false
    small: false
    medium: false
    large: false
    sm: true
    md: true
    lg: true
  }
}

export interface ButtonProps extends Omit<MuiButtonProps, 'color'> {
  rounded?: boolean
  loading?: boolean
  color?:
    | 'primary'
    | 'primaryLight'
    | 'secondary'
    | 'dark'
    | 'medium'
    | 'light'
    | 'success'
    | 'error'
    | 'info'
    | 'warning'
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { variant = 'contained', color = 'primary', size = 'md', rounded = false, loading = false, ...props }: ButtonProps,
    ref,
  ) => {
    const classNames = clsx({
      ['SSSSS-variantTransparent']: variant === 'transparent',
      ['SSSSS-variantContained']: variant === 'contained',
      ['SSSSS-variantOutlined']: variant === 'outlined',
      ['SSSSS-variantFilled']: variant === 'filled',
      ['SSSSS-colorPrimary']: color === 'primary',
      ['SSSSS-colorPrimaryLight']: color === 'primaryLight',
      ['SSSSS-colorSecondary']: color === 'secondary',
      ['SSSSS-colorDark']: color === 'dark',
      ['SSSSS-colorMedium']: color === 'medium',
      ['SSSSS-colorLight']: color === 'light',
      ['SSSSS-colorSuccess']: color === 'success',
      ['SSSSS-colorError']: color === 'error',
      ['SSSSS-colorInfo']: color === 'info',
      ['SSSSS-colorWarning']: color === 'warning',
      ['SSSSS-sizeSm']: size === 'sm',
      ['SSSSS-sizeMd']: size === 'md',
      ['SSSSS-sizeLg']: size === 'lg',
      ['SSSSS-rounded']: rounded,
      ['SSSSS-loading']: loading,
    })

    return <MuiButton ref={ref} className={classNames} variant={variant} size={size} {...props} />
  },
)

export default Button
