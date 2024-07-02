import HomePage from './pages/Home'
import ButtonPage from './pages/Button'
import IconButtonPage from './pages/IconButton'
import FabPage from './pages/Fab'
import SpeedDialPage from './pages/SpeedDial'
import AvatarPage from './pages/Avatar'
import ToggleButtonPage from './pages/ToggleButton'
import CollapseCardPage from './pages/CollapseCard'
import NoDataPage from './pages/NoData'
import RouterLinkPage from './pages/RouterLink'
import LinkPage from './pages/Link'
import BadgePage from './pages/Badge'
import TooltipPage from './pages/Tooltip'
import BreadcrumbsPage from './pages/Breadcrumbs'
import CheckboxPage from './pages/Checkbox'
import RadioPage from './pages/Radio'
import SwitchPage from './pages/Switch'
import TextFieldPage from './pages/TextField'
import SelectPage from './pages/Select'
import AutocompletePage from './pages/Autocomplete'
import DatePickerPage from './pages/DatePicker'
import TimePickerPage from './pages/TimePicker'
import DateTimePickerPage from './pages/DateTimePicker'
import ColorPickerPage from './pages/ColorPicker'
import NumberInputPage from './pages/NumberInput'
import ChipPage from './pages/Chip'
import TextEditorPage from './pages/TextEditor'
import DividerPage from './pages/Divider'
import IconPage from './pages/Icon'
import TitlePage from './pages/Title'
import TextPage from './pages/Text'
import AlertPage from './pages/Alert'
import ToastPage from './pages/Toast'
import LinearProgressPage from './pages/LinearProgress'
import CircularProgressPage from './pages/CircularProgress'
import LoaderLayoutPage from './pages/LoaderLayout'
import MenuPage from './pages/Menu'
import PaginationPage from './pages/Pagination'
import TabsPage from './pages/Tabs'
import CardPage from './pages/Card'

import { MainLayout, Drawer, Header, RouterLink } from './components'
import { IRoutes } from './types'
import CustomRouter from './router'

const routes: IRoutes = {
  mainPath: '/',
  indexElement: <HomePage />,
  items: [
    {
      path: '/home',
      element: <HomePage />,
      children: [],
    },
    {
      path: '/button',
      element: <ButtonPage />,
      children: [],
    },
    {
      path: '/icon-button',
      element: <IconButtonPage />,
      children: [],
    },
    {
      path: '/fab',
      element: <FabPage />,
      children: [],
    },
    {
      path: '/speed-dial',
      element: <SpeedDialPage />,
      children: [],
    },
    {
      path: '/avatar',
      element: <AvatarPage />,
      children: [],
    },
    {
      path: '/toggle-button',
      element: <ToggleButtonPage />,
      children: [],
    },
    {
      path: '/collapse-card',
      element: <CollapseCardPage />,
      children: [],
    },
    {
      path: '/no-data',
      element: <NoDataPage />,
      children: [],
    },
    {
      path: '/router-link',
      element: <RouterLinkPage />,
      children: [],
    },
    {
      path: '/link',
      element: <LinkPage />,
      children: [],
    },
    {
      path: '/badge',
      element: <BadgePage />,
      children: [],
    },
    {
      path: '/tooltip',
      element: <TooltipPage />,
      children: [],
    },
    {
      path: '/breadcrumbs',
      element: <BreadcrumbsPage />,
      children: [],
    },
    {
      path: '/checkbox',
      element: <CheckboxPage />,
      children: [],
    },
    {
      path: '/radio',
      element: <RadioPage />,
      children: [],
    },
    {
      path: '/switch',
      element: <SwitchPage />,
      children: [],
    },
    {
      path: '/text-field',
      element: <TextFieldPage />,
      children: [],
    },
    {
      path: '/select',
      element: <SelectPage />,
      children: [],
    },
    {
      path: '/autocomplete',
      element: <AutocompletePage />,
      children: [],
    },
    {
      path: '/date-picker',
      element: <DatePickerPage />,
      children: [],
    },
    {
      path: '/time-picker',
      element: <TimePickerPage />,
      children: [],
    },
    {
      path: '/date-time-picker',
      element: <DateTimePickerPage />,
      children: [],
    },
    {
      path: '/color-picker',
      element: <ColorPickerPage />,
      children: [],
    },
    {
      path: '/number-input',
      element: <NumberInputPage />,
      children: [],
    },
    {
      path: '/chip',
      element: <ChipPage />,
      children: [],
    },
    {
      path: '/text-editor',
      element: <TextEditorPage />,
      children: [],
    },
    {
      path: '/divider',
      element: <DividerPage />,
      children: [],
    },
    {
      path: '/icon',
      element: <IconPage />,
      children: [],
    },
    {
      path: '/title',
      element: <TitlePage />,
      children: [],
    },
    {
      path: '/text',
      element: <TextPage />,
      children: [],
    },
    {
      path: '/alert',
      element: <AlertPage />,
      children: [],
    },
    {
      path: '/toast',
      element: <ToastPage />,
      children: [],
    },
    {
      path: '/linear-progress',
      element: <LinearProgressPage />,
      children: [],
    },
    {
      path: '/circular-progress',
      element: <CircularProgressPage />,
      children: [],
    },
    {
      path: '/loader-layout',
      element: <LoaderLayoutPage />,
      children: [],
    },
    {
      path: '/menu',
      element: <MenuPage />,
      children: [],
    },
    {
      path: '/pagination',
      element: <PaginationPage />,
      children: [],
    },
    {
      path: '/tabs',
      element: <TabsPage />,
      children: [],
    },
    {
      path: '/card',
      element: <CardPage />,
      children: [],
    },
  ],
}

const App = () => {
  return (
    <div>
      <MainLayout
        drawer={
          <Drawer>
            <DrawerItems />
          </Drawer>
        }
        header={<Header />}
      >
        <CustomRouter routes={routes} />
      </MainLayout>
      <br />
      <br />
    </div>
  )
}

export default App

const DrawerItems = () => (
  <>
    <RouterLink to='/'>Home</RouterLink>
    <br />
    <RouterLink to='/button'>Button</RouterLink>
    <br />
    <RouterLink to='/icon-button'>Icon Button</RouterLink>
    <br />
    <RouterLink to='/fab'>Fab</RouterLink>
    <br />
    <RouterLink to='/speed-dial'>Speed Dial</RouterLink>
    <br />
    <RouterLink to='/avatar'>Avatar</RouterLink>
    <br />
    <RouterLink to='/toggle-button'>Toggle Button</RouterLink>
    <br />
    <RouterLink to='/collapse-card'>Collapse Card</RouterLink>
    <br />
    <RouterLink to='/no-data'>No Data</RouterLink>
    <br />
    <RouterLink to='/router-link'>Router Link</RouterLink>
    <br />
    <RouterLink to='/link'>Link</RouterLink>
    <br />
    <RouterLink to='/badge'>Badge</RouterLink>
    <br />
    <RouterLink to='/tooltip'>Tooltip</RouterLink>
    <br />
    <RouterLink to='/breadcrumbs'>Breadcrumbs</RouterLink>
    <br />
    <RouterLink to='/checkbox'>Checkbox</RouterLink>
    <br />
    <RouterLink to='/radio'>Radio</RouterLink>
    <br />
    <RouterLink to='/switch'>Switch</RouterLink>
    <br />
    <RouterLink to='/text-field'>Text Field</RouterLink>
    <br />
    <RouterLink to='/select'>Select</RouterLink>
    <br />
    <RouterLink to='/autocomplete'>Autocomplete</RouterLink>
    <br />
    <RouterLink to='/date-picker'>Date Picker</RouterLink>
    <br />
    <RouterLink to='/time-picker'>Time Picker</RouterLink>
    <br />
    <RouterLink to='/date-time-picker'>Date Time Picker</RouterLink>
    <br />
    <RouterLink to='/color-picker'>Color Picker</RouterLink>
    <br />
    <RouterLink to='/number-input'>Number Input</RouterLink>
    <br />
    <RouterLink to='/chip'>Chip</RouterLink>
    <br />
    <RouterLink to='/text-editor'>Text Editor</RouterLink>
    <br />
    <RouterLink to='/divider'>Divider</RouterLink>
    <br />
    <RouterLink to='/icon'>Icon</RouterLink>
    <br />
    <RouterLink to='/title'>Title</RouterLink>
    <br />
    <RouterLink to='/text'>Text</RouterLink>
    <br />
    <RouterLink to='/alert'>Alert</RouterLink>
    <br />
    <RouterLink to='/toast'>Toast</RouterLink>
    <br />
    <RouterLink to='/linear-progress'>Linear Progress</RouterLink>
    <br />
    <RouterLink to='/circular-progress'>Circular Progress</RouterLink>
    <br />
    <RouterLink to='/loader-layout'>Loader Layout</RouterLink>
    <br />
    <RouterLink to='/menu'>Menu</RouterLink>
    <br />
    <RouterLink to='/pagination'>Pagination</RouterLink>
    <br />
    <RouterLink to='/tabs'>Tabs</RouterLink>
    <br />
    <RouterLink to='/card'>Card</RouterLink>
    <br />
    <RouterLink to='/nothing-here'>Nothing Here</RouterLink>
    <br />
  </>
)
