import { ContentLayout, Card, DatePicker } from '../../components'

const DatePickerPage = () => {
  return (
    <ContentLayout label='Date Picker Page'>
      <Card title='Date Picker'>
        <DatePicker label='Date Picker' />
      </Card>
    </ContentLayout>
  )
}

export default DatePickerPage
