import { ContentLayout, Card, Tooltip, Button, Text, IconButton, Divider } from '../../components'

const ButtonPage = () => {
  return (
    <ContentLayout label='Button Component'>
      <Card title='Default'>
        <Button>Button</Button>
        <Divider />
        <Text>Variant: contained / Size: md / Color: medium</Text>
      </Card>
      <Card title='Variants'>
        <Button variant='contained'>Contained</Button>&nbsp;&nbsp;&nbsp;&nbsp;
        <Button variant='filled'>Filled</Button>&nbsp;&nbsp;&nbsp;&nbsp;
        <Button variant='transparent'>Transparent</Button>
        <Divider />
        <Text>Variant: contained / filled / transparent</Text>
      </Card>
      <Card title='Rounded'>
        <Button rounded>Contained</Button>
        <Divider />
        <Text>rounded: true</Text>
      </Card>
      <Card title='Sizes'>
        <Button size='lg'>Large</Button>&nbsp;&nbsp;&nbsp;&nbsp;
        <Button size='md'>Medium</Button>&nbsp;&nbsp;&nbsp;&nbsp;
        <Button size='sm'>Small</Button>
        <Divider />
        <Text>Size: lg / md / sm</Text>
      </Card>
      <Card title='Disabled'>
        <Button disabled>Contained</Button>
        <Divider />
        <Text>disabled: true</Text>
      </Card>
      <Card title='With Icon'>
        <Button iconName='Setting2'>Contained</Button>
        <Divider />
        <Text>iconName: string</Text>
      </Card>
      <Card title='Loading'>
        <Button loading>Loading</Button>
        <Divider />
        <Text>loading: true</Text>
      </Card>
      <Card title='Tooltip'>
        <Button tooltipTitle='Tooltip Title'>Tooltip</Button>
        <Divider />
        <Text>tooltipTitle: string</Text>
      </Card>
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
        <Divider />
        <Text>
          Colors: primary / primaryLight / secondary / dark / medium / light / success / error / info / warning
        </Text>
      </Card>
    </ContentLayout>
  )
}

export default ButtonPage
