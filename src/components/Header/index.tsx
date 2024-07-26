import { ReactNode } from 'react'
import styles from './styles.module.css'

export type HeaderProps = {
  burgerMenuIcon?: ReactNode
  userMenu?: ReactNode
  languageIcon?: ReactNode
  themeSwitcherIcon?: ReactNode
}

const Header = ({ burgerMenuIcon, userMenu, languageIcon, themeSwitcherIcon }: HeaderProps) => {
  return (
    <header className={styles.header}>
      <div className={styles.left}>{burgerMenuIcon}</div>
      <div className={styles.right}>
        <div className={styles.icons}>
          {languageIcon}
          {themeSwitcherIcon}
        </div>
        {userMenu && <div className={styles.userMenu}>{userMenu}</div>}
      </div>
    </header>
  )
}

export default Header
