import { ContentLayout, Card, Radio, FormLabel, RadioGroup, Text, Space } from '../../components'

const RadioPage = () => {
  return (
    <ContentLayout label='Radio Component'>
      <div className='row'>
        <div className='col-6'>
          <Card title='Default'>
            <Radio label='Radio' />
            <br />
            <br />
            <Text>Size: md / Color: medium</Text>
          </Card>
        </div>
        <div className='col-6'>
          <Card title='Disabled'>
            <Radio defaultChecked color='primary' disabled />
            <Radio defaultChecked color='medium' disabled />
            <Radio defaultChecked color='success' disabled />
            <br />
            <br />
            <Text>disabled: true</Text>
          </Card>
        </div>
      </div>
      <Space />
      <Card title='Colors'>
        <Radio defaultChecked color='primary' />
        <Radio defaultChecked color='primaryLight' />
        <Radio defaultChecked color='secondary' />
        <Radio defaultChecked color='dark' />
        <Radio defaultChecked color='medium' />
        <Radio defaultChecked color='light' />
        <Radio defaultChecked color='success' />
        <Radio defaultChecked color='error' />
        <Radio defaultChecked color='info' />
        <Radio defaultChecked color='warning' />
        <br />
        <br />
        <Text>
          Colors: primary / primaryLight / secondary / dark / medium / light / success / error / info / warning
        </Text>
      </Card>
      <Space />
      <div className='row'>
        <div className='col-6'>
          <Card title='Group'>
            <FormLabel>Form Label</FormLabel>
            <RadioGroup>
              <Radio label='Radio 1' value={1} />
              <Radio label='Radio 2' value={2} />
            </RadioGroup>
          </Card>
        </div>
        <div className='col-6'>
          <Card title='Group Row'>
            <FormLabel>Form Label</FormLabel>
            <RadioGroup row>
              <Radio label='Radio 1' value={1} />
              <Radio label='Radio 2' value={2} />
            </RadioGroup>
          </Card>
        </div>
      </div>
      <Space />
      <div className='row'>
        <div className='col-6'>
          <Card title='Sizes'>
            <Radio label='Large' size='lg' />
            &nbsp;&nbsp;&nbsp;
            <Radio label='Medium' size='md' />
            &nbsp;&nbsp;&nbsp;
            <Radio label='Small' size='sm' />
            <br />
            <br />
            <Text>Size: lg / md / sm</Text>
          </Card>
        </div>
      </div>
    </ContentLayout>
  )
}

export default RadioPage
