import { forwardRef } from 'react'
import clsx from 'clsx'
import { MuiChip, MuiChipProps, MuiChipTypeMap } from '../../Mui'

import './styles.css'

export interface ChipProps extends MuiChipProps {}
export interface ChipTypeMap extends MuiChipTypeMap {}

const Chip = forwardRef<HTMLDivElement, ChipProps>(({ ...props }: ChipProps, ref) => {
  return <MuiChip ref={ref} {...props} />
})

export default Chip
