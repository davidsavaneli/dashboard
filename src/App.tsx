import HomePage from './pages/Home'
import ButtonPage from './pages/Button'
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

import {
  MainLayout,
  Drawer,
  Header,
  ContentLayout,
  Card,
  Checkbox,
  FormGroup,
  FormLabel,
  RadioGroup,
  Radio,
  Switch,
  TextField,
  Autocomplete,
  Chip,
  LocalizationProvider,
  TimePicker,
  DatePicker,
  DateTimePicker,
  Alert,
  Pagination,
  Menu,
  Title,
  Text,
  Divider,
  ColorPicker,
  Select,
  LoaderLayout,
  LinearProgress,
  NumberInput,
  TextEditor,
  Button,
  Icon,
  Toast,
  Tabs,
  Tooltip,
  Breadcrumbs,
  RouterLink,
  Link,
  Badge,
  Avatar,
  ToggleButtonGroup,
  ToggleButton,
  IconButton,
  NoData,
  CollapseCard,
} from './components'
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
    <RouterLink to='/nothing-here'>Nothing Here</RouterLink>
    <br />
  </>
)

/////////

const tabs = [
  { id: 0, label: 'Tab One', name: 'tabName1', content: <>Content of Tab One</>, defaultOpen: false },
  { id: 1, label: 'Tab Two', name: 'tabName2', content: <>Content of Tab Two</>, defaultOpen: true },
  { id: 2, label: 'Tab Three', name: 'tabName3', content: <>Content of Tab Three</>, defaultOpen: false },
]

const Home = () => {
  return (
    <div>
      <hr />

      <hr />
      <NumberInput max={5} value={0} onValueChange={(e) => console.log(e)} />
      <hr />
      <Chip label='Chip' onDelete={() => console.log('Delete')} />
      <hr />
      <TextEditor size='small' editorId='1' value='' placeholder='Description' onChange={(e) => console.log(e)} />
      <hr />
      <Divider />
      <hr />
      <Icon name='Home' />
      <hr />
      <Title>Title</Title>
      <hr />
      <Text>Text</Text>
      <hr />
      <Alert severity='success'>This is an outlined success Alert.</Alert>
      <hr />
      <Button onClick={() => Toast.success('Success toast text ...')}>Toast</Button>
      <hr />
      <LoaderLayout isLoading>Content ...</LoaderLayout>
      <hr />
      <LinearProgress />
      <hr />
      <Menu
        component={<Button>Menu</Button>}
        items={[
          {
            children: <div>some element</div>,
            onClick: () => console.log('Do not close'),
            disableClose: true,
          },
          {
            children: <div>some element</div>,
            onClick: () => console.log('Default close on click'),
          },
        ]}
      />
      <hr />
      <Pagination count={10} />
      <hr />
      <Tabs tabs={tabs} onChange={(e, newValue: number) => console.log(newValue)} />
    </div>
  )
}
