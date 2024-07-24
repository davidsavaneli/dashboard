import { forwardRef } from 'react'
import MuiFab, { FabProps as MuiFabProps } from '@mui/material/Fab'
import Icon, { IconName } from '../Icon'
import Tooltip from '../Tooltip'
import clsx from 'clsx'

import './styles.css'

declare module '@mui/material/Fab' {
  interface FabPropsColorOverrides {
    default: false
    inherit: false
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

  interface FabPropsSizeOverrides {
    string: false
    small: false
    medium: false
    large: false
    sm: true
    md: true
    lg: true
  }
}

export interface FabProps extends MuiFabProps {
  iconName?: IconName
  tooltipTitle?: string
}

const Fab = forwardRef<HTMLButtonElement, FabProps>(
  ({ color = 'primary', size = 'md', iconName, tooltipTitle, children, ...props }: FabProps, ref) => {
    const classNames = clsx({
      ['MuiFab-colorPrimary']: color === 'primary',
      ['MuiFab-colorPrimaryLight']: color === 'primaryLight',
      ['MuiFab-colorSecondary']: color === 'secondary',
      ['MuiFab-colorDark']: color === 'dark',
      ['MuiFab-colorMedium']: color === 'medium',
      ['MuiFab-colorLight']: color === 'light',
      ['MuiFab-colorSuccess']: color === 'success',
      ['MuiFab-colorError']: color === 'error',
      ['MuiFab-colorInfo']: color === 'info',
      ['MuiFab-colorWarning']: color === 'warning',
      ['MuiFab-sizeSm']: size === 'sm',
      ['MuiFab-sizeMd']: size === 'md',
      ['MuiFab-sizeLg']: size === 'lg',
    })

    const FabComponent = () => (
      <MuiFab ref={ref} className={classNames} {...props}>
        {iconName && <Icon name={iconName} size={size} />}
        {children}
      </MuiFab>
    )

    return tooltipTitle ? (
      <Tooltip title={tooltipTitle}>
        <FabComponent />
      </Tooltip>
    ) : (
      <FabComponent />
    )
  },
)

export default Fab
