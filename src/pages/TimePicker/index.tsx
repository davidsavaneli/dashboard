import { ContentLayout, Card, TimePicker } from '../../components'

const TimePickerPage = () => {
  return (
    <ContentLayout label='Time Picker Component'>
      <div className='row'>
        <div className='col-6'>
          <Card title='Default'>
            <TimePicker label='Time Picker' />
          </Card>
        </div>
        <div className='col-6'>
          <Card title='Disabled'>
            <TimePicker label='Time Picker' disabled />
          </Card>
        </div>
      </div>
      <div className='row'>
        <div className='col-6'>
          <Card title='Errors'>
            <TimePicker label='Time Picker' error />
            <TimePicker label='Time Picker' error helperText='Helper Text' />
          </Card>
        </div>
      </div>
    </ContentLayout>
  )
}

export default TimePickerPage
