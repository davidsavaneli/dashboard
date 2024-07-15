import { ContentLayout, Card, Switch, Checkbox } from '../../components'

const SwitchPage = () => {
  return (
    <ContentLayout label='Switch Component'>
      <div className='row'>
        <div className='col-6'>
          <Card title='Default'>
            <Switch label='Switch' />
          </Card>
          <br />
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
          </Card>
        </div>
        <div className='col-6'>
          <Card title='Sizes'>
            <Switch size='sm' />
            <Switch size='md' />
            <Switch size='lg' />
            <br />
            <br />
            <Switch label='Switch' size='sm' />
            <Switch label='Switch' size='md' />
            <Switch label='Switch' size='lg' />
          </Card>
          <br />
          <Card title='Disabled'>
            <Switch label='Switch' disabled defaultChecked color='primary' />
            <br />
            <Switch label='Switch' disabled defaultChecked color='primaryLight' />
            <br />
            <Switch label='Switch' disabled defaultChecked color='secondary' />
            <br />
            <Switch label='Switch' disabled defaultChecked color='dark' />
            <br />
            <Switch label='Switch' disabled defaultChecked color='medium' />
            <br />
            <Switch label='Switch' disabled defaultChecked color='light' />
            <br />
            <Switch label='Switch' disabled defaultChecked color='success' />
            <br />
            <Switch label='Switch' disabled defaultChecked color='error' />
            <br />
            <Switch label='Switch' disabled defaultChecked color='info' />
            <br />
            <Switch label='Switch' disabled defaultChecked color='warning' />
          </Card>
        </div>
      </div>
    </ContentLayout>
  )
}

export default SwitchPage
