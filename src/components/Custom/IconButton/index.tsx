import { MuiIconButton, MuiIconButtonProps } from '../../Mui'
import Icon, { IconName, IconProps } from '../Icon'
import clsx from 'clsx'

import './styles.css'

declare module '@mui/material/IconButton' {
  interface IconButtonPropsColorOverrides {
    inherit: false
    default: false
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

  interface IconButtonPropsSizeOverrides {
    small: false
    medium: false
    large: false
    sm: true
    md: true
    lg: true
  }
}

export interface IconButtonProps extends MuiIconButtonProps {
  iconName: IconName
  rounded?: boolean
  variant?: 'transparent' | 'contained' | 'outlined' | 'filled'
  iconVariant?: IconProps['variant']
}

const IconButton = ({
  color = 'primary',
  size = 'md',
  iconName,
  variant = 'filled',
  rounded = false,
  iconVariant,
  ...props
}: IconButtonProps) => {
  const classNames = clsx({
    ['MuiIconButton-variantTransparent']: variant === 'transparent',
    ['MuiIconButton-variantContained']: variant === 'contained',
    ['MuiIconButton-variantOutlined']: variant === 'outlined',
    ['MuiIconButton-variantFilled']: variant === 'filled',
    ['MuiIconButton-colorPrimary']: color === 'primary',
    ['MuiIconButton-colorPrimaryLight']: color === 'primaryLight',
    ['MuiIconButton-colorSecondary']: color === 'secondary',
    ['MuiIconButton-colorDark']: color === 'dark',
    ['MuiIconButton-colorMedium']: color === 'medium',
    ['MuiIconButton-colorLight']: color === 'light',
    ['MuiIconButton-colorSuccess']: color === 'success',
    ['MuiIconButton-colorError']: color === 'error',
    ['MuiIconButton-colorInfo']: color === 'info',
    ['MuiIconButton-colorWarning']: color === 'warning',
    ['MuiIconButton-sizeSm']: size === 'sm',
    ['MuiIconButton-sizeMd']: size === 'md',
    ['MuiIconButton-sizeLg']: size === 'lg',
    ['MuiIconButton-rounded']: rounded,
  })

  return (
    <MuiIconButton className={classNames} {...props}>
      {<Icon name={iconName} size={size} color={color} variant={iconVariant} />}
    </MuiIconButton>
  )
}

export default IconButton
