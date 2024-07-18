import { forwardRef } from 'react'
import clsx from 'clsx'
import { MuiChip, MuiChipProps, MuiChipTypeMap } from '../../Mui'
import Icon from '../Icon'

import './styles.css'

declare module '@mui/material/Chip' {
  interface ChipPropsColorOverrides {
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

  interface ChipPropsSizeOverrides {
    medium: false
    small: false
    string: false
    sm: true
    md: true
    lg: true
  }
}

export interface ChipProps extends MuiChipProps {
  key?: any
}
export interface ChipTypeMap extends MuiChipTypeMap {}

const Chip = forwardRef<HTMLDivElement, ChipProps>(({ color = 'medium', size = 'md', ...props }: ChipProps, ref) => {
  const classNames = clsx({
    ['MuiChip-colorPrimary']: color === 'primary',
    ['MuiChip-colorPrimaryLight']: color === 'primaryLight',
    ['MuiChip-colorSecondary']: color === 'secondary',
    ['MuiChip-colorDark']: color === 'dark',
    ['MuiChip-colorMedium']: color === 'medium',
    ['MuiChip-colorLight']: color === 'light',
    ['MuiChip-colorSuccess']: color === 'success',
    ['MuiChip-colorError']: color === 'error',
    ['MuiChip-colorInfo']: color === 'info',
    ['MuiChip-colorWarning']: color === 'warning',
    ['MuiChip-sizeSm']: size === 'sm',
    ['MuiChip-sizeMd']: size === 'md',
    ['MuiChip-sizeLg']: size === 'lg',
  })

  return <MuiChip ref={ref} className={classNames} deleteIcon={<Icon name='CloseCircle' variant='Bold' />} {...props} />
})

export default Chip
