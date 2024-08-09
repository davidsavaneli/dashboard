import { ContentLayout, Card, Fab, Text, Divider } from '../../components'

const FabPage = () => {
  return (
    <ContentLayout label='Fab Component'>
      <div className='row'>
        <div className='col-6'>
          <Card title='Default'>
            <Fab iconName='Setting2' />
            <br />
            <br />
            <Text>Variant: Circular / Size: md / Color: Primary</Text>
          </Card>
          <br />
          <Card title='Variant'>
            <Fab variant='extended'>
              <Text>extended</Text>
            </Fab>
            <br />
            <br />
            <Text>Variant: Circular / Extended / string</Text>
          </Card>
          <br />
          <Card title='Tooltip'>
            <Fab iconName='Home' tooltipTitle='Tooltip Title' />
            <br />
            <br />
            <Text>tooltipTitle: ReactNode</Text>
          </Card>
          <br />
          <Card title='Sizes'>
            <Fab iconName='Home' size='sm' />
            <br />
            <br />
            <Text>Size: sm</Text>
            <Divider />
            <Fab iconName='Home' size='md' />
            <br />
            <br />
            <Text>Size: md</Text>
            <Divider />
            <Fab iconName='Home' size='lg' />
            <br />
            <br />
            <Text>Size: lg</Text>
          </Card>
          <br />
          <Card title='Disabled'>
            <Fab iconName='Home' disabled />
          </Card>
        </div>
        <div className='col-6'>
          <Card title='Colors'>
            <Fab iconName='Setting2' color='primary' />
            <br />
            <br />
            <Text>Color: Primary</Text>
            <Divider />
            <Fab iconName='Setting2' color='primaryLight' />
            <br />
            <br />
            <Text>Color: PrimaryLight</Text>
            <Divider />
            <Fab iconName='Setting2' color='secondary' />
            <br />
            <br />
            <Text>Color: Secondary</Text>
            <Divider />
            <Fab iconName='Setting2' color='dark' />
            <br />
            <br />
            <Text>Color: Dark</Text>
            <Divider />
            <Fab iconName='Setting2' color='medium' />
            <br />
            <br />
            <Text>Color: Medium</Text>
            <Divider />
            <Fab iconName='Setting2' color='light' />
            <br />
            <br />
            <Text>Color: Light</Text>
            <Divider />
            <Fab iconName='Setting2' color='success' />
            <br />
            <br />
            <Text>Color: Success</Text>
            <Divider />
            <Fab iconName='Setting2' color='error' />
            <br />
            <br />
            <Text>Color: Error</Text>
            <Divider />
            <Fab iconName='Setting2' color='info' />
            <br />
            <br />
            <Text>Color: Info</Text>
            <Divider />
            <Fab iconName='Setting2' color='warning' />
            <br />
            <br />
            <Text>Color: Warning</Text>
          </Card>
        </div>
      </div>
    </ContentLayout>
  )
}

export default FabPage
