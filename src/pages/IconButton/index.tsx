import { ContentLayout, Card, Icon, IconButton } from '../../components'

const IconButtonPage = () => {
  return (
    <ContentLayout label='Icon Button Page'>
      <Card title='Icon Button'>
        <IconButton>
          <Icon name='Trash' />
        </IconButton>
      </Card>
    </ContentLayout>
  )
}

export default IconButtonPage
