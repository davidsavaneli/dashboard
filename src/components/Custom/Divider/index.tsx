import { MuiDivider, MuiDividerProps } from '../../Mui'

export interface DividerProps extends MuiDividerProps {}

const Divider = ({ ...props }: DividerProps) => {
  return <MuiDivider {...props} />
}

export default Divider
