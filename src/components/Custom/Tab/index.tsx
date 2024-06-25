import { forwardRef } from 'react'
import { MuiTab, MuiTabProps } from '../../Mui'

export interface TabProps extends MuiTabProps {}

const MDTab = forwardRef<HTMLDivElement, TabProps>(({ ...props }: TabProps, ref) => {
  return <MuiTab ref={ref} {...props} />
})

export default MDTab
