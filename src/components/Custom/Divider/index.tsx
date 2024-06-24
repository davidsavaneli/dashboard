import React, { memo } from 'react'
import Divider, { DividerProps } from '@mui/material/Divider'

export type MDDividerProps = DividerProps

const MDDivider = ({ ...props }: MDDividerProps) => {
  return <Divider {...props} />
}

export default memo(MDDivider)
