import { MainLayout, Drawer, Header, Breadcrumbs } from './components'
import CustomRouter from './router'
import { routes } from './routes'
const App = () => (
  <MainLayout
    drawer={<Drawer routes={routes} openFirstLevel></Drawer>}
    header={<Header />}
    breadcrumbs={<Breadcrumbs routes={routes} />}
  >
    <CustomRouter routes={routes} />
  </MainLayout>
)

export default App
