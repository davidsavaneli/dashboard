import { ContentLayout, Card, IconButton } from '../../components'

const IconButtonPage = () => {
  return (
    <ContentLayout label='Icon Button Page'>
      <Card title='Icon Button'>
        <IconButton iconName='Trash' onClick={() => console.log('onIconButtonClick')} />
        <br />
        <IconButton size='sm' iconName='Trash' />
        <br />
        <IconButton size='md' iconName='Trash' />
        <br />
        <IconButton size='lg' iconName='Trash' />
        <br />
        <IconButton iconName='Edit' color='primary' />
        <IconButton iconName='Edit' color='secondary' />
        <IconButton iconName='Edit' color='dark' />
        <IconButton iconName='Edit' color='medium' />
        <IconButton iconName='Edit' color='light' />
        <IconButton iconName='Edit' color='success' />
        <IconButton iconName='Edit' color='error' />
        <IconButton iconName='Edit' color='info' />
        <IconButton iconName='Edit' color='warning' />
      </Card>
    </ContentLayout>
  )
}

export default IconButtonPage
