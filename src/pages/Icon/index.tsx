import { ContentLayout, Card, Icon } from '../../components'

const IconPage = () => {
  return (
    <ContentLayout label='Icon Page'>
      <Card title='Icon'>
        <Icon name='Home' color='primary' />
        <Icon name='Home' color='secondary' />
        <Icon name='Home' color='dark' />
        <Icon name='Home' color='medium' />
        <Icon name='Home' color='light' />
        <Icon name='Home' color='success' />
        <Icon name='Home' color='error' />
        <Icon name='Home' color='info' />
        <Icon name='Home' color='warning' />
        <br />
        <Icon name='Home' size='sm' />
        <Icon name='Home' size='md' />
        <Icon name='Home' size='lg' />
      </Card>
    </ContentLayout>
  )
}

export default IconPage
