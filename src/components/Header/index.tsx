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
import useHideDrawer from '../../hooks/useHideDrawer'

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

const BurgerMenu = () => {
  const { toggleHideDrawer } = useHideDrawer()

  return <IconButton iconName='HambergerMenu' variant='filled' onClick={toggleHideDrawer} />
}

const Languages = () => (
  <Menu
    component={<IconButton iconName='Global' variant='filled' iconVariant='Bulk' />}
    items={[
      {
        children: (
          <ListItem>
            <ListItemIcon>
              <Avatar size='xs' color='primary'>
                <svg xmlns='http://www.w3.org/2000/svg' id='flag-icons-gb' viewBox='0 0 640 480'>
                  <path fill='#012169' d='M0 0h640v480H0z' />
                  <path
                    fill='#FFF'
                    d='m75 0 244 181L562 0h78v62L400 241l240 178v61h-80L320 301 81 480H0v-60l239-178L0 64V0z'
                  />
                  <path
                    fill='#C8102E'
                    d='m424 281 216 159v40L369 281zm-184 20 6 35L54 480H0zM640 0v3L391 191l2-44L590 0zM0 0l239 176h-60L0 42z'
                  />
                  <path fill='#FFF' d='M241 0v480h160V0zM0 160v160h640V160z' />
                  <path fill='#C8102E' d='M0 193v96h640v-96zM273 0v480h96V0z' />
                </svg>
              </Avatar>
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
              <Avatar size='xs' color='primary'>
                <svg xmlns='http://www.w3.org/2000/svg' id='flag-icons-ge' viewBox='0 0 640 480'>
                  <path fill='#fff' d='M0 0h640v480H0z' />
                  <path fill='red' d='M272 0h96v480h-96z' />
                  <path fill='red' d='M0 192h640v96H0z' />
                  <path
                    fill='red'
                    fillRule='evenodd'
                    d='M146.8 373.1c1-16.8 4-31.1 4-31.1s-9.8 1-14.8 1c-4.9 0-14.8-1-14.8-1s3 14.3 4 31.2c-16.9-1-31.2-4-31.2-4s1 7.4 1 14.8-1 14.8-1 14.8 14.3-3 31.2-4c-1 16.9-4 31.2-4 31.2s7.4-1 14.8-1 14.8 1 14.8 1-3-14.3-4-31.2c16.9 1 31.2 4 31.2 4s-1-9.8-1-14.8c0-4.9 1-14.8 1-14.8s-14.3 3-31.1 4zm368-288c1-16.8 4-31.1 4-31.1s-9.8 1-14.8 1c-4.9 0-14.8-1-14.8-1s3 14.3 4 31.1c-16.9-1-31.2-3.9-31.2-3.9s1 7.4 1 14.8-1 14.8-1 14.8 14.3-3 31.2-4c-1 16.9-4 31.2-4 31.2s7.4-1 14.8-1 14.8 1 14.8 1-3-14.3-4-31.1c16.9 1 31.2 4 31.2 4s-1-10-1-14.9 1-14.8 1-14.8-14.3 3-31.2 4zm-368 0c1-16.8 4-31.1 4-31.1s-9.8 1-14.8 1c-4.9 0-14.8-1-14.8-1s3 14.3 4 31.2c-16.9-1-31.2-4-31.2-4s1 7.4 1 14.8-1 14.8-1 14.8 14.3-3 31.2-4c-1 16.9-4 31.2-4 31.2s7.4-1 14.8-1 14.8 1 14.8 1-3-14.3-4-31.2c16.9 1 31.2 4 31.2 4s-1-9.8-1-14.8c0-4.9 1-14.8 1-14.8s-14.3 3-31.1 4zm368 288c1-16.8 4-31.1 4-31.1s-9.8 1-14.8 1c-4.9 0-14.8-1-14.8-1s3 14.3 4 31.2c-16.9-1-31.2-4-31.2-4s1 7.4 1 14.8-1 14.8-1 14.8 14.3-3 31.2-4c-1 16.9-4 31.2-4 31.2s7.4-1 14.8-1 14.8 1 14.8 1-3-14.3-4-31.2c16.9 1 31.2 4 31.2 4s-1-9.8-1-14.8c0-4.9 1-14.8 1-14.8s-14.3 3-31.2 4z'
                  />
                </svg>
              </Avatar>
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
