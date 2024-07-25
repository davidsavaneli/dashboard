import IconButton from '../IconButton'
import Avatar from '../Avatar'
import styles from './styles.module.css'
import Menu from '../Menu'
import Button from '../Button'
import ListItem from '../ListItem'
import ListItemIcon from '../ListItemIcon'
import Icon from '../Icon'
import RouterLink from '../RouterLink'
import ListItemAvatar from '../ListItemAvatar'
import ListItemText from '../ListItemText'
import Text from '../Text'

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
        <Menu
          widthSize='md'
          component={<Avatar src='https://ableproadmin.com/react/assets/avatar-6-Cv0iCdgR.png'></Avatar>}
          items={[
            {
              children: (
                <ListItem
                  disablePadding
                  secondaryAction={<IconButton iconName='LogoutCurve' variant='filled' color='error' />}
                >
                  <ListItemAvatar>
                    <Avatar size='lg' src='https://ableproadmin.com/react/assets/avatar-6-Cv0iCdgR.png'></Avatar>
                  </ListItemAvatar>
                  <ListItemText>
                    <Text color='primary' weight='medium'>David Savaneli</Text>
                    <Text size='xs'>UI/UX Designer</Text>
                  </ListItemText>
                </ListItem>
              ),
            },
            {
              divider: true,
            },
            {
              children: <RouterLink to='./dashboard'>Dashboard</RouterLink>,
            },
            {
              children: <>Profile</>,
            },
            {
              children: <>UI Elements</>,
            },
            {
              divider: true,
            },
            {
              children: (
                <ListItem disablePadding>
                  <ListItemIcon>
                    <Icon name='LogoutCurve' />
                  </ListItemIcon>
                  Log Out
                </ListItem>
              ),
            },
          ]}
        />
      </div>
    </header>
  )
}

export default Header
