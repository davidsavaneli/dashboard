import { ContentLayout, Card, Button, Text } from '../../components'

const ButtonPage = () => {
  return (
    <ContentLayout label='Button Component'>
      <div className='row'>
        <div className='col-6'>
          <Card title='Default'>
            <Button>Default</Button>
            <br />
            <br />
            <Text>Variant: contained / Size: md / Color: medium</Text>
          </Card>
        </div>
        <div className='col-6'>
          <Card title='Variants'>
            <Button variant='contained'>Contained</Button>&nbsp;&nbsp;&nbsp;&nbsp;
            <Button variant='filled'>Filled</Button>&nbsp;&nbsp;&nbsp;&nbsp;
            <Button variant='transparent'>Transparent</Button>
            <br />
            <br />
            <Text>Variant: contained / filled / transparent</Text>
          </Card>
        </div>
      </div>
      <Card title='Colors'>
        <Button color='primary'>Primary</Button>&nbsp;&nbsp;&nbsp;&nbsp;
        <Button color='primaryLight'>Primary Light</Button>&nbsp;&nbsp;&nbsp;&nbsp;
        <Button color='secondary'>Secondary</Button>&nbsp;&nbsp;&nbsp;&nbsp;
        <Button color='dark'>Dark</Button>&nbsp;&nbsp;&nbsp;&nbsp;
        <Button color='medium'>Medium</Button>&nbsp;&nbsp;&nbsp;&nbsp;
        <Button color='light'>Light</Button>&nbsp;&nbsp;&nbsp;&nbsp;
        <Button color='success'>Success</Button>&nbsp;&nbsp;&nbsp;&nbsp;
        <Button color='error'>Error</Button>&nbsp;&nbsp;&nbsp;&nbsp;
        <Button color='info'>Info</Button>&nbsp;&nbsp;&nbsp;&nbsp;
        <Button color='warning'>Warning</Button>&nbsp;&nbsp;&nbsp;&nbsp;
        <br />
        <br />
        <Text>
          Colors: primary / primaryLight / secondary / dark / medium / light / success / error / info / warning
        </Text>
      </Card>
      <div className='row'>
        <div className='col-6'>
          <Card title='Rounded'>
            <Button rounded>Rounded</Button>
            <br />
            <br />
            <Text>rounded: true</Text>
          </Card>
        </div>
        <div className='col-6'>
          <Card title='Sizes'>
            <Button size='lg'>Large</Button>&nbsp;&nbsp;&nbsp;&nbsp;
            <Button size='md'>Medium</Button>&nbsp;&nbsp;&nbsp;&nbsp;
            <Button size='sm'>Small</Button>
            <br />
            <br />
            <Text>Size: lg / md / sm</Text>
          </Card>
        </div>
      </div>
      <div className='row'>
        <div className='col-6'>
          <Card title='Disabled'>
            <Button disabled>Disabled</Button>
            <br />
            <br />
            <Text>disabled: true</Text>
          </Card>
        </div>
        <div className='col-6'>
          <Card title='With Icon'>
            <Button iconName='Setting2'>With Icon</Button>
            <br />
            <br />
            <Text>iconName: string</Text>
          </Card>
        </div>
      </div>
      <div className='row'>
        <div className='col-6'>
          <Card title='Loading'>
            <Button loading>Loading</Button>
            <br />
            <br />
            <Text>loading: true</Text>
          </Card>
        </div>
        <div className='col-6'>
          <Card title='Tooltip'>
            <Button tooltipTitle='Tooltip Title'>Tooltip</Button>
            <br />
            <br />
            <Text>tooltipTitle: string</Text>
          </Card>
        </div>
      </div>
    </ContentLayout>
  )
}

export default ButtonPage
