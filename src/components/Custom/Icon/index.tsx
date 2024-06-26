import React, { forwardRef } from 'react'
import { Icons, MuiIconProps } from '../../Mui'

export interface IconProps extends MuiIconProps {
  name: keyof typeof Icons
}

const Icon = forwardRef<HTMLOrSVGElement, IconProps>(({ name, ...props }: IconProps, ref) => {
  const IconComponent = Icons[name] as React.ElementType

  return IconComponent ? <IconComponent ref={ref} {...props} /> : null
})

export default Icon
