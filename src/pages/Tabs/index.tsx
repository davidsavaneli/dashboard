import { ContentLayout, Card, Tabs } from '../../components'

const tabs = [
  { id: 0, label: 'Tab One', name: 'tabName1', content: <>Content of Tab One</>, defaultOpen: false },
  { id: 1, label: 'Tab Two', name: 'tabName2', content: <>Content of Tab Two</>, defaultOpen: true },
  { id: 2, label: 'Tab Three', name: 'tabName3', content: <>Content of Tab Three</>, defaultOpen: false },
]

const TabsPage = () => {
  return (
    <ContentLayout label='Tabs Page'>
      <Card title='Tabs'>
        <Tabs tabs={tabs} onChange={(e, newValue: number) => console.log(newValue)} />
      </Card>
    </ContentLayout>
  )
}

export default TabsPage
