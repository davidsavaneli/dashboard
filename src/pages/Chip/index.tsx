import { ContentLayout, Card, Chip, Icon, Avatar } from '../../components'

const ChipPage = () => {
  return (
    <ContentLayout label='Chip Component'>
      <div className='row'>
        <div className='col-6'>
          <Card title='Default'>
            <Chip label='Default' />
          </Card>
        </div>
        <div className='col-6'>
          <Card title='Clickable'>
            <Chip label='Clickable' onClick={() => console.log('onClick')} />
          </Card>
        </div>
      </div>
      <Card title='Sizes'>
        <Chip label='Small' size='sm' />
        &nbsp;&nbsp;&nbsp;
        <Chip label='Medium' size='md' />
        &nbsp;&nbsp;&nbsp;
        <Chip label='Large' size='lg' />
        <br />
        <br />
        <Chip label='Small' size='sm' onDelete={() => console.log('onDelete')} />
        &nbsp;&nbsp;&nbsp;
        <Chip label='Medium' size='md' onDelete={() => console.log('onDelete')} />
        &nbsp;&nbsp;&nbsp;
        <Chip label='Large' size='lg' onDelete={() => console.log('onDelete')} />
        <br />
        <br />
        <Chip label='Small' size='sm' onDelete={() => console.log('onDelete')} deleteIcon={<Icon name='Trash' />} />
        &nbsp;&nbsp;&nbsp;
        <Chip label='Medium' size='md' onDelete={() => console.log('onDelete')} deleteIcon={<Icon name='Trash' />} />
        &nbsp;&nbsp;&nbsp;
        <Chip label='Large' size='lg' onDelete={() => console.log('onDelete')} deleteIcon={<Icon name='Trash' />} />
        <br />
        <br />
        <Chip
          label='Small'
          size='sm'
          avatar={<Avatar alt='Alt Text' src='https://ableproadmin.com/react/assets/avatar-6-Cv0iCdgR.png' />}
        />
        &nbsp;&nbsp;&nbsp;
        <Chip
          label='Medium'
          size='md'
          avatar={<Avatar alt='Alt Text' src='https://ableproadmin.com/react/assets/avatar-6-Cv0iCdgR.png' />}
        />
        &nbsp;&nbsp;&nbsp;
        <Chip
          label='Large'
          size='lg'
          avatar={<Avatar alt='Alt Text' src='https://ableproadmin.com/react/assets/avatar-6-Cv0iCdgR.png' />}
        />
        <br />
        <br />
        <Chip label='Small' size='sm' avatar={<Avatar color='secondary'>DS</Avatar>} />
        &nbsp;&nbsp;&nbsp;
        <Chip label='Medium' size='md' avatar={<Avatar color='secondary'>DS</Avatar>} />
        &nbsp;&nbsp;&nbsp;
        <Chip label='Large' size='lg' avatar={<Avatar color='secondary'>DS</Avatar>} />
        <br />
        <br />
        <Chip label='Small' size='sm' icon={<Icon name='Setting2' color='secondary' />} />
        &nbsp;&nbsp;&nbsp;
        <Chip label='Medium' size='md' icon={<Icon name='Setting2' color='secondary' />} />
        &nbsp;&nbsp;&nbsp;
        <Chip label='Large' size='lg' icon={<Icon name='Setting2' color='secondary' />} />
      </Card>
      <Card title='Colors'>
        <Chip label='Primary' color='primary' />
        &nbsp;&nbsp;&nbsp;
        <Chip label='Primary Light' color='primaryLight' />
        &nbsp;&nbsp;&nbsp;
        <Chip label='Secondary' color='secondary' />
        &nbsp;&nbsp;&nbsp;
        <Chip label='Dark' color='dark' />
        &nbsp;&nbsp;&nbsp;
        <Chip label='Medium' color='medium' />
        &nbsp;&nbsp;&nbsp;
        <Chip label='Light' color='light' />
        &nbsp;&nbsp;&nbsp;
        <Chip label='Success' color='success' />
        &nbsp;&nbsp;&nbsp;
        <Chip label='Error' color='error' />
        &nbsp;&nbsp;&nbsp;
        <Chip label='Info' color='info' />
        &nbsp;&nbsp;&nbsp;
        <Chip label='Warning' color='warning' />
        <br />
        <br />
        <Chip variant='outlined' label='Primary' color='primary' />
        &nbsp;&nbsp;&nbsp;
        <Chip variant='outlined' label='Primary Light' color='primaryLight' />
        &nbsp;&nbsp;&nbsp;
        <Chip variant='outlined' label='Secondary' color='secondary' />
        &nbsp;&nbsp;&nbsp;
        <Chip variant='outlined' label='Dark' color='dark' />
        &nbsp;&nbsp;&nbsp;
        <Chip variant='outlined' label='Medium' color='medium' />
        &nbsp;&nbsp;&nbsp;
        <Chip variant='outlined' label='Light' color='light' />
        &nbsp;&nbsp;&nbsp;
        <Chip variant='outlined' label='Success' color='success' />
        &nbsp;&nbsp;&nbsp;
        <Chip variant='outlined' label='Error' color='error' />
        &nbsp;&nbsp;&nbsp;
        <Chip variant='outlined' label='Info' color='info' />
        &nbsp;&nbsp;&nbsp;
        <Chip variant='outlined' label='Warning' color='warning' />
        <br />
        <br />
        <Chip label='Primary' color='primary' onDelete={() => console.log('onDelete')} />
        &nbsp;&nbsp;&nbsp;
        <Chip label='Primary Light' color='primaryLight' onDelete={() => console.log('onDelete')} />
        &nbsp;&nbsp;&nbsp;
        <Chip label='Secondary' color='secondary' onDelete={() => console.log('onDelete')} />
        &nbsp;&nbsp;&nbsp;
        <Chip label='Dark' color='dark' onDelete={() => console.log('onDelete')} />
        &nbsp;&nbsp;&nbsp;
        <Chip label='Medium' color='medium' onDelete={() => console.log('onDelete')} />
        &nbsp;&nbsp;&nbsp;
        <Chip label='Light' color='light' onDelete={() => console.log('onDelete')} />
        &nbsp;&nbsp;&nbsp;
        <Chip label='Success' color='success' onDelete={() => console.log('onDelete')} />
        &nbsp;&nbsp;&nbsp;
        <Chip label='Error' color='error' onDelete={() => console.log('onDelete')} />
        &nbsp;&nbsp;&nbsp;
        <Chip label='Info' color='info' onDelete={() => console.log('onDelete')} />
        &nbsp;&nbsp;&nbsp;
        <Chip label='Warning' color='warning' onDelete={() => console.log('onDelete')} />
        <br />
        <br />
        <Chip variant='outlined' label='Primary' color='primary' onDelete={() => console.log('onDelete')} />
        &nbsp;&nbsp;&nbsp;
        <Chip variant='outlined' label='Primary Light' color='primaryLight' onDelete={() => console.log('onDelete')} />
        &nbsp;&nbsp;&nbsp;
        <Chip variant='outlined' label='Secondary' color='secondary' onDelete={() => console.log('onDelete')} />
        &nbsp;&nbsp;&nbsp;
        <Chip variant='outlined' label='Dark' color='dark' onDelete={() => console.log('onDelete')} />
        &nbsp;&nbsp;&nbsp;
        <Chip variant='outlined' label='Medium' color='medium' onDelete={() => console.log('onDelete')} />
        &nbsp;&nbsp;&nbsp;
        <Chip variant='outlined' label='Light' color='light' onDelete={() => console.log('onDelete')} />
        &nbsp;&nbsp;&nbsp;
        <Chip variant='outlined' label='Success' color='success' onDelete={() => console.log('onDelete')} />
        &nbsp;&nbsp;&nbsp;
        <Chip variant='outlined' label='Error' color='error' onDelete={() => console.log('onDelete')} />
        &nbsp;&nbsp;&nbsp;
        <Chip variant='outlined' label='Info' color='info' onDelete={() => console.log('onDelete')} />
        &nbsp;&nbsp;&nbsp;
        <Chip variant='outlined' label='Warning' color='warning' onDelete={() => console.log('onDelete')} />
      </Card>
      <div className='row'>
        <div className='col-6'>
          <Card title='Deletable'>
            <Chip label='Deletable' onDelete={() => console.log('onDelete')} />
          </Card>
        </div>
        <div className='col-6'>
          <Card title='Clickable And Deletable'>
            <Chip
              label='Clickable Deletable'
              onClick={() => console.log('onClick')}
              onDelete={() => console.log('onDelete')}
            />
          </Card>
        </div>
      </div>
      <br />
      <div className='row'>
        <div className='col-6'>
          <Card title='Custom Delete Icon'>
            <Chip
              label='Custom Delete Icon'
              onClick={() => console.log('onClick')}
              onDelete={() => console.log('onDelete')}
              deleteIcon={<Icon name='Trash' />}
            />
          </Card>
        </div>
        <div className='col-6'>
          <Card title='Avatar Image'>
            <Chip
              label='Avatar Image'
              avatar={<Avatar alt='Alt Text' src='https://ableproadmin.com/react/assets/avatar-6-Cv0iCdgR.png' />}
            />
          </Card>
        </div>
      </div>
      <br />
      <div className='row'>
        <div className='col-6'>
          <Card title='Avatar Letter'>
            <Chip label='Avatar Letter' avatar={<Avatar color='secondary'>DS</Avatar>} />
          </Card>
        </div>
        <div className='col-6'>
          <Card title='Icon'>
            <Chip label='Icon' icon={<Icon name='Setting2' color='secondary' />} />
          </Card>
        </div>
      </div>
    </ContentLayout>
  )
}

export default ChipPage
