import { forwardRef } from 'react'
import { MuiFab, MuiFabProps } from '../../Mui'

export interface FabProps extends MuiFabProps {}

const Fab = forwardRef<HTMLButtonElement, FabProps>(({ ...props }: FabProps, ref) => {
  return <MuiFab ref={ref} {...props} />
})

export default Fab
