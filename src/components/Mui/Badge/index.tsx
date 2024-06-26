import MuiBadge, { BadgeProps as MuiBadgeProps } from '@mui/material/Badge'

export interface BadgeProps extends MuiBadgeProps {}

export const Badge = ({ ...props }: BadgeProps) => {
  return <MuiBadge {...props} />
}
