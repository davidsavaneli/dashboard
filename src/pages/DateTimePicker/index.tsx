import { ContentLayout, Card, DateTimePicker } from '../../components'

const DateTimePickerPage = () => {
  return (
    <ContentLayout label='Date Time Picker Page'>
      <Card title='Date Time Picker'>
        <DateTimePicker label='Date Time Picker' />
      </Card>
    </ContentLayout>
  )
}

export default DateTimePickerPage
