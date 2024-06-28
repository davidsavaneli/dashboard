import MuiLink, { LinkProps as MuiLinkProps } from '@mui/material/Link'

export interface LinkProps extends MuiLinkProps {}

export const Link = ({ ...props }: LinkProps) => {
  return <MuiLink {...props} />
}
