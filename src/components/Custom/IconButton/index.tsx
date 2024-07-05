import { MuiIconButton, MuiIconButtonProps } from '../../Mui'
import Icon, { IconName } from '../Icon'
import clsx from 'clsx'

import './styles.css'

declare module '@mui/material/IconButton' {
  interface IconButtonPropsColorOverrides {
    inherit: false
    default: false
    primary: true
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
  // color?: 'primary' | 'secondary' | 'dark' | 'medium' | 'light' | 'success' | 'error' | 'info' | 'warning'
  // size?: 'sm' | 'md' | 'lg'
  iconName: IconName
}

const IconButton = ({ color = 'primary', size, iconName, ...props }: IconButtonProps) => {
  const classNames = clsx({
    ['MuiIconButton-colorPrimary']: color === 'primary',
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
  })

  return (
    <MuiIconButton className={classNames} {...props}>
      {<Icon name={iconName} size={size} color={color} />}
    </MuiIconButton>
  )
}

export default IconButton
