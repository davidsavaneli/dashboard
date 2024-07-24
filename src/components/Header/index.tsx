import IconButton from '../IconButton'
import Avatar from '../Avatar'
import styles from './styles.module.css'

export type HeaderProps = {
  label?: string
}

const Header = ({ label }: HeaderProps) => {
  return (
    <header className={styles.header}>
      <div>
        <IconButton iconName='HambergerMenu' variant='filled' />
      </div>
      <div>
        <Avatar src='https://ableproadmin.com/react/assets/avatar-6-Cv0iCdgR.png'></Avatar>
      </div>
    </header>
  )
}

export default Header
