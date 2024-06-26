import { forwardRef } from 'react'
import { MuiLinearProgress, MuiLinearProgressProps } from '../../Mui'

export interface LinearProgressProps extends MuiLinearProgressProps {}

const LinearProgress = forwardRef<HTMLDivElement, LinearProgressProps>(({ ...props }: LinearProgressProps, ref) => {
  return <MuiLinearProgress ref={ref} {...props} />
})

export default LinearProgress
