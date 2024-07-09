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
            <Text color='primaryLight'>Variant: Circular / Size: md / Color: Primary</Text>
          </Card>
          <br />
          <Card title='Variant'>
            <Fab variant='extended'>
              <Text>extended</Text>
            </Fab>
            <br />
            <br />
            <Text color='primaryLight'>Variant: Circular / Extended / string</Text>
          </Card>
          <br />
          <Card title='Tooltip'>
            <Fab iconName='Home' tooltipTitle='Tooltip Title' />
            <br />
            <br />
            <Text color='primaryLight'>tooltipTitle: string</Text>
          </Card>
          <br />
          <Card title='Sizes'>
            <Fab iconName='Home' size='sm' />
            <br />
            <br />
            <Text color='primaryLight'>Size: sm</Text>
            <Divider />
            <Fab iconName='Home' size='md' />
            <br />
            <br />
            <Text color='primaryLight'>Size: md</Text>
            <Divider />
            <Fab iconName='Home' size='lg' />
            <br />
            <br />
            <Text color='primaryLight'>Size: lg</Text>
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
            <Text color='primaryLight'>Color: Primary</Text>
            <Divider />
            <Fab iconName='Setting2' color='primaryLight' />
            <br />
            <br />
            <Text color='primaryLight'>Color: PrimaryLight</Text>
            <Divider />
            <Fab iconName='Setting2' color='secondary' />
            <br />
            <br />
            <Text color='primaryLight'>Color: Secondary</Text>
            <Divider />
            <Fab iconName='Setting2' color='dark' />
            <br />
            <br />
            <Text color='primaryLight'>Color: Dark</Text>
            <Divider />
            <Fab iconName='Setting2' color='medium' />
            <br />
            <br />
            <Text color='primaryLight'>Color: Medium</Text>
            <Divider />
            <Fab iconName='Setting2' color='light' />
            <br />
            <br />
            <Text color='primaryLight'>Color: Light</Text>
            <Divider />
            <Fab iconName='Setting2' color='success' />
            <br />
            <br />
            <Text color='primaryLight'>Color: Success</Text>
            <Divider />
            <Fab iconName='Setting2' color='error' />
            <br />
            <br />
            <Text color='primaryLight'>Color: Error</Text>
            <Divider />
            <Fab iconName='Setting2' color='info' />
            <br />
            <br />
            <Text color='primaryLight'>Color: Info</Text>
            <Divider />
            <Fab iconName='Setting2' color='warning' />
            <br />
            <br />
            <Text color='primaryLight'>Color: Warning</Text>
          </Card>
        </div>
      </div>
    </ContentLayout>
  )
}

export default FabPage
