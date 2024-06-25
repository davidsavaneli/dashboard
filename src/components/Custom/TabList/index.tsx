import { forwardRef } from 'react'
import { MuiTabList, MuiTabListProps } from '../../Mui'

export interface TabListProps extends MuiTabListProps {}

const MDTabList = forwardRef<HTMLDivElement, TabListProps>(({ ...props }: TabListProps, ref) => {
  return <MuiTabList ref={ref} {...props} />
})

export default MDTabList
