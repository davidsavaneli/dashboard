import { ContentLayout, Card, Button, Toast, Space } from '../../components'

const ToastPage = () => {
  return (
    <ContentLayout label='Toast Page'>
      <Card title='Toast'>
        <Button color='success' onClick={() => Toast.success('Success toast text ...')}>
          Success
        </Button>
        <Space />
        <Button color='error' onClick={() => Toast.error('Error toast text ...')}>
          Error
        </Button>
        <Space />
        <Button color='info' onClick={() => Toast.info('Info toast text ...')}>
          Info
        </Button>
        <Space />
        <Button color='warning' onClick={() => Toast.warning('Warning toast text ...')}>
          Warning
        </Button>
      </Card>
    </ContentLayout>
  )
}

export default ToastPage
