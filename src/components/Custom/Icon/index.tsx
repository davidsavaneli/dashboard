import { forwardRef } from 'react'
import { Icons, MuiIconProps } from '../../Mui'

export type IconName = keyof typeof Icons

export interface IconProps extends MuiIconProps {
  name: IconName
}

const Icon = forwardRef<HTMLOrSVGElement, IconProps>(({ name, ...props }: IconProps, ref) => {
  const IconComponent = Icons[name] as React.ElementType

  return IconComponent ? <IconComponent ref={ref} {...props} /> : null
})

export default Icon
