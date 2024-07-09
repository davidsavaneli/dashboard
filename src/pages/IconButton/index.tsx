import { ContentLayout, Card, IconButton, Title, Text, Divider } from '../../components'

const IconButtonPage = () => {
  return (
    <ContentLayout label='Icon Button Component'>
      <div className='row'>
        <div className='col-6'>
          <Card title='Default'>
            <IconButton iconName='Setting2' />
            <br />
            <br />
            <Text color='primaryLight'>Variant: Filled / Size: md / Color: Primary</Text>
          </Card>
          <br />
          <Card title='Variant'>
            <IconButton iconName='Box1' variant='transparent' />
            <br />
            <br />
            <Text color='primaryLight'>Variant: Transparent</Text>
            <Divider />
            <IconButton iconName='Box1' variant='contained' />
            <br />
            <br />
            <Text color='primaryLight'>Variant: Contained</Text>
            <Divider />
            <IconButton iconName='Box1' variant='outlined' />
            <br />
            <br />
            <Text color='primaryLight'>Variant: Outlined</Text>
            <Divider />
            <IconButton iconName='Box1' variant='filled' />
            <br />
            <br />
            <Text color='primaryLight'>Variant: Filled</Text>
          </Card>
          <br />
          <Card title='Rounded'>
            <IconButton iconName='Verify' variant='transparent' rounded />
            <br />
            <br />
            <Text color='primaryLight'>Variant: Transparent / Rounded: true</Text>
            <Divider />
            <IconButton iconName='Verify' variant='contained' rounded />
            <br />
            <br />
            <Text color='primaryLight'>Variant: Contained / Rounded: true</Text>
            <Divider />
            <IconButton iconName='Verify' variant='outlined' rounded />
            <br />
            <br />
            <Text color='primaryLight'>Variant: Outlined / Rounded: true</Text>
            <Divider />
            <IconButton iconName='Verify' variant='filled' rounded />
            <br />
            <br />
            <Text color='primaryLight'>Variant: Filled / Rounded: true</Text>
          </Card>
          <br />
          <Card title='Disabled'>
            <IconButton disabled iconName='Bag2' color='primary' variant='transparent' />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <IconButton
              disabled
              iconName='Bag2'
              color='primary'
              variant='contained'
              onClick={() => console.log('ssss')}
            />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <IconButton disabled iconName='Bag2' color='primary' variant='outlined' />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <IconButton disabled iconName='Bag2' color='primary' variant='filled' />
            <br />
            <br />
            <Text color='primaryLight'>Color: Primary</Text>
            <Divider />
            <IconButton disabled iconName='Bag2' color='primaryLight' variant='transparent' />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <IconButton disabled iconName='Bag2' color='primaryLight' variant='contained' />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <IconButton disabled iconName='Bag2' color='primaryLight' variant='outlined' />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <IconButton disabled iconName='Bag2' color='primaryLight' variant='filled' />
            <br />
            <br />
            <Text color='primaryLight'>Color: PrimaryLight</Text>
            <Divider />
            <IconButton disabled iconName='Bag2' color='secondary' variant='transparent' />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <IconButton disabled iconName='Bag2' color='secondary' variant='contained' />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <IconButton disabled iconName='Bag2' color='secondary' variant='outlined' />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <IconButton disabled iconName='Bag2' color='secondary' variant='filled' />
            <br />
            <br />
            <Text color='primaryLight'>Color: Secondary</Text>
            <Divider />
            <IconButton disabled iconName='Bag2' color='dark' variant='transparent' />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <IconButton disabled iconName='Bag2' color='dark' variant='contained' />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <IconButton disabled iconName='Bag2' color='dark' variant='outlined' />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <IconButton disabled iconName='Bag2' color='dark' variant='filled' />
            <br />
            <br />
            <Text color='primaryLight'>Color: Dark</Text>
            <Divider />
            <IconButton disabled iconName='Bag2' color='medium' variant='transparent' />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <IconButton disabled iconName='Bag2' color='medium' variant='contained' />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <IconButton disabled iconName='Bag2' color='medium' variant='outlined' />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <IconButton disabled iconName='Bag2' color='medium' variant='filled' />
            <br />
            <br />
            <Text color='primaryLight'>Color: Medium</Text>
            <Divider />
            <IconButton disabled iconName='Bag2' color='light' variant='transparent' />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <IconButton disabled iconName='Bag2' color='light' variant='contained' />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <IconButton disabled iconName='Bag2' color='light' variant='outlined' />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <IconButton disabled iconName='Bag2' color='light' variant='filled' />
            <br />
            <br />
            <Text color='primaryLight'>Color: Light</Text>
            <Divider />
            <IconButton disabled iconName='Bag2' color='success' variant='transparent' />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <IconButton disabled iconName='Bag2' color='success' variant='contained' />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <IconButton disabled iconName='Bag2' color='success' variant='outlined' />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <IconButton disabled iconName='Bag2' color='success' variant='filled' />
            <br />
            <br />
            <Text color='primaryLight'>Color: Success</Text>
            <Divider />
            <IconButton disabled iconName='Bag2' color='error' variant='transparent' />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <IconButton disabled iconName='Bag2' color='error' variant='contained' />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <IconButton disabled iconName='Bag2' color='error' variant='outlined' />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <IconButton disabled iconName='Bag2' color='error' variant='filled' />
            <br />
            <br />
            <Text color='primaryLight'>Color: Error</Text>
            <Divider />
            <IconButton disabled iconName='Bag2' color='info' variant='transparent' />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <IconButton disabled iconName='Bag2' color='info' variant='contained' />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <IconButton disabled iconName='Bag2' color='info' variant='outlined' />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <IconButton disabled iconName='Bag2' color='info' variant='filled' />
            <br />
            <br />
            <Text color='primaryLight'>Color: Info</Text>
            <Divider />
            <IconButton disabled iconName='Bag2' color='warning' variant='transparent' />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <IconButton disabled iconName='Bag2' color='warning' variant='contained' />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <IconButton disabled iconName='Bag2' color='warning' variant='outlined' />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <IconButton disabled iconName='Bag2' color='warning' variant='filled' />
            <br />
            <br />
            <Text color='primaryLight'>Color: Warning</Text>
            <Divider />
          </Card>
        </div>
        <div className='col-6'>
          <Card title='Colors'>
            <IconButton iconName='Bag2' color='primary' variant='transparent' />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <IconButton iconName='Bag2' color='primary' variant='contained' />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <IconButton iconName='Bag2' color='primary' variant='outlined' />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <IconButton iconName='Bag2' color='primary' variant='filled' />
            <br />
            <br />
            <Text color='primaryLight'>Color: Primary</Text>
            <Divider />
            <IconButton iconName='Bag2' color='primaryLight' variant='transparent' />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <IconButton iconName='Bag2' color='primaryLight' variant='contained' />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <IconButton iconName='Bag2' color='primaryLight' variant='outlined' />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <IconButton iconName='Bag2' color='primaryLight' variant='filled' />
            <br />
            <br />
            <Text color='primaryLight'>Color: PrimaryLight</Text>
            <Divider />
            <IconButton iconName='Bag2' color='secondary' variant='transparent' />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <IconButton iconName='Bag2' color='secondary' variant='contained' />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <IconButton iconName='Bag2' color='secondary' variant='outlined' />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <IconButton iconName='Bag2' color='secondary' variant='filled' />
            <br />
            <br />
            <Text color='primaryLight'>Color: Secondary</Text>
            <Divider />
            <IconButton iconName='Bag2' color='dark' variant='transparent' />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <IconButton iconName='Bag2' color='dark' variant='contained' />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <IconButton iconName='Bag2' color='dark' variant='outlined' />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <IconButton iconName='Bag2' color='dark' variant='filled' />
            <br />
            <br />
            <Text color='primaryLight'>Color: Dark</Text>
            <Divider />
            <IconButton iconName='Bag2' color='medium' variant='transparent' />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <IconButton iconName='Bag2' color='medium' variant='contained' />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <IconButton iconName='Bag2' color='medium' variant='outlined' />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <IconButton iconName='Bag2' color='medium' variant='filled' />
            <br />
            <br />
            <Text color='primaryLight'>Color: Medium</Text>
            <Divider />
            <IconButton iconName='Bag2' color='light' variant='transparent' />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <IconButton iconName='Bag2' color='light' variant='contained' />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <IconButton iconName='Bag2' color='light' variant='outlined' />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <IconButton iconName='Bag2' color='light' variant='filled' />
            <br />
            <br />
            <Text color='primaryLight'>Color: Light</Text>
            <Divider />
            <IconButton iconName='Bag2' color='success' variant='transparent' />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <IconButton iconName='Bag2' color='success' variant='contained' />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <IconButton iconName='Bag2' color='success' variant='outlined' />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <IconButton iconName='Bag2' color='success' variant='filled' />
            <br />
            <br />
            <Text color='primaryLight'>Color: Success</Text>
            <Divider />
            <IconButton iconName='Bag2' color='error' variant='transparent' />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <IconButton iconName='Bag2' color='error' variant='contained' />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <IconButton iconName='Bag2' color='error' variant='outlined' />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <IconButton iconName='Bag2' color='error' variant='filled' />
            <br />
            <br />
            <Text color='primaryLight'>Color: Error</Text>
            <Divider />
            <IconButton iconName='Bag2' color='info' variant='transparent' />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <IconButton iconName='Bag2' color='info' variant='contained' />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <IconButton iconName='Bag2' color='info' variant='outlined' />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <IconButton iconName='Bag2' color='info' variant='filled' />
            <br />
            <br />
            <Text color='primaryLight'>Color: Info</Text>
            <Divider />
            <IconButton iconName='Bag2' color='warning' variant='transparent' />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <IconButton iconName='Bag2' color='warning' variant='contained' />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <IconButton iconName='Bag2' color='warning' variant='outlined' />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <IconButton iconName='Bag2' color='warning' variant='filled' />
            <br />
            <br />
            <Text color='primaryLight'>Color: Warning</Text>
            <Divider />
          </Card>
          <br />
          <Card title='Sizes'>
            <IconButton iconName='Bag2' size='sm' />
            <br />
            <br />
            <Text color='primaryLight'>Size: sm</Text>
            <Divider />
            <IconButton iconName='Bag2' size='md' />
            <br />
            <br />
            <Text color='primaryLight'>Size: md</Text>
            <Divider />
            <IconButton iconName='Bag2' size='lg' />
            <br />
            <br />
            <Text color='primaryLight'>Size: lg</Text>
          </Card>
          <br />
          <Card title='Loading'>
            <IconButton iconName='Setting2' size='sm' color='primary' loading />
            <br />
            <br />
            <Text color='primaryLight'>Size: sm / Color: Primary / Loading: true</Text>
            <Divider />
            <IconButton iconName='Setting2' size='md' color='success' loading />
            <br />
            <br />
            <Text color='primaryLight'>Size: md / Color: Primary / Loading: true</Text>
            <Divider />
            <IconButton iconName='Setting2' size='lg' color='error' loading />
            <br />
            <br />
            <Text color='primaryLight'>Size: lg / Color: Primary / Loading: true</Text>
          </Card>
        </div>
      </div>
    </ContentLayout>
  )
}

export default IconButtonPage
