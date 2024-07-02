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

import { Icon } from './components'

export const routes: IRoutes = {
  mainPath: '/',
  indexElement: <div>HomePage</div>,
  items: [
    {
      name: 'components',
      path: '/components',
      icon: '',
      element: '',
      children: [
        {
          name: 'forms',
          path: '/components/forms',
          icon: <Icon name='Home' />,
          element: '',
          children: [
            {
              name: 'button',
              path: '/components/forms/button',
              icon: '',
              element: <ButtonPage />,
              children: [],
            },
            {
              name: 'text field',
              path: '/components/forms/text-field',
              icon: '',
              element: <TextFieldPage />,
              children: [],
            },
          ],
        },
        {
          name: 'data display',
          path: '/components/data-display',
          icon: <Icon name='Trash' />,
          element: '',
          children: [
            {
              name: 'icon',
              path: '/components/data-display/icon',
              icon: '',
              element: <IconPage />,
              children: [],
            },
            {
              name: 'icon button',
              path: '/components/data-display/icon-button',
              icon: '',
              element: <IconButtonPage />,
              children: [],
            },
            {
              name: 'title',
              path: '/components/data-display/title',
              icon: '',
              element: <TitlePage />,
              children: [],
            },
            {
              name: 'text',
              path: '/components/data-display/text',
              icon: '',
              element: <TextPage />,
              children: [],
            },
          ],
        },
      ],
    },
    {
      name: 'hooks',
      path: '/hooks',
      icon: '',
      element: '',
      children: [
        {
          name: 'useMediaQuery',
          path: '/hooks/use-media-query',
          icon: <Icon name='HambergerMenu' />,
          element: <>useMediaQuery Page</>,
          children: [
            {
              name: 'useMediaQuery inner',
              path: '/hooks/use-media-query/inner',
              icon: '',
              element: <>useMediaQuery Page inner</>,
              children: [
                {
                  name: 'useMediaQuery inner 2',
                  path: '/hooks/use-media-query/inner/inner',
                  icon: '',
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
          icon: <Icon name='TickSquare' />,
          element: <>useLocalStorage Page</>,
          children: [],
        },
      ],
    },
  ],
}
