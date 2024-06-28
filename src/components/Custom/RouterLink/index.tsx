import { Link, LinkProps } from 'react-router-dom'

export interface RouterLinkProps extends Omit<LinkProps, 'to'> {
  to?: string
}

const RouterLink = ({ to, ...props }: RouterLinkProps) => {
  return to ? <Link to={to} {...props} /> : <a {...props} />
}

export default RouterLink
