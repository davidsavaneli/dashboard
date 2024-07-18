import { forwardRef } from 'react'
import clsx from 'clsx'
import { MuiBadge, MuiBadgeProps } from '../../Mui'

import './styles.css'

declare module '@mui/material/Badge' {
  interface BadgePropsColorOverrides {
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

export interface BadgeProps extends MuiBadgeProps {}

const Badge = forwardRef<HTMLDivElement, BadgeProps>(({ color = 'medium', ...props }: BadgeProps, ref) => {
  const classNames = clsx({
    ['MuiBadge-colorPrimary']: color === 'primary',
    ['MuiBadge-colorPrimaryLight']: color === 'primaryLight',
    ['MuiBadge-colorSecondary']: color === 'secondary',
    ['MuiBadge-colorDark']: color === 'dark',
    ['MuiBadge-colorMedium']: color === 'medium',
    ['MuiBadge-colorLight']: color === 'light',
    ['MuiBadge-colorSuccess']: color === 'success',
    ['MuiBadge-colorError']: color === 'error',
    ['MuiBadge-colorInfo']: color === 'info',
    ['MuiBadge-colorWarning']: color === 'warning',
  })

  return <MuiBadge ref={ref} className={classNames} {...props} />
})

export default Badge
