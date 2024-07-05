import { MuiDivider, MuiDividerProps } from '../../Mui'
import './styles.css'

export interface DividerProps extends MuiDividerProps {}

const Divider = ({ ...props }: DividerProps) => {
  return <MuiDivider {...props} />
}

export default Divider
