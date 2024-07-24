import { forwardRef } from 'react'
import MuiTabList, { TabListProps as MuiTabListProps } from '@mui/lab/TabList'

export interface TabListProps extends MuiTabListProps {}

const MDTabList = forwardRef<HTMLDivElement, TabListProps>(({ ...props }: TabListProps, ref) => {
  return <MuiTabList ref={ref} {...props} />
})

export default MDTabList
