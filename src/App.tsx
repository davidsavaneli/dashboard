import React, { useState } from 'react'
import {
  MDButton,
  MDTextField,
  MDFormGroup,
  FormLabel,
  Checkbox,
  MDRadioGroup,
  MDRadio,
  MDSwitch,
  MDSelect,
  MDSlider,
  MDAutocomplete,
  MDLocalizationProvider,
  MDDatePicker,
  MDTimePicker,
  MDDateTimePicker,
  MDColorPicker,
  MDNumberInput,
  MDChip,
  MDTextEditor,
  MDDivider,
  MDIcon,
  MDTitle,
  MDText,
  MDAlert,
  MDToast,
  MDLoaderLayout,
  MDMenu,
  MDPagination,
  MDTabs,
} from './components'
import { ToastContainer } from 'react-toastify'

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
      <MDButton>Button</MDButton>
      <hr />
      <Checkbox label='Checkbox' />
      <hr />
      <FormLabel>Checkbox Group</FormLabel>
      <MDFormGroup>
        <Checkbox label='Checkbox' />
        <Checkbox label='Checkbox' />
      </MDFormGroup>
      <hr />
      <FormLabel>Checkbox Group</FormLabel>
      <MDFormGroup row>
        <Checkbox label='Checkbox' />
        <Checkbox label='Checkbox' />
      </MDFormGroup>
      <hr />
      <FormLabel>Radio Group</FormLabel>
      <MDRadioGroup>
        <MDRadio label='Radio' value='male' />
        <MDRadio label='Radio' value='female' />
      </MDRadioGroup>
      <hr />
      <FormLabel>Radio Group</FormLabel>
      <MDRadioGroup row>
        <MDRadio label='Radio' value='male' />
        <MDRadio label='Radio' value='female' />
      </MDRadioGroup>
      <hr />
      <MDSwitch label='Switch' />
      <hr />
      <MDSlider onValueChange={(e) => console.log(e)} min={10} />
      <hr />
      <MDTextField label='Text Field' />
      <hr />
      <MDSelect label={'Select'} options={selectOptions} onValueChange={(e) => console.log(e)} multiple />
      <hr />
      <MDAutocomplete multiple options={autocompleteOptions} label='Autocomplete' onChange={(e) => console.log(e)} />
      <MDLocalizationProvider>
        <hr />
        <MDDatePicker label='Date Picker' />
        <hr />
        <MDTimePicker label='Time Picker' />
        <hr />
        <MDDateTimePicker label='Date Time Picker' />
        <hr />
      </MDLocalizationProvider>
      <MDColorPicker label='Color Picker' onChange={(e) => console.log(e)} />
      <hr />
      <MDNumberInput max={5} value={0} onValueChange={(e) => console.log(e)} />
      <hr />
      <MDChip label='Chip' onDelete={() => console.log('Delete')} />
      <hr />
      <MDTextEditor size='small' editorId='1' value='' placeholder='Description' onChange={(e) => console.log(e)} />
      <hr />
      <MDDivider />
      <hr />
      <MDIcon name='MdHome' />
      <hr />
      <MDTitle>Title</MDTitle>
      <hr />
      <MDText>Text</MDText>
      <hr />
      <MDAlert
        title='Alert Title'
        text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, dolore voluptatum esse eaque placeat magni.'
        variant='info'
      />
      <hr />
      <MDButton onClick={() => MDToast.success('Success toast text ...')}>Toast</MDButton>
      <hr />
      <MDLoaderLayout isLoading>Content ...</MDLoaderLayout>
      <hr />
      <MDMenu
        component={<MDButton>Menu</MDButton>}
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
      <MDPagination count={10} />
      <hr />
      <MDTabs tabs={tabs} onChange={(e, newValue: number) => console.log(newValue)} />
      <div style={{ height: '400px' }}></div>
    </div>
  )
}

export default App
