import MuiFab, { FabProps as MuiFabProps } from '@mui/material/Fab'

export interface FabProps extends MuiFabProps {}

export const Fab = ({ ...props }: FabProps) => {
  return <MuiFab {...props} />
}
