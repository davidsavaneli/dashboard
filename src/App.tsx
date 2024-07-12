import { MainLayout, Drawer, Header, Breadcrumbs } from './components'
import CustomRouter from './router'
import { routes } from './routes'
import logoSrc from './assets/images/logo.svg'

const App = () => (
  <MainLayout
    drawer={<Drawer routes={routes} openFirstLevel logo={logoSrc} logoAltText='Techzy'></Drawer>}
    header={<Header />}
    breadcrumbs={<Breadcrumbs routes={routes} />}
  >
    <CustomRouter routes={routes} />
  </MainLayout>
)

export default App
