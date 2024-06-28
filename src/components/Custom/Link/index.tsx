import { Link as RouterLink, LinkProps as RouterLinkProps } from 'react-router-dom'

export interface LinkProps extends Omit<RouterLinkProps, 'to'> {
  to?: string
}

const Link = ({ to, ...props }: LinkProps) => {
  return to ? <RouterLink to={to} {...props} /> : <a {...props} />
}

export default Link
