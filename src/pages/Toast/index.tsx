import { ContentLayout, Card, Button, Toast } from '../../components'

const ToastPage = () => {
  return (
    <ContentLayout label='Toast Page'>
      <Card title='Toast'>
        <Button onClick={() => Toast.success('Success toast text ...')}>Success</Button>
      </Card>
    </ContentLayout>
  )
}

export default ToastPage
