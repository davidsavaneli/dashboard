import { ContentLayout, Card, Switch, Text, Space } from '../../components'

const SwitchPage = () => {
  return (
    <ContentLayout label='Switch Component'>
      <div className='row'>
        <div className='col-6'>
          <Card title='Default'>
            <Switch label='Switch' />
            <br />
            <br />
            <Text>Size: md / Color: medium</Text>
          </Card>
        </div>
        <div className='col-6'>
          <Card title='Disabled'>
            <Switch defaultChecked color='primary' disabled />
            <Switch defaultChecked color='medium' disabled />
            <Switch defaultChecked color='success' disabled />
            <br />
            <br />
            <Text>disabled: true</Text>
          </Card>
        </div>
      </div>
      <Space />
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
        <br />
        <br />
        <Text>
          Colors: primary / primaryLight / secondary / dark / medium / light / success / error / info / warning
        </Text>
      </Card>
      <Space />
      <div className='row'>
        <div className='col-6'>
          <Card title='Sizes'>
            <Switch label='Large' size='lg' />
            &nbsp;&nbsp;&nbsp;
            <Switch label='Medium' size='md' />
            &nbsp;&nbsp;&nbsp;
            <Switch label='Small' size='sm' />
            <br />
            <br />
            <Text>Size: lg / md / sm</Text>
          </Card>
        </div>
      </div>
    </ContentLayout>
  )
}

export default SwitchPage
