import { MuiTabContext, MuiTabContextProps } from '../../Mui'

export interface TabContextProps extends MuiTabContextProps {}

const MDTabContext = ({ ...props }: TabContextProps) => {
  return <MuiTabContext {...props} />
}

export default MDTabContext
