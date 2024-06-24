import React, { useState } from 'react'
import {
  MDButton,
  MDTextField,
  MDFormGroup,
  MDFormLabel,
  MDCheckbox,
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

function App() {
  return (
    <div className='container'>
      <ToastContainer />
      <br />
      <br />
      <hr />
      <MDButton>Button</MDButton>
      <hr />
      <MDCheckbox label='Checkbox' />
      <hr />
      <MDFormLabel>Checkbox Group</MDFormLabel>
      <MDFormGroup>
        <MDCheckbox label='Checkbox' />
        <MDCheckbox label='Checkbox' />
      </MDFormGroup>
      <hr />
      <MDFormLabel>Checkbox Group</MDFormLabel>
      <MDFormGroup row>
        <MDCheckbox label='Checkbox' />
        <MDCheckbox label='Checkbox' />
      </MDFormGroup>
      <hr />
      <MDFormLabel>Radio Group</MDFormLabel>
      <MDRadioGroup>
        <MDRadio label='Radio' value='male' />
        <MDRadio label='Radio' value='female' />
      </MDRadioGroup>
      <hr />
      <MDFormLabel>Radio Group</MDFormLabel>
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
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  )
}

export default App
