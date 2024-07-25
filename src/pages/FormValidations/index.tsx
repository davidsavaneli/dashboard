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
  CheckboxValidator,
  RadioValidator,
  RadioGroup,
  Divider,
  FormLabel,
  FormGroup,
  FormHelperText,
  Button,
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
    .min(1, 'Product required')
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
}

const handleFormSubmit = (values: typeof initialValues, actions: any) => {
  console.log(JSON.stringify({ ...values }, null, 2))
  actions.setSubmitting(true)
  actions.resetForm()
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
                  <TextFieldValidator label='First Name (Text Field)' name='firstName' />
                  <TextFieldValidator label='Email (Text Field)' name='email' />
                  <TextFieldValidator label='Phone Number (Text Field)' name='phoneNumber' />
                  <SelectValidator label='Select Country (Single Select)' options={countryOptions} name='country' />
                  <SelectValidator
                    label='Select Currencies (Multiple Select)'
                    options={currencyOptions}
                    multiple
                    name='currency'
                  />
                  <AutocompleteValidator label='Select City (Single Autocomplete)' options={cityOptions} name='city' />
                  <AutocompleteValidator
                    label='Select Product (Multiple Autocomplete)'
                    options={productOptions}
                    multiple
                    name='product'
                  />
                  <DatePickerValidator name='datePicker' label='Date Picker' />
                  <TimePickerValidator name='timePicker' label='Time Picker' />
                  <DateTimePickerValidator name='dateTimePicker' label='Date Time Picker' />
                  <ColorPickerValidator name='color' label='Color Picker' />
                  <Divider />
                  <RadioValidator name='radio' label='Mercedes' value='mercedes' />
                  <Divider />
                  <FormLabel>Sex</FormLabel>
                  <RadioGroup name='radioGroup'>
                    <RadioValidator name='radioGroup' label='Male' value='male' />
                    <RadioValidator name='radioGroup' label='Female' value='female' />
                    <RadioValidator name='radioGroup' label='Other' value='other' />
                    {props.errors.radioGroup && props.touched.radioGroup && (
                      <FormHelperText error>{props.errors.radioGroup}</FormHelperText>
                    )}
                  </RadioGroup>
                  <Divider />
                  <CheckboxValidator name='checkbox' label='Checkbox' />
                  <Divider />
                  <FormLabel>Sex</FormLabel>
                  <FormGroup row>
                    <CheckboxValidator name='checkboxGroup[0]' label='Checkbox 1' />
                    <CheckboxValidator name='checkboxGroup[1]' label='Checkbox 2' />
                    <CheckboxValidator name='checkboxGroup[2]' label='Checkbox 3' />
                    {props.errors.checkboxGroup && props.touched.checkboxGroup && (
                      <FormHelperText error>{props.errors.checkboxGroup}</FormHelperText>
                    )}
                  </FormGroup>
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
