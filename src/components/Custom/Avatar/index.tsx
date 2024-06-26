import { forwardRef } from 'react'
import { MuiAvatar, MuiAvatarProps } from '../../Mui'

export interface AvatarProps extends MuiAvatarProps {}

const Avatar = forwardRef<HTMLDivElement, AvatarProps>(({ ...props }: AvatarProps, ref) => {
  return <MuiAvatar ref={ref} {...props} />
})

export default Avatar
