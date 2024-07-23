import {
  ContentLayout,
  Card,
  TextField,
  Select,
  Autocomplete,
  RadioGroup,
  Radio,
  FormLabel,
  DatePicker,
  TimePicker,
  DateTimePicker,
  Checkbox,
  Button,
  TextFieldValidator,
  SelectValidator,
  AutocompleteValidator,
  DatePickerValidator,
} from '../../components'

import { Formik, Form, Field } from 'formik'
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
  date: yup.date().nullable().required('Birth Date is required'),
})

const initialValues = {
  firstName: '',
  email: '',
  phoneNumber: '',
  country: '',
  currency: [],
  city: null,
  product: [],
  date: null,
}

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

const FormValidationsPage = () => {
  return (
    <ContentLayout label='Form Validations Page'>
      <div className='row'>
        <div className='col-6'>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting, resetForm }) => {
              alert(JSON.stringify({ ...values }, null, 2))
              resetForm()
            }}
          >
            {({ resetForm }) => (
              <Form>
                <Card
                  title='Formik Yup'
                  footerActions={
                    <>
                      <Button variant='transparent' onClick={() => resetForm()}>
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
                  <DatePickerValidator name='date' label='Birth Date' />
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
