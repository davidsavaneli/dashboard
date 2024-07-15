import { ContentLayout, Card, Radio, FormLabel, RadioGroup } from '../../components'

const RadioPage = () => {
  return (
    <ContentLayout label='Radio Component'>
      <div className='row'>
        <div className='col-12'>
          <Card title='Radio'>
            <Radio label='Radio' />
            <hr />
            <FormLabel>Radio Group</FormLabel>
            <RadioGroup>
              <Radio label='Radio' value='1' />
              <Radio label='Radio' value='2' />
            </RadioGroup>
            <hr />
            <FormLabel>Radio Group</FormLabel>
            <RadioGroup row>
              <Radio label='Radio' value='1' />
              <Radio label='Radio' value='2' />
            </RadioGroup>
          </Card>
        </div>
      </div>
      <div className='row'>
        <div className='col-12'>
          <Card title='Radio Colors'>
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
          </Card>
        </div>
      </div>
      <div className='row'>
        <div className='col-4'>
          <Card title='Radio Size sm'>
            <Radio label='Radio' size='sm' />
            <hr />
            <FormLabel size='sm'>Radio Group</FormLabel>
            <RadioGroup>
              <Radio label='Radio' size='sm' value='1' />
              <Radio label='Radio' size='sm' value='2' />
            </RadioGroup>
            <hr />
            <FormLabel size='sm'>Radio Group</FormLabel>
            <RadioGroup row>
              <Radio label='Radio' size='sm' value='1' />
              <Radio label='Radio' size='sm' value='2' />
            </RadioGroup>
          </Card>
        </div>
        <div className='col-4'>
          <Card title='Radio Size md'>
            <Radio label='Radio' size='md' />
            <hr />
            <FormLabel size='md'>Radio Group</FormLabel>
            <RadioGroup>
              <Radio label='Radio' size='md' value='1' />
              <Radio label='Radio' size='md' value='2' />
            </RadioGroup>
            <hr />
            <FormLabel size='md'>Radio Group</FormLabel>
            <RadioGroup row>
              <Radio label='Radio' size='md' value='1' />
              <Radio label='Radio' size='md' value='2' />
            </RadioGroup>
          </Card>
        </div>
        <div className='col-4'>
          <Card title='Radio Size lg'>
            <Radio label='Radio' size='lg' />
            <hr />
            <FormLabel size='lg'>Radio Group</FormLabel>
            <RadioGroup>
              <Radio label='Radio' size='lg' value='1' />
              <Radio label='Radio' size='lg' value='2' />
            </RadioGroup>
            <hr />
            <FormLabel size='lg'>Radio Group</FormLabel>
            <RadioGroup row>
              <Radio label='Radio' size='lg' value='1' />
              <Radio label='Radio' size='lg' value='2' />
            </RadioGroup>
          </Card>
        </div>
      </div>
    </ContentLayout>
  )
}

export default RadioPage
