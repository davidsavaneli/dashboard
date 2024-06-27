import { IconProps as IconsaxIconProps } from 'iconsax-react'
import { Home, Trash, TickSquare } from 'iconsax-react'

const Icons = {
  Home,
  Trash,
  TickSquare,
}

export type IconName = keyof typeof Icons

export interface IconProps extends IconsaxIconProps {
  name: IconName
}

const Icon = ({ name, size = 24, color = '#000', variant = 'Linear', ...props }: IconProps) => {
  const IconComponent = Icons[name]

  return IconComponent ? <IconComponent size={size} color={color} variant={variant} {...props} /> : null
}

export default Icon
