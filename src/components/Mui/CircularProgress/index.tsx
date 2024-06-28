import MuiCircularProgress, { CircularProgressProps as MuiCircularProgressProps } from '@mui/material/CircularProgress'

export interface CircularProgressProps extends MuiCircularProgressProps {}

export const CircularProgress = ({ ...props }: CircularProgressProps) => {
  return <MuiCircularProgress {...props} />
}
