import { ContentLayout, Card, Alert } from '../../components'

const AlertPage = () => {
  return (
    <ContentLayout label='Alert Page'>
      <Card title='Alert'>
        <Alert severity='success'>This is an outlined success Alert.</Alert>
      </Card>
    </ContentLayout>
  )
}

export default AlertPage
