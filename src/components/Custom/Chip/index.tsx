import { forwardRef } from 'react'
import { MuiChip, MuiChipProps, MuiChipTypeMap } from '../../Mui'

export interface ChipProps extends MuiChipProps {}
export interface ChipTypeMap extends MuiChipTypeMap {}

const MDChip = forwardRef<HTMLDivElement, ChipProps>(({ ...props }, ref) => {
  return <MuiChip ref={ref} {...props} />
})

export default MDChip
