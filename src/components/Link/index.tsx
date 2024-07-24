import MuiLink, { LinkProps as MuiLinkProps } from '@mui/material/Link'

export interface LinkProps extends MuiLinkProps {}

const Link = ({ ...props }: LinkProps) => {
  return <MuiLink {...props} />
}

export default Link
