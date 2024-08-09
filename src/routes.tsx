import { lazy } from 'react'
import { Loadable } from './components'
import { IRoutes } from './router'

const ButtonPage = Loadable(lazy(() => delayForDemo(import('./pages/Button'))))
const IconButtonPage = Loadable(lazy(() => delayForDemo(import('./pages/IconButton'))))
const ToggleButtonPage = Loadable(lazy(() => delayForDemo(import('./pages/ToggleButton'))))
const SpeedDialPage = Loadable(lazy(() => delayForDemo(import('./pages/SpeedDial'))))
const AvatarPage = Loadable(lazy(() => delayForDemo(import('./pages/Avatar'))))
const BadgePage = Loadable(lazy(() => delayForDemo(import('./pages/Badge'))))
const TooltipPage = Loadable(lazy(() => delayForDemo(import('./pages/Tooltip'))))
const CheckboxPage = Loadable(lazy(() => delayForDemo(import('./pages/Checkbox'))))
const RadioPage = Loadable(lazy(() => delayForDemo(import('./pages/Radio'))))
const SwitchPage = Loadable(lazy(() => delayForDemo(import('./pages/Switch'))))
const TextFieldPage = Loadable(lazy(() => delayForDemo(import('./pages/TextField'))))
const SelectPage = Loadable(lazy(() => delayForDemo(import('./pages/Select'))))
const AutocompletePage = Loadable(lazy(() => delayForDemo(import('./pages/Autocomplete'))))
const DatePickerPage = Loadable(lazy(() => delayForDemo(import('./pages/DatePicker'))))
const TimePickerPage = Loadable(lazy(() => delayForDemo(import('./pages/TimePicker'))))
const DateTimePickerPage = Loadable(lazy(() => delayForDemo(import('./pages/DateTimePicker'))))
const ChipPage = Loadable(lazy(() => delayForDemo(import('./pages/Chip'))))
const IconPage = Loadable(lazy(() => delayForDemo(import('./pages/Icon'))))
const TitlePage = Loadable(lazy(() => delayForDemo(import('./pages/Title'))))
const TextPage = Loadable(lazy(() => delayForDemo(import('./pages/Text'))))
const AlertPage = Loadable(lazy(() => delayForDemo(import('./pages/Alert'))))
const ToastPage = Loadable(lazy(() => delayForDemo(import('./pages/Toast'))))
const CircularProgressPage = Loadable(lazy(() => delayForDemo(import('./pages/CircularProgress'))))
const LinearProgressPage = Loadable(lazy(() => delayForDemo(import('./pages/LinearProgress'))))
const MenuPage = Loadable(lazy(() => delayForDemo(import('./pages/Menu'))))
const CardPage = Loadable(lazy(() => delayForDemo(import('./pages/Card'))))
const FormValidationsPage = Loadable(lazy(() => delayForDemo(import('./pages/FormValidations'))))
const ColorPickerPage = Loadable(lazy(() => delayForDemo(import('./pages/ColorPicker'))))
const TextEditorPage = Loadable(lazy(() => delayForDemo(import('./pages/TextEditor'))))
const UseMediaQueryPage = Loadable(lazy(() => delayForDemo(import('./pages/UseMediaQuery'))))
const RouterLinkPage = Loadable(lazy(() => delayForDemo(import('./pages/RouterLink'))))
const LinkPage = Loadable(lazy(() => delayForDemo(import('./pages/Link'))))
const NumberInputPage = Loadable(lazy(() => delayForDemo(import('./pages/NumberInput'))))
const DialogPage = Loadable(lazy(() => delayForDemo(import('./pages/Dialog'))))
const TabsPage = Loadable(lazy(() => delayForDemo(import('./pages/Tabs'))))
const NoDataPage = Loadable(lazy(() => delayForDemo(import('./pages/NoData'))))
const PaginationPage = Loadable(lazy(() => delayForDemo(import('./pages/Pagination'))))
const FilePage = Loadable(lazy(() => delayForDemo(import('./pages/File'))))
const MiniImageUploaderPage = Loadable(lazy(() => delayForDemo(import('./pages/MiniImageUploader'))))
const FileUploaderPage = Loadable(lazy(() => delayForDemo(import('./pages/FileUploader'))))
const ChartsPage = Loadable(lazy(() => delayForDemo(import('./pages/Charts'))))

const delayForDemo = async (promise: any) => {
  await new Promise((resolve) => setTimeout(resolve, 500))
  return promise
}

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
          name: 'Charts',
          path: '/components/charts',
          iconName: 'ChartSquare',
          element: <ChartsPage />,
          children: []
        },
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
              path: '/components/other/no-data',
              iconName: '',
              element: <NoDataPage />,
              children: [],
            },
            {
              name: 'File',
              path: '/components/other/file',
              iconName: '',
              element: <FilePage />,
              children: [],
            },
            {
              name: 'FileUploader',
              path: '/components/other/file-uploader',
              iconName: '',
              element: <FileUploaderPage />,
              children: [],
            },
            {
              name: 'MiniImageUploader',
              path: '/components/other/mini-image-uploader',
              iconName: '',
              element: <MiniImageUploaderPage />,
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
