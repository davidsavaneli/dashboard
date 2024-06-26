import { forwardRef } from 'react'
import { MuiBadge, MuiBadgeProps } from '../../Mui'

export interface BadgeProps extends MuiBadgeProps {}

const Badge = forwardRef<HTMLDivElement, BadgeProps>(({ ...props }: BadgeProps, ref) => {
  return <MuiBadge ref={ref} {...props} />
})

export default Badge
