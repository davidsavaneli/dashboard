import { ContentLayout, Card, Tooltip, ToggleButton, ToggleButtonGroup, Icon } from '../../components'

const ToggleButtonPage = () => {
  return (
    <ContentLayout label='ToggleButton Page'>
      <Card title='ToggleButton'>
        <ToggleButtonGroup value='left' orientation='vertical'>
          <ToggleButton value='left' aria-label='left aligned'>
            <Icon name='Home' />
          </ToggleButton>
          <ToggleButton value='center' aria-label='centered'>
            <Icon name='Home' />
          </ToggleButton>
          <ToggleButton value='right' aria-label='right aligned'>
            <Icon name='Home' />
          </ToggleButton>
        </ToggleButtonGroup>
        <hr />
        <ToggleButton value='check' selected>
          <Icon name='Home' />
        </ToggleButton>
      </Card>
    </ContentLayout>
  )
}

export default ToggleButtonPage
