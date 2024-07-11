import { forwardRef } from 'react'
import { MuiListItemAvatar, MuiListItemAvatarProps } from '../../Mui'

export interface ListItemAvatarProps extends MuiListItemAvatarProps {}

const ListItemAvatar = forwardRef<HTMLDivElement, ListItemAvatarProps>(({ ...props }: ListItemAvatarProps, ref) => {
  return <MuiListItemAvatar ref={ref} {...props} />
})

export default ListItemAvatar
