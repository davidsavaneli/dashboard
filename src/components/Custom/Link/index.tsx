import { MuiLink, MuiLinkProps } from '../../Mui'

export interface LinkProps extends MuiLinkProps {}

const Link = ({ ...props }: LinkProps) => {
  return <MuiLink {...props} />
}

export default Link
