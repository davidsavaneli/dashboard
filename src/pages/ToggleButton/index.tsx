import { ContentLayout, Card, ToggleButton, ToggleButtonGroup, Text, Divider } from '../../components'

const ToggleButtonPage = () => {
  return (
    <ContentLayout label='ToggleButton Page'>
      <div className='row'>
        <div className='col-6'>
          <Card title='Default'>
            <ToggleButtonGroup value='1'>
              <ToggleButton value='1' iconName='Setting2' />
              <ToggleButton value='2' iconName='Setting2' />
              <ToggleButton value='3' iconName='Setting2' />
            </ToggleButtonGroup>
            <br />
            <br />
            <Text color='primaryLight'>Size: md / Color: Primary</Text>
          </Card>
          <br />
          <Card title='Single'>
            <ToggleButtonGroup value='1'>
              <ToggleButton value='1' iconName='Add' />
            </ToggleButtonGroup>
          </Card>
          <br />
          <Card title='Tooltip'>
            <ToggleButtonGroup value='1'>
              <ToggleButton value='1' iconName='Setting2' tooltipTitle='Tooltip Title 1' />
              <ToggleButton value='2' iconName='Setting2' tooltipTitle='Tooltip Title 2' />
              <ToggleButton value='3' iconName='Setting2' tooltipTitle='Tooltip Title 3' />
            </ToggleButtonGroup>
            <br />
            <br />
            <Text color='primaryLight'>tooltipTitle: string</Text>
          </Card>
          <br />
          <Card title='Sizes'>
            <ToggleButtonGroup value='1'>
              <ToggleButton value='1' iconName='Setting2' size='sm' />
              <ToggleButton value='2' iconName='Setting2' size='sm' />
              <ToggleButton value='3' iconName='Setting2' size='sm' />
            </ToggleButtonGroup>
            <br />
            <br />
            <Text color='primaryLight'>Size: sm</Text>
            <Divider />
            <ToggleButtonGroup value='1'>
              <ToggleButton value='1' iconName='Setting2' size='md' />
              <ToggleButton value='2' iconName='Setting2' size='md' />
              <ToggleButton value='3' iconName='Setting2' size='md' />
            </ToggleButtonGroup>
            <br />
            <br />
            <Text color='primaryLight'>Size: md</Text>
            <Divider />
            <ToggleButtonGroup value='1'>
              <ToggleButton value='1' iconName='Setting2' size='lg' />
              <ToggleButton value='2' iconName='Setting2' size='lg' />
              <ToggleButton value='3' iconName='Setting2' size='lg' />
            </ToggleButtonGroup>
            <br />
            <br />
            <Text color='primaryLight'>Size: lg</Text>
          </Card>
          <br />
          <Card title='Children'>
            <ToggleButtonGroup value='1'>
              <ToggleButton value='1'>
                <Text>Left</Text>
              </ToggleButton>
              <ToggleButton value='2'>
                <Text>Center</Text>
              </ToggleButton>
              <ToggleButton value='3'>
                <Text>Right</Text>
              </ToggleButton>
            </ToggleButtonGroup>
            <br />
            <br />

            <ToggleButtonGroup value='1'>
              <ToggleButton value='1' color='secondary'>
                <Text>Left</Text>
              </ToggleButton>
              <ToggleButton value='2' color='secondary'>
                <Text>Center</Text>
              </ToggleButton>
              <ToggleButton value='3' color='secondary'>
                <Text>Right</Text>
              </ToggleButton>
            </ToggleButtonGroup>
          </Card>
          <br />
          <Card title='Disabled'>
            <ToggleButtonGroup value='1'>
              <ToggleButton value='1' iconName='Setting2' disabled />
              <ToggleButton value='2' iconName='Setting2' disabled />
              <ToggleButton value='3' iconName='Setting2' disabled />
            </ToggleButtonGroup>
          </Card>
        </div>
        <div className='col-6'>
          <Card title='Colors'>
            <ToggleButtonGroup value='1'>
              <ToggleButton value='1' color='primary' iconName='Home' />
              <ToggleButton value='2' color='primary' iconName='Home' />
              <ToggleButton value='3' color='primary' iconName='Home' />
            </ToggleButtonGroup>
            <br />
            <br />
            <Text color='primaryLight'>Color: Primary</Text>
            <Divider />
            <ToggleButtonGroup value='1'>
              <ToggleButton value='1' color='primaryLight' iconName='Home' />
              <ToggleButton value='2' color='primaryLight' iconName='Home' />
              <ToggleButton value='3' color='primaryLight' iconName='Home' />
            </ToggleButtonGroup>
            <br />
            <br />
            <Text color='primaryLight'>Color: PrimaryLight</Text>
            <Divider />
            <ToggleButtonGroup value='1'>
              <ToggleButton value='1' color='secondary' iconName='Home' />
              <ToggleButton value='2' color='secondary' iconName='Home' />
              <ToggleButton value='3' color='secondary' iconName='Home' />
            </ToggleButtonGroup>
            <br />
            <br />
            <Text color='primaryLight'>Color: Secondary</Text>
            <Divider />
            <ToggleButtonGroup value='1'>
              <ToggleButton value='1' color='dark' iconName='Home' />
              <ToggleButton value='2' color='dark' iconName='Home' />
              <ToggleButton value='3' color='dark' iconName='Home' />
            </ToggleButtonGroup>
            <br />
            <br />
            <Text color='primaryLight'>Color: Dark</Text>
            <Divider />
            <ToggleButtonGroup value='1'>
              <ToggleButton value='1' color='medium' iconName='Home' />
              <ToggleButton value='2' color='medium' iconName='Home' />
              <ToggleButton value='3' color='medium' iconName='Home' />
            </ToggleButtonGroup>
            <br />
            <br />
            <Text color='primaryLight'>Color: Medium</Text>
            <Divider />
            <ToggleButtonGroup value='1'>
              <ToggleButton value='1' color='light' iconName='Home' />
              <ToggleButton value='2' color='light' iconName='Home' />
              <ToggleButton value='3' color='light' iconName='Home' />
            </ToggleButtonGroup>
            <br />
            <br />
            <Text color='primaryLight'>Color: Light</Text>
            <Divider />
            <ToggleButtonGroup value='1'>
              <ToggleButton value='1' color='success' iconName='Home' />
              <ToggleButton value='2' color='success' iconName='Home' />
              <ToggleButton value='3' color='success' iconName='Home' />
            </ToggleButtonGroup>
            <br />
            <br />
            <Text color='primaryLight'>Color: Success</Text>
            <Divider />
            <ToggleButtonGroup value='1'>
              <ToggleButton value='1' color='error' iconName='Home' />
              <ToggleButton value='2' color='error' iconName='Home' />
              <ToggleButton value='3' color='error' iconName='Home' />
            </ToggleButtonGroup>
            <br />
            <br />
            <Text color='primaryLight'>Color: Error</Text>
            <Divider />
            <ToggleButtonGroup value='1'>
              <ToggleButton value='1' color='info' iconName='Home' />
              <ToggleButton value='2' color='info' iconName='Home' />
              <ToggleButton value='3' color='info' iconName='Home' />
            </ToggleButtonGroup>
            <br />
            <br />
            <Text color='primaryLight'>Color: Info</Text>
            <Divider />
            <ToggleButtonGroup value='1'>
              <ToggleButton value='1' color='warning' iconName='Home' />
              <ToggleButton value='2' color='warning' iconName='Home' />
              <ToggleButton value='3' color='warning' iconName='Home' />
            </ToggleButtonGroup>
            <br />
            <br />
            <Text color='primaryLight'>Color: Warning</Text>
          </Card>
          <br />
          <Card title='Orientation'>
            <ToggleButtonGroup value='1' orientation='vertical'>
              <ToggleButton value='1' iconName='Home' />
              <ToggleButton value='2' iconName='Home' />
              <ToggleButton value='3' iconName='Home' />
            </ToggleButtonGroup>
            <br />
            <br />
            <Text color='primaryLight'>Orientation: Vertical</Text>
          </Card>
        </div>
      </div>
    </ContentLayout>
  )
}

export default ToggleButtonPage
