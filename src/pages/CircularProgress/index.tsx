import { ContentLayout, Card, CircularProgress, Text, Divider } from '../../components'

const CircularProgressPage = () => {
  return (
    <ContentLayout label='Circular Progress Component'>
      <Card title='Default'>
        <CircularProgress />
        <br />
        <br />
        <Text>Size: md / Color: primary</Text>
      </Card>
      <Card title='Sizes'>
        <CircularProgress size={40} />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <CircularProgress size='xxl' />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <CircularProgress size='xl' />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <CircularProgress size='lg' />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <CircularProgress size='md' />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <CircularProgress size='sm' />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <CircularProgress size='xs' />
        <br />
        <br />
        <Text>Size: number / xxl / xl / lg / md / sm / xs</Text>
      </Card>
      <Card title='Colors'>
        <CircularProgress color='primary' />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <CircularProgress color='primaryLight' />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <CircularProgress color='secondary' />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <CircularProgress color='dark' />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <CircularProgress color='medium' />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <CircularProgress color='light' />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <CircularProgress color='success' />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <CircularProgress color='error' />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <CircularProgress color='info' />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <CircularProgress color='warning' />
        <br />
        <br />
        <Text>
          Colors: primary / primaryLight / secondary / dark / medium / light / success / error / info / warning
        </Text>
      </Card>
    </ContentLayout>
  )
}

export default CircularProgressPage
