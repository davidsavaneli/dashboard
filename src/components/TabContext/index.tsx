import MuiTabContext, { TabContextProps as MuiTabContextProps } from '@mui/lab/TabContext'

export interface TabContextProps extends MuiTabContextProps {}

const MDTabContext = ({ ...props }: TabContextProps) => {
  return <MuiTabContext {...props} />
}

export default MDTabContext
