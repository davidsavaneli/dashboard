import MuiAvatarGroup, { AvatarGroupProps as MuiAvatarGroupProps } from '@mui/material/AvatarGroup'

export interface AvatarGroupProps extends MuiAvatarGroupProps {}

export const AvatarGroup = ({ ...props }: AvatarGroupProps) => {
  return <MuiAvatarGroup {...props} />
}
