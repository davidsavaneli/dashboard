import React, { useState } from 'react'
import {
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
  NumberInput,
  TextEditor,
  Button,
  Icon,
  Toast,
  Tabs,
  Tooltip,
  ToastContainer,
} from './components'

const selectOptions = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
]

const autocompleteOptions = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
]

const tabs = [
  { id: 0, label: 'Tab One', name: 'tabName1', content: <>Content of Tab One</>, defaultOpen: false },
  { id: 1, label: 'Tab Two', name: 'tabName2', content: <>Content of Tab Two</>, defaultOpen: true },
  { id: 2, label: 'Tab Three', name: 'tabName3', content: <>Content of Tab Three</>, defaultOpen: false },
]

function App() {
  return (
    <div className='container'>
      <ToastContainer />
      <br />
      <br />
      <hr />
      <Tooltip title='Tooltip Title'>
        <Button>Tooltip</Button>
      </Tooltip>
      <hr />
      <Button variant='outlined'>Button</Button>
      <hr />
      <Checkbox label='Checkbox' />
      <hr />
      <FormLabel>Checkbox Group</FormLabel>
      <FormGroup>
        <Checkbox label='Checkbox' />
        <Checkbox label='Checkbox' />
      </FormGroup>
      <hr />
      <FormLabel>Checkbox Group</FormLabel>
      <FormGroup row>
        <Checkbox label='Checkbox' />
        <Checkbox label='Checkbox' />
      </FormGroup>
      <hr />
      <FormLabel>Radio Group</FormLabel>
      <RadioGroup>
        <Radio label='Radio' value='male' />
        <Radio label='Radio' value='female' />
      </RadioGroup>
      <hr />
      <FormLabel>Radio Group</FormLabel>
      <RadioGroup row>
        <Radio label='Radio' value='male' />
        <Radio label='Radio' value='female' />
      </RadioGroup>
      <hr />
      <Switch label='Switch' />
      <hr />
      <TextField label='Text Field' />
      <hr />
      <Select label={'Select'} options={selectOptions} onValueChange={(e) => console.log(e)} multiple />
      <hr />
      <Autocomplete multiple options={autocompleteOptions} label='Autocomplete' onChange={(e) => console.log(e)} />
      <LocalizationProvider>
        <hr />
        <DatePicker label='Date Picker' />
        <hr />
        <TimePicker label='Time Picker' />
        <hr />
        <DateTimePicker label='Date Time Picker' />
        <hr />
      </LocalizationProvider>
      <ColorPicker label='Color Picker' onChange={(e) => console.log(e)} />
      <hr />
      <NumberInput max={5} value={0} onValueChange={(e) => console.log(e)} />
      <hr />
      <Chip label='Chip' onDelete={() => console.log('Delete')} />
      <hr />
      <TextEditor size='small' editorId='1' value='' placeholder='Description' onChange={(e) => console.log(e)} />
      <hr />
      <Divider />
      <hr />
      <Icon name='Delete' />
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
      <div style={{ height: '400px' }}></div>
    </div>
  )
}

export default App
