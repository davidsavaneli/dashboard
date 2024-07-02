import { ContentLayout, Card, Tooltip, Icon } from '../../components'

const TooltipPage = () => {
  return (
    <ContentLayout label='Tooltip Page'>
      <Card title='Tooltip'>
        <Tooltip title='Tooltip Title'>
          <Icon name='Home' />
        </Tooltip>
      </Card>
    </ContentLayout>
  )
}

export default TooltipPage
