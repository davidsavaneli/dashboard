import { forwardRef, ReactNode } from 'react'
import MuiButton, { ButtonProps as MuiButtonProps } from '@mui/material/Button'
import Tooltip from '../Tooltip'
import CircularProgress from '../CircularProgress'
import Icon, { IconName, IconProps } from '../Icon'
import clsx from 'clsx'

import './styles.css'

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    text: false
    outlined: false
    contained: true
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
  iconName?: IconName
  iconVariant?: IconProps['variant']
  rounded?: boolean
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
  loading?: boolean
  tooltipTitle?: ReactNode
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'contained',
      color = 'medium',
      size = 'md',
      iconName,
      iconVariant,
      rounded = false,
      loading = false,
      tooltipTitle,
      children,
      ...props
    }: ButtonProps,
    ref,
  ) => {
    const classNames = clsx({
      ['MuiButton-variantContained']: variant === 'contained',
      ['MuiButton-variantFilled']: variant === 'filled',
      ['MuiButton-variantTransparent']: variant === 'transparent',
      ['MuiButton-colorPrimary']: color === 'primary',
      ['MuiButton-colorPrimaryLight']: color === 'primaryLight',
      ['MuiButton-colorSecondary']: color === 'secondary',
      ['MuiButton-colorDark']: color === 'dark',
      ['MuiButton-colorMedium']: color === 'medium',
      ['MuiButton-colorLight']: color === 'light',
      ['MuiButton-colorSuccess']: color === 'success',
      ['MuiButton-colorError']: color === 'error',
      ['MuiButton-colorInfo']: color === 'info',
      ['MuiButton-colorWarning']: color === 'warning',
      ['MuiButton-sizeSm']: size === 'sm',
      ['MuiButton-sizeMd']: size === 'md',
      ['MuiButton-sizeLg']: size === 'lg',
      ['MuiButton-rounded']: rounded,
    })

    const ButtonComponent = () => (
      <MuiButton ref={ref} className={classNames} {...props}>
        {(iconName || loading) && (
          <div className='MuiButton-adornmentBox'>
            {loading ? (
              <CircularProgress size={size} />
            ) : (
              iconName && <Icon name={iconName} size={size} variant={iconVariant} />
            )}
          </div>
        )}
        {children}
      </MuiButton>
    )

    return tooltipTitle ? (
      <Tooltip title={tooltipTitle}>
        <ButtonComponent />
      </Tooltip>
    ) : (
      <ButtonComponent />
    )
  },
)

export default Button
