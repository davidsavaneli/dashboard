import { forwardRef } from 'react'
import { MuiChip, MuiChipProps, MuiChipTypeMap } from '../../Mui'

export interface ChipProps extends MuiChipProps {}
export interface ChipTypeMap extends MuiChipTypeMap {}

const Chip = forwardRef<HTMLDivElement, ChipProps>(({ ...props }: ChipProps, ref) => {
  return <MuiChip ref={ref} {...props} />
})

export default Chip
