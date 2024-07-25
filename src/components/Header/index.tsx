import IconButton from '../IconButton'
import Avatar from '../Avatar'
import styles from './styles.module.css'
import Menu from '../Menu'
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
          size='md'
          component={<Avatar src='https://ableproadmin.com/react/assets/avatar-6-Cv0iCdgR.png' size='lg'></Avatar>}
          items={[
            {
              children: (
                <ListItem
                  secondaryAction={
                    <IconButton
                      iconName='LogoutCurve'
                      variant='filled'
                      color='error'
                      onClick={() => console.log('Log Out')}
                    />
                  }
                >
                  <ListItemAvatar>
                    <Avatar src='https://ableproadmin.com/react/assets/avatar-6-Cv0iCdgR.png' size='lg'></Avatar>
                  </ListItemAvatar>
                  <ListItemText>
                    <Text color='primary' weight='medium'>
                      David Savaneli
                    </Text>
                    <Text size='xs'>UI/UX Designer</Text>
                  </ListItemText>
                </ListItem>
              ),
              nonClickable: true,
            },
            {
              divider: true,
            },
            {
              children: (
                <ListItem>
                  <ListItemIcon>
                    <Icon name='HomeTrendUp' />
                  </ListItemIcon>
                  Dashboard
                </ListItem>
              ),
            },
            {
              children: (
                <ListItem>
                  <ListItemIcon>
                    <Icon name='User' />
                  </ListItemIcon>
                  Profile
                </ListItem>
              ),
            },
            {
              children: (
                <ListItem>
                  <ListItemIcon>
                    <Icon name='Box1' />
                  </ListItemIcon>
                  UI Elements
                </ListItem>
              ),
            },
            {
              divider: true,
            },
            {
              children: (
                <ListItem>
                  <ListItemIcon>
                    <Icon name='LogoutCurve' />
                  </ListItemIcon>
                  Log Out
                </ListItem>
              ),
              onClick: () => console.log('Log Out'),
            },
          ]}
        />
      </div>
    </header>
  )
}

export default Header
