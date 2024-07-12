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
            <Text>Variant: Filled / Size: md / Color: Primary</Text>
          </Card>
          <br />
          <Card title='Variant'>
            <IconButton iconName='Box1' variant='transparent' />
            <br />
            <br />
            <Text>Variant: Transparent</Text>
            <Divider />
            <IconButton iconName='Box1' variant='contained' />
            <br />
            <br />
            <Text>Variant: Contained</Text>
            <Divider />
            <IconButton iconName='Box1' variant='filled' />
            <br />
            <br />
            <Text>Variant: Filled</Text>
          </Card>
          <br />
          <Card title='Rounded'>
            <IconButton iconName='Verify' variant='transparent' rounded />
            <br />
            <br />
            <Text>Variant: Transparent / Rounded: true</Text>
            <Divider />
            <IconButton iconName='Verify' variant='contained' rounded />
            <br />
            <br />
            <Text>Variant: Contained / Rounded: true</Text>
            <Divider />
            <IconButton iconName='Verify' variant='filled' rounded />
            <br />
            <br />
            <Text>Variant: Filled / Rounded: true</Text>
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
            <IconButton disabled iconName='Bag2' color='primary' variant='filled' />
            <br />
            <br />
            <Text>Color: Primary</Text>
            <Divider />
            <IconButton disabled iconName='Bag2' color='primaryLight' variant='transparent' />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <IconButton disabled iconName='Bag2' color='primaryLight' variant='contained' />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <IconButton disabled iconName='Bag2' color='primaryLight' variant='filled' />
            <br />
            <br />
            <Text>Color: PrimaryLight</Text>
            <Divider />
            <IconButton disabled iconName='Bag2' color='secondary' variant='transparent' />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <IconButton disabled iconName='Bag2' color='secondary' variant='contained' />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <IconButton disabled iconName='Bag2' color='secondary' variant='filled' />
            <br />
            <br />
            <Text>Color: Secondary</Text>
            <Divider />
            <IconButton disabled iconName='Bag2' color='dark' variant='transparent' />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <IconButton disabled iconName='Bag2' color='dark' variant='contained' />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <IconButton disabled iconName='Bag2' color='dark' variant='filled' />
            <br />
            <br />
            <Text>Color: Dark</Text>
            <Divider />
            <IconButton disabled iconName='Bag2' color='medium' variant='transparent' />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <IconButton disabled iconName='Bag2' color='medium' variant='contained' />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <IconButton disabled iconName='Bag2' color='medium' variant='filled' />
            <br />
            <br />
            <Text>Color: Medium</Text>
            <Divider />
            <IconButton disabled iconName='Bag2' color='light' variant='transparent' />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <IconButton disabled iconName='Bag2' color='light' variant='contained' />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <IconButton disabled iconName='Bag2' color='light' variant='filled' />
            <br />
            <br />
            <Text>Color: Light</Text>
            <Divider />
            <IconButton disabled iconName='Bag2' color='success' variant='transparent' />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <IconButton disabled iconName='Bag2' color='success' variant='contained' />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <IconButton disabled iconName='Bag2' color='success' variant='filled' />
            <br />
            <br />
            <Text>Color: Success</Text>
            <Divider />
            <IconButton disabled iconName='Bag2' color='error' variant='transparent' />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <IconButton disabled iconName='Bag2' color='error' variant='contained' />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <IconButton disabled iconName='Bag2' color='error' variant='filled' />
            <br />
            <br />
            <Text>Color: Error</Text>
            <Divider />
            <IconButton disabled iconName='Bag2' color='info' variant='transparent' />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <IconButton disabled iconName='Bag2' color='info' variant='contained' />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <IconButton disabled iconName='Bag2' color='info' variant='filled' />
            <br />
            <br />
            <Text>Color: Info</Text>
            <Divider />
            <IconButton disabled iconName='Bag2' color='warning' variant='transparent' />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <IconButton disabled iconName='Bag2' color='warning' variant='contained' />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <IconButton disabled iconName='Bag2' color='warning' variant='filled' />
            <br />
            <br />
            <Text>Color: Warning</Text>
          </Card>
        </div>
        <div className='col-6'>
          <Card title='Colors'>
            <IconButton iconName='Bag2' color='primary' variant='transparent' />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <IconButton iconName='Bag2' color='primary' variant='contained' />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <IconButton iconName='Bag2' color='primary' variant='filled' />
            <br />
            <br />
            <Text>Color: Primary</Text>
            <Divider />
            <IconButton iconName='Bag2' color='primaryLight' variant='transparent' />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <IconButton iconName='Bag2' color='primaryLight' variant='contained' />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <IconButton iconName='Bag2' color='primaryLight' variant='filled' />
            <br />
            <br />
            <Text>Color: PrimaryLight</Text>
            <Divider />
            <IconButton iconName='Bag2' color='secondary' variant='transparent' />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <IconButton iconName='Bag2' color='secondary' variant='contained' />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <IconButton iconName='Bag2' color='secondary' variant='filled' />
            <br />
            <br />
            <Text>Color: Secondary</Text>
            <Divider />
            <IconButton iconName='Bag2' color='dark' variant='transparent' />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <IconButton iconName='Bag2' color='dark' variant='contained' />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <IconButton iconName='Bag2' color='dark' variant='filled' />
            <br />
            <br />
            <Text>Color: Dark</Text>
            <Divider />
            <IconButton iconName='Bag2' color='medium' variant='transparent' />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <IconButton iconName='Bag2' color='medium' variant='contained' />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <IconButton iconName='Bag2' color='medium' variant='filled' />
            <br />
            <br />
            <Text>Color: Medium</Text>
            <Divider />
            <IconButton iconName='Bag2' color='light' variant='transparent' />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <IconButton iconName='Bag2' color='light' variant='contained' />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <IconButton iconName='Bag2' color='light' variant='filled' />
            <br />
            <br />
            <Text>Color: Light</Text>
            <Divider />
            <IconButton iconName='Bag2' color='success' variant='transparent' />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <IconButton iconName='Bag2' color='success' variant='contained' />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <IconButton iconName='Bag2' color='success' variant='filled' />
            <br />
            <br />
            <Text>Color: Success</Text>
            <Divider />
            <IconButton iconName='Bag2' color='error' variant='transparent' />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <IconButton iconName='Bag2' color='error' variant='contained' />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <IconButton iconName='Bag2' color='error' variant='filled' />
            <br />
            <br />
            <Text>Color: Error</Text>
            <Divider />
            <IconButton iconName='Bag2' color='info' variant='transparent' />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <IconButton iconName='Bag2' color='info' variant='contained' />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <IconButton iconName='Bag2' color='info' variant='filled' />
            <br />
            <br />
            <Text>Color: Info</Text>
            <Divider />
            <IconButton iconName='Bag2' color='warning' variant='transparent' />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <IconButton iconName='Bag2' color='warning' variant='contained' />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <IconButton iconName='Bag2' color='warning' variant='filled' />
            <br />
            <br />
            <Text>Color: Warning</Text>
          </Card>
          <br />
          <Card title='Sizes'>
            <IconButton iconName='Bag2' size='sm' />
            <br />
            <br />
            <Text>Size: sm</Text>
            <Divider />
            <IconButton iconName='Bag2' size='md' />
            <br />
            <br />
            <Text>Size: md</Text>
            <Divider />
            <IconButton iconName='Bag2' size='lg' />
            <br />
            <br />
            <Text>Size: lg</Text>
          </Card>
          <br />
          <Card title='Loading'>
            <IconButton iconName='Setting2' size='sm' color='primary' loading />
            <br />
            <br />
            <Text>Size: sm / Color: Primary / Loading: true</Text>
            <Divider />
            <IconButton iconName='Setting2' size='md' color='success' loading />
            <br />
            <br />
            <Text>Size: md / Color: Success / Loading: true</Text>
            <Divider />
            <IconButton iconName='Setting2' size='lg' color='error' loading />
            <br />
            <br />
            <Text>Size: lg / Color: Error / Loading: true</Text>
          </Card>
          <br />
          <Card title='Tooltip'>
            <IconButton iconName='Filter' tooltipTitle='Filter' />
            <br />
            <br />
            <Text>tooltipTitle: string</Text>
          </Card>
        </div>
      </div>
    </ContentLayout>
  )
}

export default IconButtonPage
