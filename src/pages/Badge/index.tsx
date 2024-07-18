import { ContentLayout, Card, Badge, Button, Icon, IconButton, Avatar } from '../../components'

const BadgePage = () => {
  return (
    <ContentLayout label='Badge Component'>
      <div className='row'>
        <div className='col-6'>
          <Card title='Button'>
            <Badge badgeContent={2} color='warning'>
              <Button size='lg'>Badge</Button>
            </Badge>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Badge badgeContent={25} color='warning'>
              <Button size='md'>Badge</Button>
            </Badge>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Badge badgeContent={2} color='warning'>
              <Button size='sm'>Badge</Button>
            </Badge>
          </Card>
        </div>
        <div className='col-6'>
          <Card title='Icon'>
            <Badge badgeContent={2}>
              <Icon size='lg' name='Bag2' />
            </Badge>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Badge badgeContent={25}>
              <Icon size='md' name='Bag2' />
            </Badge>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Badge badgeContent={2}>
              <Icon size='sm' name='Bag2' />
            </Badge>
          </Card>
        </div>
      </div>
      <Card title='Colors'>
        <Badge color='primary' badgeContent={2}>
          <IconButton iconName='Bag2' variant='filled' />
        </Badge>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Badge color='primaryLight' badgeContent={2}>
          <IconButton iconName='Bag2' variant='filled' />
        </Badge>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Badge color='secondary' badgeContent={2}>
          <IconButton iconName='Bag2' variant='filled' />
        </Badge>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Badge color='dark' badgeContent={2}>
          <IconButton iconName='Bag2' variant='filled' />
        </Badge>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Badge color='medium' badgeContent={2}>
          <IconButton iconName='Bag2' variant='filled' />
        </Badge>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Badge color='light' badgeContent={2}>
          <IconButton iconName='Bag2' variant='filled' />
        </Badge>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Badge color='success' badgeContent={2}>
          <IconButton iconName='Bag2' variant='filled' />
        </Badge>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Badge color='error' badgeContent={2}>
          <IconButton iconName='Bag2' variant='filled' />
        </Badge>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Badge color='info' badgeContent={2}>
          <IconButton iconName='Bag2' variant='filled' />
        </Badge>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Badge color='warning' badgeContent={2}>
          <IconButton iconName='Bag2' variant='filled' />
        </Badge>
        <br />
        <br />
        <Badge color='primary' variant='dot'>
          <IconButton iconName='Bag2' variant='filled' />
        </Badge>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Badge color='primaryLight' variant='dot'>
          <IconButton iconName='Bag2' variant='filled' />
        </Badge>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Badge color='secondary' variant='dot'>
          <IconButton iconName='Bag2' variant='filled' />
        </Badge>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Badge color='dark' variant='dot'>
          <IconButton iconName='Bag2' variant='filled' />
        </Badge>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Badge color='medium' variant='dot'>
          <IconButton iconName='Bag2' variant='filled' />
        </Badge>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Badge color='light' variant='dot'>
          <IconButton iconName='Bag2' variant='filled' />
        </Badge>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Badge color='success' variant='dot'>
          <IconButton iconName='Bag2' variant='filled' />
        </Badge>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Badge color='error' variant='dot'>
          <IconButton iconName='Bag2' variant='filled' />
        </Badge>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Badge color='info' variant='dot'>
          <IconButton iconName='Bag2' variant='filled' />
        </Badge>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Badge color='warning' variant='dot'>
          <IconButton iconName='Bag2' variant='filled' />
        </Badge>
      </Card>
      <div className='row'>
        <div className='col-6'>
          <Card title='Icon Button'>
            <Badge badgeContent={2}>
              <IconButton size='lg' iconName='Bag2' variant='filled' color='medium' />
            </Badge>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Badge badgeContent={25}>
              <IconButton size='md' iconName='Bag2' variant='filled' color='medium' />
            </Badge>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Badge badgeContent={2}>
              <IconButton size='sm' iconName='Bag2' variant='filled' color='medium' />
            </Badge>
          </Card>
        </div>
        <div className='col-6'>
          <Card title='Avatar'>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
              <Badge badgeContent={2} overlap='circular' color='error'>
                <Avatar iconName='Profile' size='xxl' />
              </Badge>
              &nbsp;&nbsp;&nbsp;
              <Badge badgeContent={2} overlap='circular' color='error'>
                <Avatar iconName='Profile' size='xl' />
              </Badge>
              &nbsp;&nbsp;&nbsp;
              <Badge badgeContent={2} overlap='circular' color='error'>
                <Avatar iconName='Profile' size='lg' />
              </Badge>
              &nbsp;&nbsp;&nbsp;
              <Badge badgeContent={2} overlap='circular' color='error'>
                <Avatar iconName='Profile' size='md' />
              </Badge>
              &nbsp;&nbsp;&nbsp;
              <Badge badgeContent={2} overlap='circular' color='error'>
                <Avatar iconName='Profile' size='sm' />
              </Badge>
              &nbsp;&nbsp;&nbsp;
              <Badge badgeContent={2} overlap='circular' color='error'>
                <Avatar iconName='Profile' size='xs' />
              </Badge>
            </div>
            <br />
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
              <Badge color='success' variant='dot' overlap='circular'>
                <Avatar iconName='Profile' size='xxl' />
              </Badge>
              &nbsp;&nbsp;&nbsp;
              <Badge color='success' variant='dot' overlap='circular'>
                <Avatar iconName='Profile' size='xl' />
              </Badge>
              &nbsp;&nbsp;&nbsp;
              <Badge color='success' variant='dot' overlap='circular'>
                <Avatar iconName='Profile' size='lg' />
              </Badge>
              &nbsp;&nbsp;&nbsp;
              <Badge color='success' variant='dot' overlap='circular'>
                <Avatar iconName='Profile' size='md' />
              </Badge>
              &nbsp;&nbsp;&nbsp;
              <Badge color='success' variant='dot' overlap='circular'>
                <Avatar iconName='Profile' size='sm' />
              </Badge>
              &nbsp;&nbsp;&nbsp;
              <Badge color='success' variant='dot' overlap='circular'>
                <Avatar iconName='Profile' size='xs' />
              </Badge>
            </div>
          </Card>
        </div>
      </div>
    </ContentLayout>
  )
}

export default BadgePage
