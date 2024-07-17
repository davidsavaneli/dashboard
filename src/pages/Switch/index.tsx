import { ContentLayout, Card, Switch, Radio, Divider, Text, FormLabel, RadioGroup } from '../../components'

const SwitchPage = () => {
  return (
    <ContentLayout label='Switch Component'>
      <Card title='Default'>
        <Switch label='Switch' />
        <Divider />
        <Text>Size: md / Color: medium</Text>
      </Card>
      <Card title='Colors'>
        <Switch defaultChecked color='primary' />
        <Switch defaultChecked color='primaryLight' />
        <Switch defaultChecked color='secondary' />
        <Switch defaultChecked color='dark' />
        <Switch defaultChecked color='medium' />
        <Switch defaultChecked color='light' />
        <Switch defaultChecked color='success' />
        <Switch defaultChecked color='error' />
        <Switch defaultChecked color='info' />
        <Switch defaultChecked color='warning' />
        <Divider />
        <Text>
          Colors: primary / primaryLight / secondary / dark / medium / light / success / error / info / warning
        </Text>
      </Card>
      <Card title='Sizes'>
        <Switch label='Large' size='lg' />
        &nbsp;&nbsp;&nbsp;
        <Switch label='Medium' size='md' />
        &nbsp;&nbsp;&nbsp;
        <Switch label='Small' size='sm' />
        <Divider />
        <Text>Size: lg / md / sm</Text>
      </Card>
      <Card title='Disabled'>
        <Switch defaultChecked color='primary' disabled />
        <Switch defaultChecked color='medium' disabled />
        <Switch defaultChecked color='success' disabled />
        <Divider />
        <Text>disabled: true</Text>
      </Card>
    </ContentLayout>
  )
}

export default SwitchPage
