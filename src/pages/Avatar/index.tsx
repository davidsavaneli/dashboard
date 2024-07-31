import { ContentLayout, Card, AvatarGroup, Avatar, Text, Space } from '../../components'

const AvatarPage = () => {
  return (
    <ContentLayout label='Avatar Component'>
      <div className='row'>
        <div className='col-6'>
          <Card title='Default'>
            <Avatar src='https://ableproadmin.com/react/assets/avatar-6-Cv0iCdgR.png'></Avatar>
            <br />
            <Text>Size: md / Color: medium</Text>
          </Card>
        </div>
        <div className='col-6'>
          <Card title='Letter'>
            <Avatar>DS</Avatar>
            <br />
            <Text>children: ReactNode</Text>
          </Card>
        </div>
      </div>
      <Space />
      <Card title='Colors'>
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          <Avatar color='primary'>DS</Avatar>&nbsp;&nbsp;&nbsp;
          <Avatar color='primaryLight'>DS</Avatar>&nbsp;&nbsp;&nbsp;
          <Avatar color='secondary'>DS</Avatar>&nbsp;&nbsp;&nbsp;
          <Avatar color='dark'>DS</Avatar>&nbsp;&nbsp;&nbsp;
          <Avatar color='medium'>DS</Avatar>&nbsp;&nbsp;&nbsp;
          <Avatar color='light'>DS</Avatar>&nbsp;&nbsp;&nbsp;
          <Avatar color='success'>DS</Avatar>&nbsp;&nbsp;&nbsp;
          <Avatar color='error'>DS</Avatar>&nbsp;&nbsp;&nbsp;
          <Avatar color='info'>DS</Avatar>&nbsp;&nbsp;&nbsp;
          <Avatar color='warning'>DS</Avatar>
        </div>
      </Card>
      <Space />
      <div className='row'>
        <div className='col-6'>
          <Card title='Icon'>
            <Avatar iconName='Profile' />
          </Card>
        </div>
        <div className='col-6'>
          <Card title='Grouped'>
            <AvatarGroup max={3}>
              <Avatar src='https://ableproadmin.com/react/assets/avatar-6-Cv0iCdgR.png' alt='Alt Text'></Avatar>
              <Avatar src='https://ableproadmin.com/react/assets/avatar-2-BfYKEY4l.png' alt='Alt Text'></Avatar>
              <Avatar src='https://ableproadmin.com/react/assets/avatar-1-B0hIH1z9.png' alt='Alt Text'></Avatar>
              <Avatar src='https://ableproadmin.com/react/assets/avatar-6-Cv0iCdgR.png' alt='Alt Text'></Avatar>
            </AvatarGroup>
          </Card>
        </div>
      </div>
      <Space />
      <div className='row'>
        <div className='col-6'>
          <Card title='Variants'>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
              <Avatar variant='circular'>DS</Avatar>&nbsp;&nbsp;&nbsp;
              <Avatar variant='rounded'>DS</Avatar>&nbsp;&nbsp;&nbsp;
              <Avatar variant='square'>DS</Avatar>
            </div>
            <br />
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
              <Avatar
                variant='circular'
                src='https://ableproadmin.com/react/assets/avatar-6-Cv0iCdgR.png'
                alt='Alt Text'
              ></Avatar>
              &nbsp;&nbsp;&nbsp;
              <Avatar
                variant='rounded'
                src='https://ableproadmin.com/react/assets/avatar-2-BfYKEY4l.png'
                alt='Alt Text'
              ></Avatar>
              &nbsp;&nbsp;&nbsp;
              <Avatar
                variant='square'
                src='https://ableproadmin.com/react/assets/avatar-1-B0hIH1z9.png'
                alt='Alt Text'
              ></Avatar>
            </div>
            <br />
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
              <Avatar variant='circular' iconName='Profile' />
              &nbsp;&nbsp;&nbsp;
              <Avatar variant='rounded' iconName='Profile' />
              &nbsp;&nbsp;&nbsp;
              <Avatar variant='square' iconName='Profile' />
            </div>
          </Card>
        </div>
        <div className='col-6'>
          <Card title='Sizes'>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
              <Avatar iconName='Profile' size='xxl' />
              &nbsp;&nbsp;&nbsp;
              <Avatar iconName='Profile' size='xl' />
              &nbsp;&nbsp;&nbsp;
              <Avatar iconName='Profile' size='lg' />
              &nbsp;&nbsp;&nbsp;
              <Avatar iconName='Profile' size='md' />
              &nbsp;&nbsp;&nbsp;
              <Avatar iconName='Profile' size='sm' />
              &nbsp;&nbsp;&nbsp;
              <Avatar iconName='Profile' size='xs' />
            </div>
            <br />
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
              <Avatar size='xxl'>DS</Avatar>
              &nbsp;&nbsp;&nbsp;
              <Avatar size='xl'>DS</Avatar>
              &nbsp;&nbsp;&nbsp;
              <Avatar size='lg'>DS</Avatar>
              &nbsp;&nbsp;&nbsp;
              <Avatar size='md'>DS</Avatar>
              &nbsp;&nbsp;&nbsp;
              <Avatar size='sm'>DS</Avatar>
              &nbsp;&nbsp;&nbsp;
              <Avatar size='xs'>DS</Avatar>
            </div>
          </Card>
        </div>
      </div>
    </ContentLayout>
  )
}

export default AvatarPage
