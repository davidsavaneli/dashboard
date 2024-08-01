import { ContentLayout, Card, LinearProgress, Text, Divider, Space } from '../../components'

const LinearProgressPage = () => {
  return (
    <ContentLayout label='Circular Linear Component'>
      <Card title='Default'>
        <LinearProgress />
        <br />
        <br />
        <Text>Size: md / Color: primary</Text>
      </Card>
      <Space />
      <Card title='Values'>
        <LinearProgress variant='determinate' value={20} />
        <br />
        <br />
        <Text>determinate: true / Value: 20</Text>
      </Card>
      <Space />
      <Card title='Colors'>
        <LinearProgress color='primary' />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <LinearProgress color='primaryLight' />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <LinearProgress color='secondary' />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <LinearProgress color='dark' />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <LinearProgress color='medium' />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <LinearProgress color='light' />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <LinearProgress color='success' />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <LinearProgress color='error' />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <LinearProgress color='info' />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <LinearProgress color='warning' />
        <br />
        <br />
        <Text>
          Colors: primary / primaryLight / secondary / dark / medium / light / success / error / info / warning
        </Text>
      </Card>
    </ContentLayout>
  )
}

export default LinearProgressPage
