import { ContentLayout, Card, ToggleButton, ToggleButtonGroup, Text, Space } from '../../components'

const ToggleButtonPage = () => {
  return (
    <ContentLayout label='Toggle Button Component'>
      <div className='row'>
        <div className='col-6'>
          <Card title='Default'>
            <ToggleButtonGroup value='1'>
              <ToggleButton value='1' iconName='TextalignLeft' />
              <ToggleButton value='2' iconName='TextalignCenter' />
              <ToggleButton value='3' iconName='TextalignRight' />
            </ToggleButtonGroup>
            <br />
            <br />
            <Text>Size: md / Color: primary</Text>
          </Card>
        </div>
        <div className='col-6'>
          <Card title='Sizes'>
            <ToggleButtonGroup value='1'>
              <ToggleButton value='1' iconName='Setting2' size='lg' color='success' />
              <ToggleButton value='2' iconName='Setting2' size='lg' color='success' />
            </ToggleButtonGroup>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <ToggleButtonGroup value='1'>
              <ToggleButton value='1' iconName='Setting2' size='md' color='success' />
              <ToggleButton value='2' iconName='Setting2' size='md' color='success' />
            </ToggleButtonGroup>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <ToggleButtonGroup value='1'>
              <ToggleButton value='1' iconName='Setting2' size='sm' color='success' />
              <ToggleButton value='2' iconName='Setting2' size='sm' color='success' />
            </ToggleButtonGroup>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <br />
            <br />
            <Text>Size: lg / md / sm</Text>
          </Card>
        </div>
      </div>
      <Space />
      <Card title='Colors'>
        <ToggleButtonGroup value='1'>
          <ToggleButton value='1' color='primary' iconName='Setting2' />
          <ToggleButton value='2' color='primary' iconName='Setting2' />
        </ToggleButtonGroup>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <ToggleButtonGroup value='1'>
          <ToggleButton value='1' color='primaryLight' iconName='Setting2' />
          <ToggleButton value='2' color='primaryLight' iconName='Setting2' />
        </ToggleButtonGroup>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <ToggleButtonGroup value='1'>
          <ToggleButton value='1' color='secondary' iconName='Setting2' />
          <ToggleButton value='2' color='secondary' iconName='Setting2' />
        </ToggleButtonGroup>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <ToggleButtonGroup value='1'>
          <ToggleButton value='1' color='dark' iconName='Setting2' />
          <ToggleButton value='2' color='dark' iconName='Setting2' />
        </ToggleButtonGroup>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <ToggleButtonGroup value='1'>
          <ToggleButton value='1' color='medium' iconName='Setting2' />
          <ToggleButton value='2' color='medium' iconName='Setting2' />
        </ToggleButtonGroup>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <ToggleButtonGroup value='1'>
          <ToggleButton value='1' color='light' iconName='Setting2' />
          <ToggleButton value='2' color='light' iconName='Setting2' />
        </ToggleButtonGroup>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <ToggleButtonGroup value='1'>
          <ToggleButton value='1' color='success' iconName='Setting2' />
          <ToggleButton value='2' color='success' iconName='Setting2' />
        </ToggleButtonGroup>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <ToggleButtonGroup value='1'>
          <ToggleButton value='1' color='error' iconName='Setting2' />
          <ToggleButton value='2' color='error' iconName='Setting2' />
        </ToggleButtonGroup>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <ToggleButtonGroup value='1'>
          <ToggleButton value='1' color='info' iconName='Setting2' />
          <ToggleButton value='2' color='info' iconName='Setting2' />
        </ToggleButtonGroup>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <ToggleButtonGroup value='1'>
          <ToggleButton value='1' color='warning' iconName='Setting2' />
          <ToggleButton value='2' color='warning' iconName='Setting2' />
        </ToggleButtonGroup>
        <br />
        <br />
        <Text>
          Colors: primary / primaryLight / secondary / dark / medium / light / success / error / info / warning
        </Text>
      </Card>
      <Space />
      <div className='row'>
        <div className='col-6'>
          <Card title='Single'>
            <ToggleButtonGroup value='1'>
              <ToggleButton value='1' iconName='Add' color='medium' />
            </ToggleButtonGroup>
          </Card>
        </div>
        <div className='col-6'>
          <Card title='Disabled'>
            <ToggleButtonGroup value='1'>
              <ToggleButton value='1' iconName='Setting2' disabled />
              <ToggleButton value='2' iconName='Setting2' disabled />
              <ToggleButton value='3' iconName='Setting2' disabled />
            </ToggleButtonGroup>
            <br />
            <br />
            <Text>disabled: true</Text>
          </Card>
        </div>
      </div>
      <Space />
      <div className='row'>
        <div className='col-6'>
          <Card title='Children'>
            <ToggleButtonGroup value='1'>
              <ToggleButton value='1' color='medium'>
                <Text>Left</Text>
              </ToggleButton>
              <ToggleButton value='2' color='medium'>
                <Text>Center</Text>
              </ToggleButton>
              <ToggleButton value='3' color='medium'>
                <Text>Right</Text>
              </ToggleButton>
            </ToggleButtonGroup>
          </Card>
        </div>
        <div className='col-6'>
          <Card title='Tooltip'>
            <ToggleButtonGroup value='1'>
              <ToggleButton value='1' iconName='Setting2' tooltipTitle='Tooltip Title 1' />
              <ToggleButton value='2' iconName='Setting2' tooltipTitle='Tooltip Title 2' />
              <ToggleButton value='3' iconName='Setting2' tooltipTitle='Tooltip Title 3' />
            </ToggleButtonGroup>
            <br />
            <br />
            <Text>tooltipTitle: ReactNode</Text>
          </Card>
        </div>
      </div>
      <Space />
      <div className='row'>
        <div className='col-6'>
          <Card title='Orientation'>
            <ToggleButtonGroup value='1' orientation='vertical'>
              <ToggleButton value='1' iconName='Home' />
              <ToggleButton value='2' iconName='Home' />
              <ToggleButton value='3' iconName='Home' />
            </ToggleButtonGroup>
            <br />
            <br />
            <Text>Orientation: vertical</Text>
          </Card>
        </div>
      </div>
    </ContentLayout>
  )
}

export default ToggleButtonPage
