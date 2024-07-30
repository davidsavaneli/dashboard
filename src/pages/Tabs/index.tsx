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
import { MemoryRouter, Route, Routes, Link, matchPath, useLocation } from 'react-router-dom'
import { StaticRouter } from 'react-router-dom/server'

function Router(props: { children?: React.ReactNode }) {
  const { children } = props
  if (typeof window === 'undefined') {
    return <StaticRouter location='/drafts'>{children}</StaticRouter>
  }

  return (
    <MemoryRouter initialEntries={['/drafts']} initialIndex={0}>
      {children}
    </MemoryRouter>
  )
}

function useRouteMatch(patterns: readonly string[]) {
  const { pathname } = useLocation()

  for (let i = 0; i < patterns.length; i += 1) {
    const pattern = patterns[i]
    const possibleMatch = matchPath(pattern, pathname)
    if (possibleMatch !== null) {
      return possibleMatch
    }
  }

  return null
}

function MyTabs() {
  // You need to provide the routes in descendant order.
  // This means that if you have nested routes like:
  // users, users/new, users/edit.
  // Then the order should be ['users/add', 'users/edit', 'users'].
  const routeMatch = useRouteMatch([
    '/components/navigation/tabs/inbox',
    '/components/navigation/tabs/drafts',
    '/components/navigation/tabs/trash',
  ])
  const currentTab = routeMatch?.pattern?.path

  return (
    <Tabs value={currentTab}>
      <Tab
        label='Inbox'
        value='/components/navigation/tabs/inbox'
        to='/components/navigation/tabs/inbox'
        component={Link}
      />
      <Tab
        label='Drafts'
        value='/components/navigation/tabs/drafts'
        to='/components/navigation/tabs/drafts'
        component={Link}
      />
      <Tab
        label='Trash'
        value='/components/navigation/tabs/trash'
        to='/components/navigation/tabs/trash'
        component={Link}
      />
    </Tabs>
  )
}

function CurrentRoute() {
  const location = useLocation()

  return (
    <Typography variant='body2' sx={{ pb: 2 }} color='text.secondary'>
      Current route: {location.pathname}
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
