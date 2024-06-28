import MuiLinearProgress, { LinearProgressProps as MuiLinearProgressProps } from '@mui/material/LinearProgress'

export interface LinearProgressProps extends MuiLinearProgressProps {}

export const LinearProgress = ({ ...props }: LinearProgressProps) => {
  return <MuiLinearProgress {...props} />
}
