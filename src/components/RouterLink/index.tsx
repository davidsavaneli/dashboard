import { Link, LinkProps } from 'react-router-dom'

import styles from './styles.module.css'

export interface RouterLinkProps extends Omit<LinkProps, 'to'> {
  to?: string
}

const RouterLink = ({ to, ...props }: RouterLinkProps) => {
  return to ? <Link className={styles.routerLink} to={to} {...props} /> : <a {...props} />
}

export default RouterLink
