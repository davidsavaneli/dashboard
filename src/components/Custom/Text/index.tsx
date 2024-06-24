import React, { ReactNode, memo } from 'react'

export type MDTextProps = {
  children: ReactNode
}

const MdText = ({ children }: MDTextProps) => {
  return <p>{children}</p>
}

export default memo(MdText)
