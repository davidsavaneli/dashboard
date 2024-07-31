import { ContentLayout, Card, Button, Tabs, IconName } from '../../components'

const TabsPage = () => {
  return (
    <ContentLayout label='Tabs Component'>
      <Card
        title='Tabs'
        footerActions={
          <>
            <Button variant='transparent'>Cancel</Button>
            <Button onClick={() => console.log('Submit')}>Submit</Button>
          </>
        }
      >
        <Tabs tabs={tabs} queryName='tab' />
      </Card>
      <Card
        title='Tabs2'
        footerActions={
          <>
            <Button variant='transparent'>Cancel</Button>
            <Button onClick={() => console.log('Submit')}>Submit</Button>
          </>
        }
      >
        <Tabs tabs={tabs2} queryName='tab2' />
      </Card>
    </ContentLayout>
  )
}

export default TabsPage

const ProfileC = () => <>Profile ...</>
const SettingsC = () => <>Settings ...</>
const ClockC = () => <>Clock ...</>
const RolesC = () => (
  <Card title='Change Roles'>
    <Tabs tabs={tabs2} queryName='roles' />
  </Card>
)
const GeorgianC = () => <>Georgian ...</>
const EnglishC = () => <>English ...</>
const GermanC = () => <>German ...</>
const FranceC = () => <>France ...</>

const tabs = [
  { label: 'Profile', value: 'profile', content: <ProfileC />, icon: 'Profile' as IconName },
  { label: 'Settings', value: 'settings', content: <SettingsC />, icon: 'Setting2' as IconName, active: true },
  { label: 'Clock', value: 'clock', content: <ClockC />, icon: 'Clock' as IconName },
  { label: 'Roles', value: 'roles', content: <RolesC />, icon: 'Box1' as IconName },
]

const tabs2 = [
  { label: 'Georgian', value: 'georgian', content: <GeorgianC />, active: true },
  { label: 'English', value: 'english', content: <EnglishC /> },
  { label: 'German', value: 'german', content: <GermanC /> },
  { label: 'France', value: 'france', content: <FranceC /> },
]
