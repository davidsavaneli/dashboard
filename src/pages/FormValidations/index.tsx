import {
  ContentLayout,
  Card,
  TextFieldValidator,
  SelectValidator,
  AutocompleteValidator,
  DatePickerValidator,
  DateTimePickerValidator,
  TimePickerValidator,
  ColorPickerValidator,
  NumberInputValidator,
  TextEditorValidator,
  FileUploaderValidator,
  CheckboxValidator,
  RadioValidator,
  RadioGroup,
  Divider,
  FormLabel,
  FormGroup,
  FormHelperText,
  Button,
  Space,
} from '../../components'

import { Formik, Form, FormikProps } from 'formik'
import * as yup from 'yup'

const validationSchema = yup.object({
  firstName: yup.string().trim().required('First Name Required').max(100, 'Maximum 100 characters'),
  email: yup.string().email('Invalid email').required('Email required'),
  phoneNumber: yup
    .number()
    .positive('The number must be positive')
    .integer('The number must be an integer')
    .typeError('Please enter a valid phone number')
    .required('Phone number required'),
  country: yup.string().required('Country required'),
  currency: yup.array().of(yup.string().required()).min(1, 'Currency required').required('Currency required'),
  city: yup
    .object({
      value: yup.string().required('City value required'),
      label: yup.string().required('City label required'),
    })
    .required('City required'),
  product: yup
    .array()
    .of(
      yup.object({
        value: yup.string().required(),
        label: yup.string().required(),
      }),
    )
    .min(2, 'Product required min 2')
    .required('Product required'),
  datePicker: yup.date().nullable().required('Date Picker is required'),
  timePicker: yup.date().nullable().required('Time Picker is required'),
  dateTimePicker: yup.date().nullable().required('Date Time Picker is required'),
  color: yup.string().trim().required('Color Picker Required'),
  checkbox: yup.boolean().oneOf([true], 'Checkbox is required'),
  checkboxGroup: yup
    .array()
    .of(yup.boolean())
    .test('at-least-one-checked', 'At least one checkbox must be checked', (value) => value?.includes(true) || false),
  radio: yup.string().required('Radio is required'),
  radioGroup: yup.string().required('Radio Group is required'),
  count: yup.number().required('Number Input is required').min(1, 'min 1'),
  text: yup.string().required('Text Editor Required'),
  files: yup
    .array()
    .of(
      yup.object({
        source: yup.string().required(),
        sortIndex: yup.number().required(),
        altText: yup.string().required(),
      }),
    )
    .min(2, 'Files required (Min 2)')
    .required('Files required'),
})

const initialValues = {
  firstName: '',
  email: '',
  phoneNumber: '',
  country: '',
  currency: [],
  city: null,
  product: [],
  datePicker: null,
  timePicker: null,
  dateTimePicker: null,
  color: '',
  checkbox: false,
  checkboxGroup: [false, false, false],
  radio: '',
  radioGroup: '',
  count: 0,
  text: '',
  files: [],
}

const handleFormSubmit = (values: typeof initialValues, actions: any) => {
  console.log(JSON.stringify({ ...values }, null, 2))
  actions.setSubmitting(true)
  // actions.resetForm()
}

const FormValidationsPage = () => {
  return (
    <ContentLayout label='Form Validations Page'>
      <div className='row'>
        <div className='col-6'>
          <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleFormSubmit}>
            {(props: FormikProps<typeof initialValues>) => (
              <Form>
                <Card
                  title='Formik Yup'
                  footerActions={
                    <>
                      <Button variant='transparent' onClick={() => props.resetForm()}>
                        Reset
                      </Button>
                      <Button type='submit'>Submit</Button>
                    </>
                  }
                >
                  <Space>
                    <TextFieldValidator label='First Name (Text Field)' name='firstName' />
                  </Space>
                  <Space>
                    <TextFieldValidator label='Email (Text Field)' name='email' />
                  </Space>
                  <Space>
                    <TextFieldValidator label='Phone Number (Text Field)' name='phoneNumber' />
                  </Space>
                  <Space>
                    <SelectValidator label='Select Country (Single Select)' options={countryOptions} name='country' />
                  </Space>
                  <Space>
                    <SelectValidator
                      label='Select Currencies (Multiple Select)'
                      options={currencyOptions}
                      multiple
                      name='currency'
                    />
                  </Space>
                  <Space>
                    <AutocompleteValidator
                      label='Select City (Single Autocomplete)'
                      options={cityOptions}
                      name='city'
                    />
                  </Space>
                  <Space>
                    <AutocompleteValidator
                      label='Select Product (Multiple Autocomplete)'
                      options={productOptions}
                      multiple
                      name='product'
                    />
                  </Space>
                  <Space>
                    <DatePickerValidator name='datePicker' label='Date Picker' />
                  </Space>
                  <Space>
                    <TimePickerValidator name='timePicker' label='Time Picker' />
                  </Space>
                  <Space>
                    <DateTimePickerValidator name='dateTimePicker' label='Date Time Picker' />
                  </Space>
                  <Space>
                    <ColorPickerValidator name='color' label='Color Picker' />
                  </Space>
                  <Space>
                    <NumberInputValidator name='count' label='Number Input' />
                  </Space>
                  <Space>
                    <TextEditorValidator name='text' placeholder='Text Editor' editorId='3' />
                  </Space>
                  <Space>
                    <FileUploaderValidator name='files' allowMultiple initialFiles={initialValues.files} />
                  </Space>
                  <Divider />
                  <RadioValidator name='radio' label='Mercedes' value='mercedes' />
                  <Divider />
                  <FormLabel>Sex</FormLabel>
                  <RadioGroup name='radioGroup'>
                    <RadioValidator name='radioGroup' label='Male' value='male' />
                    <RadioValidator name='radioGroup' label='Female' value='female' />
                    <RadioValidator name='radioGroup' label='Other' value='other' />
                  </RadioGroup>
                  {props.errors.radioGroup && props.touched.radioGroup && (
                    <FormHelperText error>{props.errors.radioGroup}</FormHelperText>
                  )}
                  <Divider />
                  <CheckboxValidator name='checkbox' label='Checkbox' />
                  <Divider />
                  <FormLabel>Sex</FormLabel>
                  <FormGroup row>
                    <CheckboxValidator name='checkboxGroup[0]' label='Checkbox 1' />
                    <CheckboxValidator name='checkboxGroup[1]' label='Checkbox 2' />
                    <CheckboxValidator name='checkboxGroup[2]' label='Checkbox 3' />
                  </FormGroup>
                  {props.errors.checkboxGroup && props.touched.checkboxGroup && (
                    <FormHelperText error>{props.errors.checkboxGroup}</FormHelperText>
                  )}
                </Card>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </ContentLayout>
  )
}

export default FormValidationsPage

const countryOptions = [
  { value: 'georgia', label: 'Georgia' },
  { value: 'france', label: 'France' },
  { value: 'spain', label: 'Spain' },
]

const currencyOptions = [
  { value: 'gel', label: 'Georgian Lari' },
  { value: 'usd', label: 'US Dollar' },
  { value: 'gbp', label: 'British Pound' },
]

const cityOptions = [
  { value: 'tbilisi', label: 'Tbilisi' },
  { value: 'kutaisi', label: 'Kutaisi' },
  { value: 'batumi', label: 'Batumi' },
]

const productOptions = [
  { value: 'food', label: 'Food' },
  { value: 'clothes', label: 'Clothes' },
  { value: 'coffee', label: 'Coffee' },
]
