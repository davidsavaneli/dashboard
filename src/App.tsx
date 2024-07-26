import {
  MainLayout,
  Drawer,
  Header,
  Breadcrumbs,
  IconButton,
  Avatar,
  Menu,
  ListItem,
  ListItemIcon,
  Icon,
  ListItemAvatar,
  ListItemText,
  Text,
  ThemeSwitcher,
} from './components'
import CustomRouter from './router'
import { routes } from './routes'

import logoSrc from './assets/images/logo.svg'

const App = () => {
  return (
    <MainLayout
      drawer={<Drawer routes={routes} openFirstLevel logo={logoSrc} logoAltText='Techzy'></Drawer>}
      header={
        <Header
          burgerMenuIcon={<BurgerMenuIcon />}
          languageIcon={<LanguageIcon />}
          themeSwitcherIcon={<ThemeSwitcher />}
          userMenu={<UserMenu />}
        />
      }
      breadcrumbs={<Breadcrumbs routes={routes} />}
    >
      <CustomRouter routes={routes} />
    </MainLayout>
  )
}

export default App

const BurgerMenuIcon = () => <IconButton iconName='HambergerMenu' variant='filled' iconVariant='Bulk' />

const LanguageIcon = () => (
  <Menu
    component={<IconButton iconName='Global' variant='filled' iconVariant='Bulk' />}
    items={[
      {
        children: <div>(EN) English</div>,
        selected: true,
      },
      {
        children: <div>(KA) Georgian</div>,
      },
    ]}
  />
)

const UserMenu = () => (
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
              <Text size='xs'>d.savaneli@techzy.app</Text>
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
              <Icon name='User' color='primaryLight' />
            </ListItemIcon>
            Profile
          </ListItem>
        ),
      },
      {
        children: (
          <ListItem>
            <ListItemIcon>
              <Icon name='HomeTrendUp' color='primaryLight' />
            </ListItemIcon>
            Dashboard
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
              <Icon name='LogoutCurve' color='primaryLight' />
            </ListItemIcon>
            Log Out
          </ListItem>
        ),
        onClick: () => console.log('Log Out'),
      },
    ]}
  />
)
