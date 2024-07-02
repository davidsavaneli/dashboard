import { MuiIconButton, MuiIconButtonProps } from '../../Mui'

export interface IconButtonProps extends MuiIconButtonProps {}

const IconButton = ({ ...props }: IconButtonProps) => {
  return <MuiIconButton {...props} />
}

export default IconButton
