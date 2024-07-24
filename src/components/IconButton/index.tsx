import MuiIconButton, { IconButtonProps as MuiIconButtonProps } from '@mui/material/IconButton'
import Icon, { IconName, IconProps } from '../Icon'
import CircularProgress from '../CircularProgress'
import Tooltip from '../Tooltip'
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
    medium: true
    light: true
    success: true
    error: true
    info: true
    warning: true
  }

  interface IconButtonPropsSizeOverrides {
    string: false
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
  variant?: 'contained' | 'filled' | 'transparent'
  iconVariant?: IconProps['variant']
  loading?: boolean
  tooltipTitle?: string
  nonClickable?: boolean
}

const IconButton = ({
  color = 'primary',
  size = 'md',
  iconName,
  variant = 'transparent',
  rounded = false,
  iconVariant,
  loading = false,
  tooltipTitle,
  nonClickable = false,
  ...props
}: IconButtonProps) => {
  const classNames = clsx({
    ['MuiIconButton-variantContained']: variant === 'contained',
    ['MuiIconButton-variantFilled']: variant === 'filled',
    ['MuiIconButton-variantTransparent']: variant === 'transparent',
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
    ['MuiIconButton-loading']: loading,
    ['MuiIconButton-nonClickable']: nonClickable,
  })

  const IconButtonComponent = () => (
    <MuiIconButton className={classNames} {...props}>
      {loading ? (
        <CircularProgress size={size} color={color} />
      ) : (
        <Icon name={iconName} size={size} color={color} variant={iconVariant} />
      )}
    </MuiIconButton>
  )

  return tooltipTitle ? (
    <Tooltip title={tooltipTitle}>
      <IconButtonComponent />
    </Tooltip>
  ) : (
    <IconButtonComponent />
  )
}

export default IconButton
