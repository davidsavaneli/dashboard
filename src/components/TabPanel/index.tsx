import { forwardRef } from 'react'
import MuiTabPanel, { TabPanelProps as MuiTabPanelProps } from '@mui/lab/TabPanel'

export interface TabPanelProps extends MuiTabPanelProps {}

const MDTabPanel = forwardRef<HTMLDivElement, TabPanelProps>(({ ...props }: TabPanelProps, ref) => {
  return <MuiTabPanel ref={ref} {...props} />
})

export default MDTabPanel
