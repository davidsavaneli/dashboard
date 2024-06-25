import { forwardRef } from 'react'
import * as MdIcons from 'react-icons/md'
import * as AiIcons from 'react-icons/ai'
import { IconBaseProps } from 'react-icons'

export interface IconProps extends Omit<IconBaseProps, 'size'> {
  name: string
  size?: number | string
}

const getIcon = (name: string) => {
  const mdIcon = MdIcons[name as keyof typeof MdIcons]
  if (mdIcon) return mdIcon

  const aiIcon = AiIcons[name.replace('Md', 'Ai') as keyof typeof AiIcons]
  if (aiIcon) return aiIcon

  return null
}

const Icon = forwardRef<HTMLSpanElement, IconProps>(({ name, size, ...rest }: IconProps, ref) => {
  const IconComponent = getIcon(name)
  if (!IconComponent) return null

  const iconProps = {
    ...rest,
    size,
    ref: ref as React.RefObject<HTMLElement>,
  }

  return <IconComponent {...iconProps} />
})

export default Icon
