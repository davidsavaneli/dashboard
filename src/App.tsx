import { MainLayout, Drawer, Header, Breadcrumbs } from './components'
import CustomRouter from './router'
import { routes } from './routes'
import { useTranslation } from 'react-i18next'

import logoSrc from './assets/images/logo.svg'
import userSrc from './assets/images/user.png'

const App = () => {
  const { t } = useTranslation()

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
                icon: 'Profile',
                label: 'Profile',
                onClick: () => console.log('Profile Click'),
              },
              {
                icon: 'HomeTrendUp',
                label: t('save'),
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
