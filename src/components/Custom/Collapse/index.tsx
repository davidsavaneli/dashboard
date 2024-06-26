import { forwardRef } from 'react'
import { MuiCollapse, MuiCollapseProps } from '../../Mui'

export interface CollapseProps extends MuiCollapseProps {}

const Collapse = forwardRef<HTMLDivElement, CollapseProps>(({ ...props }: CollapseProps, ref) => {
  return <MuiCollapse ref={ref} {...props} />
})

export default Collapse
