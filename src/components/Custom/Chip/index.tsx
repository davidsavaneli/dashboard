import React, { forwardRef, memo } from 'react'
import Chip, { ChipProps } from '@mui/material/Chip'
import FormControlLabel from '../FormControlLabel'

export type MDChipProps = ChipProps

const MDChip = forwardRef<HTMLDivElement, MDChipProps>(({ ...props }, ref) => {
  return <Chip ref={ref} {...props} />
})

export default memo(MDChip)
