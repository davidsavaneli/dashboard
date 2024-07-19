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
} from '../../components'

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
        <div className='col-3'></div>
        <div className='col-6'>
          <Card
            title='Basic'
            footerActions={
              <>
                <Button variant='transparent'>Reset</Button>
                <Button>Submit</Button>
              </>
            }
          >
            <TextField label='Name (Text Field)' />
            <TextField label='Email (Text Field)' />
            <TextField label='Phone Number (Text Field)' />
            <Select label='Select Country (Single Select)' options={countryOptions} />
            <Select label='Select Currencies (Multiple Select)' multiple options={currencyOptions} />
            <Autocomplete
              label='Select City (Single Autocomplete)'
              options={cityOptions}
              onChange={(e, value) => console.log(value)}
            />
            <Autocomplete
              multiple
              label='Select Product (Multiple Autocomplete)'
              options={productOptions}
              onChange={(e, value) => console.log(value)}
            />
            <DatePicker label='Date Picker' />
            <TimePicker label='Time Picker' />
            <DateTimePicker label='Date Time Picker' />
            <FormLabel>Sex</FormLabel>
            <RadioGroup row>
              <Radio label='Male' value='male' />
              <Radio label='Female' value='female' />
            </RadioGroup>
            <Checkbox label='Agree' />
          </Card>
        </div>
        <div className='col-3'></div>
      </div>
    </ContentLayout>
  )
}

export default FormValidationsPage
