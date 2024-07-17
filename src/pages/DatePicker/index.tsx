import { ContentLayout, Card, DatePicker } from '../../components'

const DatePickerPage = () => {
  return (
    <ContentLayout label='Date Picker Component'>
      <div className='row'>
        <div className='col-6'>
          <Card title='Default'>
            <DatePicker label='Date Picker' />
          </Card>
        </div>
        <div className='col-6'>
          <Card title='Disabled'>
            <DatePicker label='Date Picker' disabled />
          </Card>
        </div>
      </div>
      <div className='row'>
        <div className='col-6'>
          <Card title='Errors'>
            <DatePicker label='Date Picker' error />
            <DatePicker label='Date Picker' error helperText='Helper Text' />
          </Card>
        </div>
      </div>
    </ContentLayout>
  )
}

export default DatePickerPage
