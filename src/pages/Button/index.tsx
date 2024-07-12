import { ContentLayout, Card, Tooltip, Button, Text, IconButton, Divider } from '../../components'

const ButtonPage = () => {
  return (
    <ContentLayout label='Button Component'>
      <div className='row'>
        <div className='col-6'>
          <Card title='Default'>
            <Button>Button</Button>
            <br />
            <br />
            <Text>Variant: Contained / Size: md / Color: Primary</Text>
          </Card>
          <br />
          <Card title='Variant'>
            <Button variant='transparent'>Button</Button>
            <br />
            <br />
            <Text>Variant: Transparent</Text>
            <Divider />
            <Button variant='contained'>Button</Button>
            <br />
            <br />
            <Text>Variant: Contained</Text>
            <Divider />
            <Button variant='filled'>Button</Button>
            <br />
            <br />
            <Text>Variant: Filled</Text>
          </Card>
          <br />
          <Card title='Rounded'>
            <Button variant='transparent' rounded>
              Button
            </Button>
            <br />
            <br />
            <Text>Variant: Transparent / Rounded: true</Text>
            <Divider />
            <Button variant='contained' rounded>
              Button
            </Button>
            <br />
            <br />
            <Text>Variant: Contained / Rounded: true</Text>
            <Divider />
            <Button variant='filled' rounded>
              Button
            </Button>
            <br />
            <br />
            <Text>Variant: Filled / Rounded: true</Text>
          </Card>
          <br />
          <Card title='Disabled'>
            <Button variant='transparent' disabled color='primary'>
              Button
            </Button>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Button variant='contained' disabled color='primary'>
              Button
            </Button>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Button variant='filled' disabled color='primary'>
              Button
            </Button>
            <br />
            <br />
            <Text>Color: Primary</Text>
            <Divider />
            <Button variant='transparent' disabled color='primaryLight'>
              Button
            </Button>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Button variant='contained' disabled color='primaryLight'>
              Button
            </Button>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Button variant='filled' disabled color='primaryLight'>
              Button
            </Button>
            <br />
            <br />
            <Text>Color: PrimaryLight</Text>
            <Divider />
            <Button variant='transparent' disabled color='secondary'>
              Button
            </Button>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Button variant='contained' disabled color='secondary'>
              Button
            </Button>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Button variant='filled' disabled color='secondary'>
              Button
            </Button>
            <br />
            <br />
            <Text>Color: Secondary</Text>
            <Divider />
            <Button variant='transparent' disabled color='dark'>
              Button
            </Button>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Button variant='contained' disabled color='dark'>
              Button
            </Button>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Button variant='filled' disabled color='dark'>
              Button
            </Button>
            <br />
            <br />
            <Text>Color: Dark</Text>
            <Divider />
            <Button variant='transparent' disabled color='medium'>
              Button
            </Button>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Button variant='contained' disabled color='medium'>
              Button
            </Button>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Button variant='filled' disabled color='medium'>
              Button
            </Button>
            <br />
            <br />
            <Text>Color: Medium</Text>
            <Divider />
            <Button variant='transparent' disabled color='light'>
              Button
            </Button>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Button variant='contained' disabled color='light'>
              Button
            </Button>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Button variant='filled' disabled color='light'>
              Button
            </Button>
            <br />
            <br />
            <Text>Color: Light</Text>
            <Divider />
            <Button variant='transparent' disabled color='success'>
              Button
            </Button>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Button variant='contained' disabled color='success'>
              Button
            </Button>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Button variant='filled' disabled color='success'>
              Button
            </Button>
            <br />
            <br />
            <Text>Color: Success</Text>
            <Divider />
            <Button variant='transparent' disabled color='error'>
              Button
            </Button>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Button variant='contained' disabled color='error'>
              Button
            </Button>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Button variant='filled' disabled color='error'>
              Button
            </Button>
            <br />
            <br />
            <Text>Color: Error</Text>
            <Divider />
            <Button variant='transparent' disabled color='info'>
              Button
            </Button>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Button variant='contained' disabled color='info'>
              Button
            </Button>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Button variant='filled' disabled color='info'>
              Button
            </Button>
            <br />
            <br />
            <Text>Color: Info</Text>
            <Divider />
            <Button variant='transparent' disabled color='warning'>
              Button
            </Button>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Button variant='contained' disabled color='warning'>
              Button
            </Button>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Button variant='filled' disabled color='warning'>
              Button
            </Button>
            <br />
            <br />
            <Text>Color: Warning</Text>
          </Card>
          <br />
          <Card title='With Icon'>
            <Button iconName='Setting2'>Button</Button>
            <br />
            <br />
            <Button iconName='Setting2' loading variant='transparent'>
              Button
            </Button>
            <br />
            <br />
            <Text>Icon: Setting2 / Loading: true</Text>
          </Card>
        </div>
        <div className='col-6'>
          <Card title='Colors'>
            <Button variant='transparent' color='primary'>
              Button
            </Button>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Button variant='contained' color='primary'>
              Button
            </Button>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Button variant='filled' color='primary'>
              Button
            </Button>
            <br />
            <br />
            <Text>Color: Primary</Text>
            <Divider />
            <Button variant='transparent' color='primaryLight'>
              Button
            </Button>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Button variant='contained' color='primaryLight'>
              Button
            </Button>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Button variant='filled' color='primaryLight'>
              Button
            </Button>
            <br />
            <br />
            <Text>Color: PrimaryLight</Text>
            <Divider />
            <Button variant='transparent' color='secondary'>
              Button
            </Button>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Button variant='contained' color='secondary'>
              Button
            </Button>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Button variant='filled' color='secondary'>
              Button
            </Button>
            <br />
            <br />
            <Text>Color: Secondary</Text>
            <Divider />
            <Button variant='transparent' color='dark'>
              Button
            </Button>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Button variant='contained' color='dark'>
              Button
            </Button>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Button variant='filled' color='dark'>
              Button
            </Button>
            <br />
            <br />
            <Text>Color: Dark</Text>
            <Divider />
            <Button variant='transparent' color='medium'>
              Button
            </Button>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Button variant='contained' color='medium'>
              Button
            </Button>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Button variant='filled' color='medium'>
              Button
            </Button>
            <br />
            <br />
            <Text>Color: Medium</Text>
            <Divider />
            <Button variant='transparent' color='light'>
              Button
            </Button>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Button variant='contained' color='light'>
              Button
            </Button>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Button variant='filled' color='light'>
              Button
            </Button>
            <br />
            <br />
            <Text>Color: Light</Text>
            <Divider />
            <Button variant='transparent' color='success'>
              Button
            </Button>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Button variant='contained' color='success'>
              Button
            </Button>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Button variant='filled' color='success'>
              Button
            </Button>
            <br />
            <br />
            <Text>Color: Success</Text>
            <Divider />
            <Button variant='transparent' color='error'>
              Button
            </Button>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Button variant='contained' color='error'>
              Button
            </Button>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Button variant='filled' color='error'>
              Button
            </Button>
            <br />
            <br />
            <Text>Color: Error</Text>
            <Divider />
            <Button variant='transparent' color='info'>
              Button
            </Button>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Button variant='contained' color='info'>
              Button
            </Button>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Button variant='filled' color='info'>
              Button
            </Button>
            <br />
            <br />
            <Text>Color: Info</Text>
            <Divider />
            <Button variant='transparent' color='warning'>
              Button
            </Button>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Button variant='contained' color='warning'>
              Button
            </Button>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Button variant='filled' color='warning'>
              Button
            </Button>
            <br />
            <br />
            <Text>Color: Warning</Text>
          </Card>
          <br />
          <Card title='Sizes'>
            <Button size='sm'>Button</Button>
            <br />
            <br />
            <Text>Size: sm</Text>
            <Divider />
            <Button size='md'>Button</Button>
            <br />
            <br />
            <Text>Size: md</Text>
            <Divider />
            <Button size='lg'>Button</Button>
            <br />
            <br />
            <Text>Size: lg</Text>
          </Card>
          <br />
          <Card title='Loading'>
            <Button size='sm' color='primary' loading>
              Button
            </Button>
            <br />
            <br />
            <Text>Size: sm / Color: Primary / Loading: true</Text>
            <Divider />
            <Button size='md' color='success' loading>
              Button
            </Button>
            <br />
            <br />
            <Text>Size: md / Color: Success / Loading: true</Text>
            <Divider />
            <Button size='lg' color='error' loading>
              Button
            </Button>
            <br />
            <br />
            <Text>Size: lg / Color: Error / Loading: true</Text>
          </Card>
          <br />
          <Card title='Tooltip'>
            <Button tooltipTitle='Tooltip Title'>Button</Button>
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
