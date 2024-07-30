import { MainLayout, Drawer, Header, Breadcrumbs } from './components'
import CustomRouter from './router'
import { routes } from './routes'

import logoSrc from './assets/images/logo.svg'
import userSrc from './assets/images/user.png'

const App = () => {
  return (
    <MainLayout
      drawer={<Drawer routes={routes} openFirstLevel logo={logoSrc} logoAltText='Techzy'></Drawer>}
      header={
        <Header
          user={{
            image: userSrc,
            name: 'David Savaneli 1',
            secondaryLabel: 'd.savaneli@techzy.app',
            menuItems: [
              {
                icon: 'User',
                label: 'Profile',
                onClick: () => console.log('Profile Click'),
              },
              {
                icon: 'HomeTrendUp',
                label: 'Dashboard',
                onClick: () => console.log('Dashboard Click'),
              },
            ],
            onLogout: () => console.log('Logout'),
          }}
        />
      }
      breadcrumbs={<Breadcrumbs routes={routes} />}
    >
      <CustomRouter routes={routes} />
    </MainLayout>
  )
}

export default App
