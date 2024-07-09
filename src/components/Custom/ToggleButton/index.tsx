import { forwardRef } from 'react'
import { MuiToggleButton, MuiToggleButtonProps } from '../../Mui'
import Icon, { IconName } from '../Icon'
import Tooltip from '../Tooltip'
import clsx from 'clsx'

import './styles.css'

declare module '@mui/material/ToggleButton' {
  interface ToggleButtonPropsColorOverrides {
    standard: false
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

  interface ToggleButtonPropsSizeOverrides {
    small: false
    medium: false
    large: false
    sm: true
    md: true
    lg: true
  }
}

export interface ToggleButtonProps extends MuiToggleButtonProps {
  iconName?: IconName
  tooltipTitle?: string
}

const ToggleButton = forwardRef<HTMLButtonElement, ToggleButtonProps>(
  ({ color = 'primary', size = 'md', iconName, tooltipTitle, children, ...props }: ToggleButtonProps, ref) => {
    const classNames = clsx({
      ['MuiToggleButton-colorPrimary']: color === 'primary',
      ['MuiToggleButton-colorPrimaryLight']: color === 'primaryLight',
      ['MuiToggleButton-colorSecondary']: color === 'secondary',
      ['MuiToggleButton-colorDark']: color === 'dark',
      ['MuiToggleButton-colorMedium']: color === 'medium',
      ['MuiToggleButton-colorLight']: color === 'light',
      ['MuiToggleButton-colorSuccess']: color === 'success',
      ['MuiToggleButton-colorError']: color === 'error',
      ['MuiToggleButton-colorInfo']: color === 'info',
      ['MuiToggleButton-colorWarning']: color === 'warning',
      ['MuiToggleButton-sizeSm']: size === 'sm',
      ['MuiToggleButton-sizeMd']: size === 'md',
      ['MuiToggleButton-sizeLg']: size === 'lg',
    })

    const ToggleButtonComponent = () => (
      <MuiToggleButton ref={ref} className={classNames} {...props}>
        {iconName && <Icon name={iconName} size={size} />}
        {children}
      </MuiToggleButton>
    )

    return tooltipTitle ? (
      <Tooltip title={tooltipTitle}>
        <ToggleButtonComponent />
      </Tooltip>
    ) : (
      <ToggleButtonComponent />
    )
  },
)

export default ToggleButton
