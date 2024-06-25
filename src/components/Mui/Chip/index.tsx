import MuiChip, { ChipProps as MuiChipProps, ChipTypeMap as MuiChipTypeMap } from '@mui/material/Chip'

export interface ChipProps extends MuiChipProps {}
export interface ChipTypeMap extends MuiChipTypeMap {}

export const Chip = ({ ...props }: ChipProps) => {
  return <MuiChip {...props} />
}
