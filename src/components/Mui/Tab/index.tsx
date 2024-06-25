import MuiTab, { TabProps as MuiTabProps } from '@mui/material/Tab'

export interface TabProps extends MuiTabProps {}

export const Tab = ({ ...props }: TabProps) => {
  return <MuiTab {...props} />
}
