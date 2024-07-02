import { ContentLayout, Card, SpeedDial, SpeedDialAction, Icon } from '../../components'

const SpeedDialPage = () => {
  return (
    <ContentLayout label='SpeedDial Page'>
      <Card title='SpeedDial With Tooltip'>
        <SpeedDial ariaLabel='SpeedDial basic example' icon={<Icon name='More' />}>
          <SpeedDialAction icon={<Icon name='Trash' />} tooltipTitle='Trash' />
          <SpeedDialAction icon={<Icon name='HambergerMenu' />} tooltipTitle='HambergerMenu' />
        </SpeedDial>
      </Card>
    </ContentLayout>
  )
}

export default SpeedDialPage
