import MuiSelect, {
  SelectProps as MuiSelectProps,
  SelectChangeEvent as MuiSelectChangeEvent,
} from '@mui/material/Select'

export type SelectProps = MuiSelectProps
export type SelectChangeEvent<T = { name?: string; value: unknown }> = MuiSelectChangeEvent<T>

export const Select = ({ ...props }: SelectProps) => {
  return <MuiSelect {...props} />
}
