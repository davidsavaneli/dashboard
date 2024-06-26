import MuiIcon, { IconProps as MuiIconProps } from '@mui/material/Icon'
import { Delete, Home, CheckCircle, Error, Warning, Info } from '@mui/icons-material'

export interface IconProps extends MuiIconProps {}

export const Icon = ({ ...props }: IconProps) => {
  return <MuiIcon {...props} />
}

export const Icons = {
  Delete,
  Home,
  CheckCircle,
  Error,
  Warning,
  Info,
}
