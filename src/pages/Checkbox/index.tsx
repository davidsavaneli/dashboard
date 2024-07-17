import { ContentLayout, Card, Checkbox, FormLabel, FormGroup, Divider, Text } from '../../components'

const CheckboxPage = () => {
  return (
    <ContentLayout label='Checkbox Component'>
      <div className='row'>
        <div className='col-6'>
          <Card title='Default'>
            <Checkbox label='Checkbox' />
            <Divider />
            <Text>Size: md / Color: medium</Text>
          </Card>
        </div>
        <div className='col-6'>
          <Card title='Disabled'>
            <Checkbox defaultChecked color='primary' disabled />
            <Checkbox defaultChecked color='medium' disabled />
            <Checkbox defaultChecked color='success' disabled />
            <Divider />
            <Text>disabled: true</Text>
          </Card>
        </div>
      </div>
      <Card title='Colors'>
        <Checkbox defaultChecked color='primary' />
        <Checkbox defaultChecked color='primaryLight' />
        <Checkbox defaultChecked color='secondary' />
        <Checkbox defaultChecked color='dark' />
        <Checkbox defaultChecked color='medium' />
        <Checkbox defaultChecked color='light' />
        <Checkbox defaultChecked color='success' />
        <Checkbox defaultChecked color='error' />
        <Checkbox defaultChecked color='info' />
        <Checkbox defaultChecked color='warning' />
        <Divider />
        <Text>
          Colors: primary / primaryLight / secondary / dark / medium / light / success / error / info / warning
        </Text>
      </Card>
      <div className='row'>
        <div className='col-6'>
          <Card title='Group'>
            <FormLabel>Form Label</FormLabel>
            <FormGroup>
              <Checkbox label='Checkbox 1' />
              <Checkbox label='Checkbox 2' />
            </FormGroup>
          </Card>
        </div>
        <div className='col-6'>
          <Card title='Group Row'>
            <FormLabel>Form Label</FormLabel>
            <FormGroup row>
              <Checkbox label='Checkbox 1' />
              <Checkbox label='Checkbox 2' />
            </FormGroup>
          </Card>
        </div>
      </div>
      <div className='row'>
        <div className='col-6'>
          <Card title='Sizes'>
            <Checkbox label='Large' size='lg' />
            &nbsp;&nbsp;&nbsp;
            <Checkbox label='Medium' size='md' />
            &nbsp;&nbsp;&nbsp;
            <Checkbox label='Small' size='sm' />
            <Divider />
            <Text>Size: lg / md / sm</Text>
          </Card>
        </div>
      </div>
    </ContentLayout>
  )
}

export default CheckboxPage
