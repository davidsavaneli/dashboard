import MuiLink, { LinkProps as MuiLinkProps } from '@mui/material/Link'

import './styles.css'

export interface LinkProps extends MuiLinkProps {}

const Link = ({ ...props }: LinkProps) => {
  return <MuiLink {...props} />
}

export default Link
