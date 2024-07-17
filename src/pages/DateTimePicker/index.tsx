import { ContentLayout, Card, DateTimePicker } from '../../components'

const DateTimePickerPage = () => {
  return (
    <ContentLayout label='Date Time Picker Component'>
      <div className='row'>
        <div className='col-6'>
          <Card title='Default'>
            <DateTimePicker label='Date Time Picker' />
          </Card>
        </div>
        <div className='col-6'>
          <Card title='Disabled'>
            <DateTimePicker label='Date Time Picker' disabled />
          </Card>
        </div>
      </div>
      <div className='row'>
        <div className='col-6'>
          <Card title='Errors'>
            <DateTimePicker label='Date Time Picker' error />
            <DateTimePicker label='Date Time Picker' error helperText='Helper Text' />
          </Card>
        </div>
      </div>
    </ContentLayout>
  )
}

export default DateTimePickerPage
