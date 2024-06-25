import MuiTabPanel, { TabPanelProps as MuiTabPanelProps } from '@mui/lab/TabPanel'

export interface TabPanelProps extends MuiTabPanelProps {}

export const TabPanel = ({ ...props }: TabPanelProps) => {
  return <MuiTabPanel {...props} />
}
