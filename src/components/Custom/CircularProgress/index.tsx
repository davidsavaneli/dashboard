import { forwardRef } from 'react'
import { MuiCircularProgress, MuiCircularProgressProps } from '../../Mui'

export interface CircularProgressProps extends MuiCircularProgressProps {}

const CircularProgress = forwardRef<HTMLDivElement, CircularProgressProps>(
  ({ ...props }: CircularProgressProps, ref) => {
    return <MuiCircularProgress ref={ref} {...props} />
  },
)

export default CircularProgress
