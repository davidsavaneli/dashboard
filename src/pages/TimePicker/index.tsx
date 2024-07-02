import { ContentLayout, Card, TimePicker } from '../../components'

const TimePickerPage = () => {
  return (
    <ContentLayout label='Time Picker Page'>
      <Card title='Time Picker'>
        <TimePicker label='Time Picker' />
      </Card>
    </ContentLayout>
  )
}

export default TimePickerPage
