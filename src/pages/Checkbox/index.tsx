import { ContentLayout, Card, Checkbox, FormLabel, FormGroup } from '../../components'

const CheckboxPage = () => {
  return (
    <ContentLayout label='Checkbox Component'>
      <div className='row'>
        <div className='col-12'>
          <Card title='Checkbox'>
            <Checkbox label='Checkbox' />
            <hr />
            <FormLabel>Checkbox Group</FormLabel>
            <FormGroup>
              <Checkbox label='Checkbox' />
              <Checkbox label='Checkbox' />
            </FormGroup>
            <hr />
            <FormLabel>Checkbox Group</FormLabel>
            <FormGroup row>
              <Checkbox label='Checkbox' />
              <Checkbox label='Checkbox' />
            </FormGroup>
          </Card>
        </div>
      </div>
      <div className='row'>
        <div className='col-12'>
          <Card title='Checkbox Colors'>
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
          </Card>
        </div>
      </div>
      <div className='row'>
        <div className='col-4'>
          <Card title='Checkbox Size sm'>
            <Checkbox label='Checkbox' size='sm' />
            <hr />
            <FormLabel size='sm'>Checkbox Group</FormLabel>
            <FormGroup>
              <Checkbox label='Checkbox' size='sm' />
              <Checkbox label='Checkbox' size='sm' />
            </FormGroup>
            <hr />
            <FormLabel size='sm'>Checkbox Group</FormLabel>
            <FormGroup row>
              <Checkbox label='Checkbox' size='sm' />
              <Checkbox label='Checkbox' size='sm' />
            </FormGroup>
          </Card>
        </div>
        <div className='col-4'>
          <Card title='Checkbox Size md'>
            <Checkbox label='Checkbox' size='md' />
            <hr />
            <FormLabel size='md'>Checkbox Group</FormLabel>
            <FormGroup>
              <Checkbox label='Checkbox' size='md' />
              <Checkbox label='Checkbox' size='md' />
            </FormGroup>
            <hr />
            <FormLabel size='md'>Checkbox Group</FormLabel>
            <FormGroup row>
              <Checkbox label='Checkbox' size='md' />
              <Checkbox label='Checkbox' size='md' />
            </FormGroup>
          </Card>
        </div>
        <div className='col-4'>
          <Card title='Checkbox Size lg'>
            <Checkbox label='Checkbox' size='lg' />
            <hr />
            <FormLabel size='lg'>Checkbox Group</FormLabel>
            <FormGroup>
              <Checkbox label='Checkbox' size='lg' />
              <Checkbox label='Checkbox' size='lg' />
            </FormGroup>
            <hr />
            <FormLabel size='lg'>Checkbox Group</FormLabel>
            <FormGroup row>
              <Checkbox label='Checkbox' size='lg' />
              <Checkbox label='Checkbox' size='lg' />
            </FormGroup>
          </Card>
        </div>
      </div>
    </ContentLayout>
  )
}

export default CheckboxPage
