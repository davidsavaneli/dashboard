import MuiTabContext, { TabContextProps as MuiTabContextProps } from '@mui/lab/TabContext'

export interface TabContextProps extends MuiTabContextProps {}

export const TabContext = ({ ...props }: TabContextProps) => {
  return <MuiTabContext {...props} />
}
