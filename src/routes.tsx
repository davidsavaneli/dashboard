import HomePage from './pages/Home'
import ButtonPage from './pages/Button'
import IconButtonPage from './pages/IconButton'
import FabPage from './pages/Fab'
import ToggleButtonPage from './pages/ToggleButton'
import SpeedDialPage from './pages/SpeedDial'
import AvatarPage from './pages/Avatar'
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

import { IRoutes } from './router'

export const routes: IRoutes = {
  mainPath: '/',
  indexElement: <>Dashboard</>,
  items: [
    {
      name: 'Dashboard',
      path: '/',
      iconName: 'Home',
      element: <>Dashboard</>,
      children: [],
    },
    {
      name: 'Components',
      path: '/components',
      iconName: '',
      element: '',
      children: [
        {
          name: 'Forms',
          path: '/components/forms',
          iconName: 'Home',
          element: '',
          children: [
            {
              name: 'Button',
              path: '/components/forms/button',
              iconName: '',
              element: <ButtonPage />,
              children: [],
            },
            {
              name: 'Text Field',
              path: '/components/forms/text-field',
              iconName: '',
              element: <TextFieldPage />,
              children: [],
            },
          ],
        },
        {
          name: 'Data Display',
          path: '/components/data-display',
          iconName: 'Trash',
          element: '',
          children: [
            {
              name: 'Icon',
              path: '/components/data-display/icon',
              iconName: '',
              element: <IconPage />,
              children: [],
            },
            {
              name: 'Icon Button',
              path: '/components/data-display/icon-button',
              iconName: '',
              element: <IconButtonPage />,
              children: [],
            },
            {
              name: 'Toggle Button',
              path: '/components/data-display/toggle-button',
              iconName: '',
              element: <ToggleButtonPage />,
              children: [],
            },
            {
              name: 'Floating Action Button',
              path: '/components/data-display/fab',
              iconName: '',
              element: <FabPage />,
              children: [],
            },
            {
              name: 'Speed Dial',
              path: '/components/data-display/speed-dial',
              iconName: '',
              element: <SpeedDialPage />,
              children: [],
            },
            {
              name: 'Title',
              path: '/components/data-display/title',
              iconName: '',
              element: <TitlePage />,
              children: [],
            },
            {
              name: 'Text',
              path: '/components/data-display/text',
              iconName: '',
              element: <TextPage />,
              children: [],
            },
            {
              name: 'Card',
              path: '/components/data-display/card',
              iconName: '',
              element: <CardPage />,
              children: [],
            },
          ],
        },
      ],
    },
    {
      name: 'hooks',
      path: '/hooks',
      iconName: '',
      element: '',
      children: [
        {
          name: 'useMediaQuery',
          path: '/hooks/use-media-query',
          iconName: 'HambergerMenu',
          element: <>useMediaQuery Page</>,
          children: [
            {
              name: 'useMediaQuery inner',
              path: '/hooks/use-media-query/inner',
              iconName: '',
              element: <>useMediaQuery Page inner</>,
              children: [
                {
                  name: 'useMediaQuery inner 2',
                  path: '/hooks/use-media-query/inner/inner',
                  iconName: '',
                  element: <>useMediaQuery Page inner 2</>,
                  children: [],
                },
              ],
            },
          ],
        },
        {
          name: 'useLocalStorage',
          path: '/hooks/use-local-storage',
          iconName: 'TickSquare',
          element: <>useLocalStorage Page</>,
          children: [],
        },
      ],
    },
  ],
}
