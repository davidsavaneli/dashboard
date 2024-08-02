import ButtonPage from './pages/Button'
import IconButtonPage from './pages/IconButton'
import ToggleButtonPage from './pages/ToggleButton'
import SpeedDialPage from './pages/SpeedDial'
import AvatarPage from './pages/Avatar'
import BadgePage from './pages/Badge'
import TooltipPage from './pages/Tooltip'
import CheckboxPage from './pages/Checkbox'
import RadioPage from './pages/Radio'
import SwitchPage from './pages/Switch'
import TextFieldPage from './pages/TextField'
import SelectPage from './pages/Select'
import AutocompletePage from './pages/Autocomplete'
import DatePickerPage from './pages/DatePicker'
import TimePickerPage from './pages/TimePicker'
import DateTimePickerPage from './pages/DateTimePicker'
import ChipPage from './pages/Chip'
import IconPage from './pages/Icon'
import TitlePage from './pages/Title'
import TextPage from './pages/Text'
import AlertPage from './pages/Alert'
import ToastPage from './pages/Toast'
import CircularProgressPage from './pages/CircularProgress'
import LinearProgressPage from './pages/LinearProgress'
import MenuPage from './pages/Menu'
import CardPage from './pages/Card'
import FormValidationsPage from './pages/FormValidations'
import ColorPickerPage from './pages/ColorPicker'
import TextEditorPage from './pages/TextEditor'
import UseMediaQueryPage from './pages/UseMediaQuery'
import RouterLinkPage from './pages/RouterLink'
import LinkPage from './pages/Link'
import NumberInputPage from './pages/NumberInput'
import DialogPage from './pages/Dialog'
import TabsPage from './pages/Tabs'
import NoDataPage from './pages/NoData'
import PaginationPage from './pages/Pagination'

import { IRoutes } from './router'

export const routes: IRoutes = {
  mainPath: '/',
  indexElement: <>Dashboard</>,
  items: [
    {
      name: 'Dashboard',
      path: '/',
      iconName: 'HomeTrendUp',
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
          iconName: 'NoteText',
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
              name: 'Icon Button',
              path: '/components/forms/icon-button',
              iconName: '',
              element: <IconButtonPage />,
              children: [],
            },
            {
              name: 'Toggle Button',
              path: '/components/forms/toggle-button',
              iconName: '',
              element: <ToggleButtonPage />,
              children: [],
            },
            {
              name: 'Checkbox',
              path: '/components/forms/checkbox',
              iconName: '',
              element: <CheckboxPage />,
              children: [],
            },
            {
              name: 'Radio',
              path: '/components/forms/radio',
              iconName: '',
              element: <RadioPage />,
              children: [],
            },
            {
              name: 'Switch',
              path: '/components/forms/switch',
              iconName: '',
              element: <SwitchPage />,
              children: [],
            },
            {
              name: 'Text Field',
              path: '/components/forms/text-field',
              iconName: '',
              element: <TextFieldPage />,
              children: [],
            },
            {
              name: 'Select',
              path: '/components/forms/select',
              iconName: '',
              element: <SelectPage />,
              children: [],
            },
            {
              name: 'Autocomplete',
              path: '/components/forms/autocomplete',
              iconName: '',
              element: <AutocompletePage />,
              children: [],
            },
            {
              name: 'Date Picker',
              path: '/components/forms/date-picker',
              iconName: '',
              element: <DatePickerPage />,
              children: [],
            },
            {
              name: 'Time Picker',
              path: '/components/forms/time-picker',
              iconName: '',
              element: <TimePickerPage />,
              children: [],
            },
            {
              name: 'Date & Time Picker',
              path: '/components/forms/date-time-picker',
              iconName: '',
              element: <DateTimePickerPage />,
              children: [],
            },
            {
              name: 'Color Picker',
              path: '/components/forms/color-picker',
              iconName: '',
              element: <ColorPickerPage />,
              children: [],
            },
            {
              name: 'Number Input',
              path: '/components/forms/number-input',
              iconName: '',
              element: <NumberInputPage />,
              children: [],
            },
            {
              name: 'Text Editor',
              path: '/components/forms/text-editor',
              iconName: '',
              element: <TextEditorPage />,
              children: [],
            },
            {
              name: 'Form Validations',
              path: '/components/forms/form-validations',
              iconName: '',
              element: <FormValidationsPage />,
              children: [],
            },
          ],
        },
        {
          name: 'Data Display',
          path: '/components/data-display',
          iconName: 'Box1',
          element: '',
          children: [
            {
              name: 'Avatar',
              path: '/components/data-display/avatar',
              iconName: '',
              element: <AvatarPage />,
              children: [],
            },
            {
              name: 'Badge',
              path: '/components/data-display/badge',
              iconName: '',
              element: <BadgePage />,
              children: [],
            },
            {
              name: 'Chip',
              path: '/components/data-display/chip',
              iconName: '',
              element: <ChipPage />,
              children: [],
            },
            {
              name: 'Icon',
              path: '/components/data-display/icon',
              iconName: '',
              element: <IconPage />,
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
            {
              name: 'Tooltip',
              path: '/components/data-display/tooltip',
              iconName: '',
              element: <TooltipPage />,
              children: [],
            },
          ],
        },
        {
          name: 'Navigation',
          path: '/components/navigation',
          iconName: 'ConvertCard',
          element: '',
          children: [
            {
              name: 'Menu',
              path: '/components/navigation/menu',
              iconName: '',
              element: <MenuPage />,
              children: [],
            },
            {
              name: 'Tabs',
              path: '/components/navigation/tabs',
              iconName: '',
              element: <TabsPage />,
              children: [],
            },
            {
              name: 'Pagination',
              path: '/components/navigation/pagination',
              iconName: '',
              element: <PaginationPage />,
              children: [],
            },
            {
              name: 'Speed Dial',
              path: '/components/navigation/speed-dial',
              iconName: '',
              element: <SpeedDialPage />,
              children: [],
            },
            {
              name: 'Router Link',
              path: '/components/navigation/router-link',
              iconName: '',
              element: <RouterLinkPage />,
              children: [],
            },
            {
              name: 'Link',
              path: '/components/navigation/link',
              iconName: '',
              element: <LinkPage />,
              children: [],
            },
          ],
        },
        {
          name: 'Feedback',
          path: '/components/feedback',
          iconName: 'I3Square',
          element: '',
          children: [
            {
              name: 'Dialog',
              path: '/components/forms/dialog',
              iconName: '',
              element: <DialogPage />,
              children: [],
            },
            {
              name: 'Alert',
              path: '/components/forms/alert',
              iconName: '',
              element: <AlertPage />,
              children: [],
            },
            {
              name: 'Toast',
              path: '/components/forms/toast',
              iconName: '',
              element: <ToastPage />,
              children: [],
            },
            {
              name: 'Circular Progress',
              path: '/components/forms/circular-progress',
              iconName: '',
              element: <CircularProgressPage />,
              children: [],
            },
            {
              name: 'Linear Progress',
              path: '/components/forms/linear-progress',
              iconName: '',
              element: <LinearProgressPage />,
              children: [],
            },
          ],
        },
        {
          name: 'Other',
          path: '/components/other',
          iconName: 'Code',
          element: '',
          children: [
            {
              name: 'No Data',
              path: '/components/forms/no-data',
              iconName: '',
              element: <NoDataPage />,
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
          iconName: '',
          element: <UseMediaQueryPage />,
          children: [],
        },
      ],
    },
  ],
}
