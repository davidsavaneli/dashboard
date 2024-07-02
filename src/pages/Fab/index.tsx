import { ContentLayout, Card, Fab, Icon } from '../../components'

const FabPage = () => {
  return (
    <ContentLayout label='Fab Page'>
      <Card title='Fab With Tooltip'>
        <Fab>
          <Icon name='Home' />
        </Fab>
      </Card>
    </ContentLayout>
  )
}

export default FabPage
