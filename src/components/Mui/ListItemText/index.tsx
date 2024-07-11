import MuiListItemText, { ListItemTextProps as MuiListItemTextProps } from '@mui/material/ListItemText'

export interface ListItemTextProps extends MuiListItemTextProps {}

export const ListItemText = ({ ...props }: ListItemTextProps) => {
  return <MuiListItemText {...props} />
}
