import { useState } from 'react'
import { ContentLayout, Card, Button, TabContext, TabList, Tab, TabPanel } from '../../components'

const TabsPage = () => {
  const [value, setValue] = useState('1')
  const handleChange = (event: React.SyntheticEvent, newValue: string) => setValue(newValue)

  return (
    <ContentLayout label='Tabs Page'>
      <Card
        title='Tabs'
        footerActions={
          <>
            <Button variant='transparent'>Cancel</Button>
            <Button onClick={() => console.log('Submit')}>Submit</Button>
          </>
        }
      >
        <TabContext value={value}>
          <TabList onChange={handleChange}>
            <Tab label='Georgian' value='1' />
            <Tab label='English' disabled value='2' />
            <Tab label='German' value='3' />
          </TabList>
          <TabPanel value='1'>Georgian Content ...</TabPanel>
          <TabPanel value='2'>English Content ...</TabPanel>
          <TabPanel value='3'>German Content ...</TabPanel>
        </TabContext>
      </Card>
    </ContentLayout>
  )
}

export default TabsPage
