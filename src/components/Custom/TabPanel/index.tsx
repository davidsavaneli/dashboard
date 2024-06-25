import { forwardRef } from 'react'
import { MuiTabPanel, MuiTabPanelProps } from '../../Mui'

export interface TabPanelProps extends MuiTabPanelProps {}

const MDTabPanel = forwardRef<HTMLDivElement, TabPanelProps>(({ ...props }: TabPanelProps, ref) => {
  return <MuiTabPanel ref={ref} {...props} />
})

export default MDTabPanel
