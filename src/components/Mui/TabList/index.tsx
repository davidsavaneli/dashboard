import MuiTabList, { TabListProps as MuiTabListProps } from '@mui/lab/TabList'

export interface TabListProps extends MuiTabListProps {}

export const TabList = ({ ...props }: TabListProps) => {
  return <MuiTabList {...props} />
}
