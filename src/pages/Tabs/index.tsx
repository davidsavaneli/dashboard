// import { useState } from 'react'
// import { ContentLayout, Card, Button, TabContext, TabList, Tab, TabPanel } from '../../components'

// const TabsPage = () => {
//   const [value, setValue] = useState('1')
//   const handleChange = (event: React.SyntheticEvent, newValue: string) => setValue(newValue)

//   return (
//     <ContentLayout label='Tabs Page'>
//       <Card
//         title='Tabs'
//         footerActions={
//           <>
//             <Button variant='transparent'>Cancel</Button>
//             <Button onClick={() => console.log('Submit')}>Submit</Button>
//           </>
//         }
//       >
//         <TabContext value={value}>
//           <TabList onChange={handleChange}>
//             <Tab label='Georgian' value='1' />
//             <Tab label='English' disabled value='2' />
//             <Tab label='German' value='3' />
//           </TabList>
//           <TabPanel value='1'>Georgian Content ...</TabPanel>
//           <TabPanel value='2'>English Content ...</TabPanel>
//           <TabPanel value='3'>German Content ...</TabPanel>
//         </TabContext>
//       </Card>
//     </ContentLayout>
//   )
// }

// export default TabsPage

import * as React from 'react'
import Box from '@mui/material/Box'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Typography from '@mui/material/Typography'
import { MemoryRouter, Route, Routes, Link, useLocation, useParams, useSearchParams } from 'react-router-dom'
import { StaticRouter } from 'react-router-dom/server'

function useQuery() {
  return new URLSearchParams(useLocation().search)
}

function MyTabs() {
  const query = useQuery()
  const tab = query.get('tab') || 'inbox'

  return (
    <Tabs value={tab}>
      <Tab label='Inbox' value='inbox' component={Link} to='?tab=inbox' />
      <Tab label='Drafts' value='drafts' component={Link} to='?tab=drafts' />
      <Tab label='Trash' value='trash' component={Link} to='?tab=trash' />
    </Tabs>
  )
}

function CurrentRoute() {
  const query = useQuery()
  const tab = query.get('tab') || 'inbox'

  return (
    <Typography variant='body2' sx={{ pb: 2 }} color='text.secondary'>
      Current tab: {tab}
    </Typography>
  )
}

export default function TabsRouter() {
  return (
    <Box sx={{ width: '100%' }}>
      <Routes>
        <Route path='*' element={<CurrentRoute />} />
      </Routes>
      <MyTabs />
    </Box>
  )
}
