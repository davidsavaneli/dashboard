import { ContentLayout, Card, Tooltip, Icon, IconButton, Button, Avatar, Space } from '../../components'

const TooltipPage = () => {
  return (
    <ContentLayout label='Tooltip Component'>
      <div className='row'>
        <div className='col-6'>
          <Card title='Icon'>
            <Tooltip title='Tooltip Title'>
              <Icon name='Setting2' />
            </Tooltip>
          </Card>
        </div>
        <div className='col-6'>
          <Card title='Icon Button'>
            <Tooltip title='Tooltip Title'>
              <IconButton iconName='Setting2' />
            </Tooltip>
          </Card>
        </div>
      </div>
      <Space />
      <div className='row'>
        <div className='col-6'>
          <Card title='Button'>
            <Tooltip title='Tooltip Title'>
              <Button>Tooltip Button</Button>
            </Tooltip>
          </Card>
        </div>
        <div className='col-6'>
          <Card title='Avatar'>
            <Tooltip title='Tooltip Title'>
              <Avatar src='https://ableproadmin.com/react/assets/avatar-6-Cv0iCdgR.png'></Avatar>
            </Tooltip>
          </Card>
        </div>
      </div>
    </ContentLayout>
  )
}

export default TooltipPage
