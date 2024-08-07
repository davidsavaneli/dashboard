import { forwardRef } from 'react'
import MuiTab, { TabProps as MuiTabProps } from '@mui/material/Tab'

import './styles.css'

export interface TabProps extends MuiTabProps {
  to?: any
}

const MDTab = forwardRef<HTMLDivElement, TabProps>(({ ...props }: TabProps, ref) => {
  return <MuiTab ref={ref} iconPosition='start' {...props} />
})

export default MDTab
