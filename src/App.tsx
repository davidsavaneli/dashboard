import { MainLayout, Drawer, Header } from './components'
import CustomRouter from './router'
import { routes } from './routes'

const App = () => (
  <MainLayout drawer={<Drawer routes={routes}></Drawer>} header={<Header />}>
    <CustomRouter routes={routes} />
  </MainLayout>
)

export default App
