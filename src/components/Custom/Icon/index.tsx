import React, { memo } from 'react'
import * as MdIcons from 'react-icons/md'
import * as AiIcons from 'react-icons/ai'

export type MDIconProps = {
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

const MdIcon = ({ name, size }: MDIconProps) => {
  const IconComponent = getIcon(name)
  if (!IconComponent) return null

  return <IconComponent size={size} />
}

export default memo(MdIcon)
