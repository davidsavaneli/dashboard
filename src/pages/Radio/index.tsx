import { ContentLayout, Card, Radio, FormLabel, RadioGroup, Divider, Text } from '../../components'

const RadioPage = () => {
  return (
    <ContentLayout label='Radio Component'>
      <Card title='Default'>
        <Radio label='Radio' />
        <Divider />
        <Text>Size: md / Color: medium</Text>
      </Card>
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
        <Divider />
        <Text>
          Colors: primary / primaryLight / secondary / dark / medium / light / success / error / info / warning
        </Text>
      </Card>
      <Card title='Group'>
        <FormLabel>Form Label</FormLabel>
        <RadioGroup>
          <Radio label='Radio 1' />
          <Radio label='Radio 2' />
        </RadioGroup>
      </Card>
      <Card title='Group Row'>
        <FormLabel>Form Label</FormLabel>
        <RadioGroup row>
          <Radio label='Radio 1' />
          <Radio label='Radio 2' />
        </RadioGroup>
      </Card>
      <Card title='Sizes'>
        <Radio label='Large' size='lg' />
        &nbsp;&nbsp;&nbsp;
        <Radio label='Medium' size='md' />
        &nbsp;&nbsp;&nbsp;
        <Radio label='Small' size='sm' />
        <Divider />
        <Text>Size: lg / md / sm</Text>
      </Card>
      <Card title='Disabled'>
        <Radio defaultChecked color='primary' disabled />
        <Radio defaultChecked color='medium' disabled />
        <Radio defaultChecked color='success' disabled />
        <Divider />
        <Text>disabled: true</Text>
      </Card>
    </ContentLayout>
  )
}

export default RadioPage
