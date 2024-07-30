import { ContentLayout, Card, Button, Tabs } from '../../components'

const TabsPage = () => {
  const tabs = [
    { label: 'Georgian', value: 'georgian', content: 'Georgian Content ...' },
    { label: 'English', value: 'english', content: 'English Content ...', active: true },
    { label: 'German', value: 'german', content: 'German Content ...', disabled: true },
  ]

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
        <Tabs tabs={tabs} />
      </Card>
    </ContentLayout>
  )
}

export default TabsPage
