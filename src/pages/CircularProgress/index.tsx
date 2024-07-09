import { ContentLayout, Card, CircularProgress, Text, Divider } from '../../components'

const CircularProgressPage = () => {
  return (
    <ContentLayout label='Circular Progress Component'>
      <div className='row'>
        <div className='col-6'>
          <Card title='Default'>
            <CircularProgress />
            <br />
            <br />
            <Text color='primaryLight'>Size: md / Color: Primary</Text>
          </Card>
          <br />
          <Card title='Sizes'>
            <CircularProgress size='xs' />
            <br />
            <br />
            <Text color='primaryLight'>Size: xs</Text>
            <Divider />
            <CircularProgress size='sm' />
            <br />
            <br />
            <Text color='primaryLight'>Size: sm</Text>
            <Divider />
            <CircularProgress size='md' />
            <br />
            <br />
            <Text color='primaryLight'>Size: md</Text>
            <Divider />
            <CircularProgress size='lg' />
            <br />
            <br />
            <Text color='primaryLight'>Size: lg</Text>
            <Divider />
            <CircularProgress size='xl' />
            <br />
            <br />
            <Text color='primaryLight'>Size: xl</Text>
            <Divider />
            <CircularProgress size='xxl' />
            <br />
            <br />
            <Text color='primaryLight'>Size: xxl</Text>
            <Divider />
            <CircularProgress size={40} />
            <br />
            <br />
            <Text color='primaryLight'>Size: 40 (number)</Text>
          </Card>
        </div>
        <div className='col-6'>
          <Card title='Colors'>
            <CircularProgress color='primary' />
            <br />
            <br />
            <Text color='primaryLight'>Color: Primary</Text>
            <Divider />
            <CircularProgress color='primaryLight' />
            <br />
            <br />
            <Text color='primaryLight'>Color: PrimaryLight</Text>
            <Divider />
            <CircularProgress color='secondary' />
            <br />
            <br />
            <Text color='primaryLight'>Color: Secondary</Text>
            <Divider />
            <CircularProgress color='dark' />
            <br />
            <br />
            <Text color='primaryLight'>Color: Dark</Text>
            <Divider />
            <CircularProgress color='medium' />
            <br />
            <br />
            <Text color='primaryLight'>Color: Medium</Text>
            <Divider />
            <CircularProgress color='light' />
            <br />
            <br />
            <Text color='primaryLight'>Color: Light</Text>
            <Divider />
            <CircularProgress color='success' />
            <br />
            <br />
            <Text color='primaryLight'>Color: Success</Text>
            <Divider />
            <CircularProgress color='error' />
            <br />
            <br />
            <Text color='primaryLight'>Color: Error</Text>
            <Divider />
            <CircularProgress color='info' />
            <br />
            <br />
            <Text color='primaryLight'>Color: Info</Text>
            <Divider />
            <CircularProgress color='warning' />
            <br />
            <br />
            <Text color='primaryLight'>Color: Warning</Text>
          </Card>
        </div>
      </div>
    </ContentLayout>
  )
}

export default CircularProgressPage
