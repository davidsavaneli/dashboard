import MuiAvatar, { AvatarProps as MuiAvatarProps } from '@mui/material/Avatar'

export interface AvatarProps extends MuiAvatarProps {}

export const Avatar = ({ ...props }: AvatarProps) => {
  return <MuiAvatar {...props} />
}
