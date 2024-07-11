import MuiListItemAvatar, { ListItemAvatarProps as MuiListItemAvatarProps } from '@mui/material/ListItemAvatar'

export interface ListItemAvatarProps extends MuiListItemAvatarProps {}

export const ListItemAvatar = ({ ...props }: ListItemAvatarProps) => {
  return <MuiListItemAvatar {...props} />
}
