import React, { ReactNode, memo } from 'react'

export type MDTitleProps = {
  children: ReactNode
}

const MdTitle = ({ children }: MDTitleProps) => {
  return <h1>{children}</h1>
}

export default memo(MdTitle)
