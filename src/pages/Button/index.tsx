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
            <Text color='primaryLight'>Variant: Contained / Size: md / Color: Primary</Text>
          </Card>
          <br />
          <Card title='Variant'>
            <Button variant='transparent'>Button</Button>
            <br />
            <br />
            <Text color='primaryLight'>Variant: Transparent</Text>
            <Divider />
            <Button variant='contained'>Button</Button>
            <br />
            <br />
            <Text color='primaryLight'>Variant: Contained</Text>
            <Divider />
            <Button variant='outlined'>Button</Button>
            <br />
            <br />
            <Text color='primaryLight'>Variant: Outlined</Text>
            <Divider />
            <Button variant='transparent'>Button</Button>
            <br />
            <br />
            <Text color='primaryLight'>Variant: Filled</Text>
          </Card>
          <br />
          <Card title='Rounded'>
            <Button variant='transparent' rounded>
              Button
            </Button>
            <br />
            <br />
            <Text color='primaryLight'>Variant: Transparent / Rounded: true</Text>
            <Divider />
            <Button variant='contained' rounded>
              Button
            </Button>
            <br />
            <br />
            <Text color='primaryLight'>Variant: Contained / Rounded: true</Text>
            <Divider />
            <Button variant='outlined' rounded>
              Button
            </Button>
            <br />
            <br />
            <Text color='primaryLight'>Variant: Outlined / Rounded: true</Text>
            <Divider />
            <Button variant='filled' rounded>
              Button
            </Button>
            <br />
            <br />
            <Text color='primaryLight'>Variant: Filled / Rounded: true</Text>
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
            <Button variant='outlined' disabled color='primary'>
              Button
            </Button>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Button variant='filled' disabled color='primary'>
              Button
            </Button>
            <br />
            <br />
            <Text color='primaryLight'>Color: Primary</Text>
            <Divider />
            <Button variant='transparent' disabled color='primaryLight'>
              Button
            </Button>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Button variant='contained' disabled color='primaryLight'>
              Button
            </Button>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Button variant='outlined' disabled color='primaryLight'>
              Button
            </Button>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Button variant='filled' disabled color='primaryLight'>
              Button
            </Button>
            <br />
            <br />
            <Text color='primaryLight'>Color: PrimaryLight</Text>
            <Divider />
            <Button variant='transparent' disabled color='secondary'>
              Button
            </Button>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Button variant='contained' disabled color='secondary'>
              Button
            </Button>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Button variant='outlined' disabled color='secondary'>
              Button
            </Button>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Button variant='filled' disabled color='secondary'>
              Button
            </Button>
            <br />
            <br />
            <Text color='primaryLight'>Color: Secondary</Text>
            <Divider />
            <Button variant='transparent' disabled color='dark'>
              Button
            </Button>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Button variant='contained' disabled color='dark'>
              Button
            </Button>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Button variant='outlined' disabled color='dark'>
              Button
            </Button>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Button variant='filled' disabled color='dark'>
              Button
            </Button>
            <br />
            <br />
            <Text color='primaryLight'>Color: Dark</Text>
            <Divider />
            <Button variant='transparent' disabled color='medium'>
              Button
            </Button>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Button variant='contained' disabled color='medium'>
              Button
            </Button>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Button variant='outlined' disabled color='medium'>
              Button
            </Button>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Button variant='filled' disabled color='medium'>
              Button
            </Button>
            <br />
            <br />
            <Text color='primaryLight'>Color: Medium</Text>
            <Divider />
            <Button variant='transparent' disabled color='light'>
              Button
            </Button>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Button variant='contained' disabled color='light'>
              Button
            </Button>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Button variant='outlined' disabled color='light'>
              Button
            </Button>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Button variant='filled' disabled color='light'>
              Button
            </Button>
            <br />
            <br />
            <Text color='primaryLight'>Color: Light</Text>
            <Divider />
            <Button variant='transparent' disabled color='success'>
              Button
            </Button>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Button variant='contained' disabled color='success'>
              Button
            </Button>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Button variant='outlined' disabled color='success'>
              Button
            </Button>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Button variant='filled' disabled color='success'>
              Button
            </Button>
            <br />
            <br />
            <Text color='primaryLight'>Color: Success</Text>
            <Divider />
            <Button variant='transparent' disabled color='error'>
              Button
            </Button>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Button variant='contained' disabled color='error'>
              Button
            </Button>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Button variant='outlined' disabled color='error'>
              Button
            </Button>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Button variant='filled' disabled color='error'>
              Button
            </Button>
            <br />
            <br />
            <Text color='primaryLight'>Color: Error</Text>
            <Divider />
            <Button variant='transparent' disabled color='info'>
              Button
            </Button>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Button variant='contained' disabled color='info'>
              Button
            </Button>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Button variant='outlined' disabled color='info'>
              Button
            </Button>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Button variant='filled' disabled color='info'>
              Button
            </Button>
            <br />
            <br />
            <Text color='primaryLight'>Color: Info</Text>
            <Divider />
            <Button variant='transparent' disabled color='warning'>
              Button
            </Button>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Button variant='contained' disabled color='warning'>
              Button
            </Button>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Button variant='outlined' disabled color='warning'>
              Button
            </Button>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Button variant='filled' disabled color='warning'>
              Button
            </Button>
            <br />
            <br />
            <Text color='primaryLight'>Color: Warning</Text>
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
            <Button variant='outlined' color='primary'>
              Button
            </Button>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Button variant='filled' color='primary'>
              Button
            </Button>
            <br />
            <br />
            <Text color='primaryLight'>Color: Primary</Text>
            <Divider />
            <Button variant='transparent' color='primaryLight'>
              Button
            </Button>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Button variant='contained' color='primaryLight'>
              Button
            </Button>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Button variant='outlined' color='primaryLight'>
              Button
            </Button>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Button variant='filled' color='primaryLight'>
              Button
            </Button>
            <br />
            <br />
            <Text color='primaryLight'>Color: PrimaryLight</Text>
            <Divider />
            <Button variant='transparent' color='secondary'>
              Button
            </Button>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Button variant='contained' color='secondary'>
              Button
            </Button>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Button variant='outlined' color='secondary'>
              Button
            </Button>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Button variant='filled' color='secondary'>
              Button
            </Button>
            <br />
            <br />
            <Text color='primaryLight'>Color: Secondary</Text>
            <Divider />
            <Button variant='transparent' color='dark'>
              Button
            </Button>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Button variant='contained' color='dark'>
              Button
            </Button>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Button variant='outlined' color='dark'>
              Button
            </Button>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Button variant='filled' color='dark'>
              Button
            </Button>
            <br />
            <br />
            <Text color='primaryLight'>Color: Dark</Text>
            <Divider />
            <Button variant='transparent' color='medium'>
              Button
            </Button>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Button variant='contained' color='medium'>
              Button
            </Button>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Button variant='outlined' color='medium'>
              Button
            </Button>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Button variant='filled' color='medium'>
              Button
            </Button>
            <br />
            <br />
            <Text color='primaryLight'>Color: Medium</Text>
            <Divider />
            <Button variant='transparent' color='light'>
              Button
            </Button>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Button variant='contained' color='light'>
              Button
            </Button>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Button variant='outlined' color='light'>
              Button
            </Button>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Button variant='filled' color='light'>
              Button
            </Button>
            <br />
            <br />
            <Text color='primaryLight'>Color: Light</Text>
            <Divider />
            <Button variant='transparent' color='success'>
              Button
            </Button>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Button variant='contained' color='success'>
              Button
            </Button>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Button variant='outlined' color='success'>
              Button
            </Button>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Button variant='filled' color='success'>
              Button
            </Button>
            <br />
            <br />
            <Text color='primaryLight'>Color: Success</Text>
            <Divider />
            <Button variant='transparent' color='error'>
              Button
            </Button>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Button variant='contained' color='error'>
              Button
            </Button>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Button variant='outlined' color='error'>
              Button
            </Button>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Button variant='filled' color='error'>
              Button
            </Button>
            <br />
            <br />
            <Text color='primaryLight'>Color: Error</Text>
            <Divider />
            <Button variant='transparent' color='info'>
              Button
            </Button>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Button variant='contained' color='info'>
              Button
            </Button>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Button variant='outlined' color='info'>
              Button
            </Button>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Button variant='filled' color='info'>
              Button
            </Button>
            <br />
            <br />
            <Text color='primaryLight'>Color: Info</Text>
            <Divider />
            <Button variant='transparent' color='warning'>
              Button
            </Button>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Button variant='contained' color='warning'>
              Button
            </Button>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Button variant='outlined' color='warning'>
              Button
            </Button>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Button variant='filled' color='warning'>
              Button
            </Button>
            <br />
            <br />
            <Text color='primaryLight'>Color: Warning</Text>
          </Card>
          <br />
          <Card title='Sizes'>
            <Button size='sm'>Button</Button>
            <br />
            <br />
            <Text color='primaryLight'>Size: sm</Text>
            <Divider />
            <Button size='md'>Button</Button>
            <br />
            <br />
            <Text color='primaryLight'>Size: md</Text>
            <Divider />
            <Button size='lg'>Button</Button>
            <br />
            <br />
            <Text color='primaryLight'>Size: lg</Text>
          </Card>
          <br />
          <Card title='Loading'>
            <Button size='sm' color='primary' loading>Button</Button>
            <br />
            <br />
            <Text color='primaryLight'>Size: sm / Color: Primary / Loading: true</Text>
            <Divider />
            <Button size='md' color='success' loading>Button</Button>
            <br />
            <br />
            <Text color='primaryLight'>Size: md / Color: Success / Loading: true</Text>
            <Divider />
            <Button size='lg' color='error' loading>Button</Button>
            <br />
            <br />
            <Text color='primaryLight'>Size: lg / Color: Error / Loading: true</Text>
          </Card>
          <br />
          {/* <Card title='Tooltip'>
            <IconButton iconName='Filter' tooltipTitle='Filter' />
            <br />
            <br />
            <Text color='primaryLight'>tooltipTitle: string</Text>
          </Card> */}
        </div>
      </div>
    </ContentLayout>
  )
}

export default ButtonPage
