import MuiIconButton, { IconButtonProps as MuiIconButtonProps } from '@mui/material/IconButton'

export interface IconButtonProps extends MuiIconButtonProps {}

export const IconButton = ({ ...props }: IconButtonProps) => {
  return <MuiIconButton {...props} />
}
