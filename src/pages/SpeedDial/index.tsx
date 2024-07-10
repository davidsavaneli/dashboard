import { ContentLayout, Card, SpeedDial, SpeedDialAction, Icon, Fab } from '../../components'

const SpeedDialPage = () => {
  return (
    <ContentLayout label='SpeedDial Component'>
      <Card title='SpeedDial With Tooltip'>
        <SpeedDial ariaLabel='SpeedDial basic example'>
          <SpeedDialAction FabProps={{ iconName: 'Trash' }} tooltipTitle='Trash' />
          <SpeedDialAction FabProps={{ iconName: 'Filter' }} tooltipTitle='Filter' />
        </SpeedDial>
      </Card>
    </ContentLayout>
  )
}

export default SpeedDialPage
