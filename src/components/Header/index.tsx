import Menu from '../Menu'
import ListItem from '../ListItem'
import ListItemIcon from '../ListItemIcon'
import ListItemAvatar from '../ListItemAvatar'
import ListItemText from '../ListItemText'
import Text from '../Text'
import Avatar from '../Avatar'
import IconButton from '../IconButton'
import ThemeSwitcher from '../ThemeSwitcher'
import Icon, { IconName } from '../Icon'

import EnFlag from '../../assets/images/english.svg'
import KaFlag from '../../assets/images/georgian.svg'

import styles from './styles.module.css'

export interface HeaderProps {
  languages?: boolean
  themeSwitcher?: boolean
  user: UserProps
}

export interface UserProps {
  image?: string
  name: string
  secondaryLabel?: string
  menuItems?: UserMenuItemsProps[]
  onLogout: () => void
}

export interface UserMenuItemsProps {
  label: string
  icon?: IconName
  onClick?: () => void
}

const Header = ({ languages = true, themeSwitcher = true, user }: HeaderProps) => {
  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <BurgerMenu />
      </div>
      <div className={styles.right}>
        <div className={styles.icons}>
          {languages && <Languages />}
          {themeSwitcher && <ThemeSwitcher />}
        </div>
        <UserMenu user={user} />
      </div>
    </header>
  )
}

export default Header

const BurgerMenu = () => <IconButton iconName='HambergerMenu' variant='filled' iconVariant='Bulk' />

const Languages = () => (
  <Menu
    component={<IconButton iconName='Global' variant='filled' iconVariant='Bulk' />}
    items={[
      {
        children: (
          <ListItem>
            <ListItemIcon>
              <Avatar src={EnFlag} alt='English' size='xs'></Avatar>
            </ListItemIcon>
            English
          </ListItem>
        ),
        selected: true,
      },
      {
        children: (
          <ListItem>
            <ListItemIcon>
              <Avatar src={KaFlag} alt='Georgian' size='xs'></Avatar>
            </ListItemIcon>
            Georgian
          </ListItem>
        ),
      },
    ]}
  />
)

const UserMenu = ({ user }: { user: UserProps }) => (
  <div className={styles.userMenu}>
    <Menu
      size='md'
      component={
        user.image ? <Avatar src={user.image} size='lg'></Avatar> : <Avatar size='lg' iconName='Profile'></Avatar>
      }
      items={[
        {
          children: (
            <ListItem
              secondaryAction={
                <IconButton
                  tooltipTitle='Logout'
                  iconName='LogoutCurve'
                  variant='filled'
                  color='error'
                  onClick={user.onLogout}
                />
              }
            >
              <ListItemAvatar>
                {user.image ? (
                  <Avatar src={user.image} size='lg'></Avatar>
                ) : (
                  <Avatar size='lg' iconName='Profile'></Avatar>
                )}
              </ListItemAvatar>
              <ListItemText>
                <Text color='primary' weight='medium'>
                  {user.name}
                </Text>
                {user.secondaryLabel && <Text size='xs'>{user.secondaryLabel}</Text>}
              </ListItemText>
            </ListItem>
          ),
          nonClickable: true,
        },
        {
          divider: true,
        },
        ...(user.menuItems?.map(({ icon, label, onClick }) => ({
          children: (
            <ListItem>
              {icon && (
                <ListItemIcon>
                  <Icon name={icon} color='primaryLight' />
                </ListItemIcon>
              )}
              {label}
            </ListItem>
          ),
          onClick: onClick,
          nonClickable: onClick === undefined,
        })) ?? []),
        {
          divider: true,
        },
        {
          children: (
            <ListItem>
              <ListItemIcon>
                <Icon name='LogoutCurve' color='primaryLight' />
              </ListItemIcon>
              Logout
            </ListItem>
          ),
          onClick: user.onLogout,
        },
      ]}
    />
  </div>
)
