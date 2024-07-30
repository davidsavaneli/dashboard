import { ReactNode } from 'react'
import { useState, useEffect } from 'react'
import { Link, useSearchParams, useNavigate } from 'react-router-dom'
import { TabContext, TabList, TabPanel, Tab } from '../../components'

interface Tab {
  label: string
  value: string
  content: ReactNode
  active?: boolean
  disabled?: boolean
}

interface TabsProps {
  tabs: Tab[]
  queryName?: string
  onTabChange?: (newValue: string) => void
}

const Tabs = ({ tabs, queryName = 'tab', onTabChange }: TabsProps) => {
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  const initialTab = searchParams.get(queryName) || tabs.find((tab) => tab.active)?.value || tabs[0].value
  const [currentTab, setCurrentTab] = useState(initialTab)

  useEffect(() => {
    if (!searchParams.get(queryName)) {
      navigate(`?${queryName}=${initialTab}`, { replace: true })
    }
  }, [searchParams, navigate, queryName, initialTab])

  const handleTabChange = (_: React.SyntheticEvent, newValue: string) => {
    const selectedTab = tabs.find((tab) => tab.value === newValue)
    if (selectedTab && !selectedTab.disabled) {
      setCurrentTab(newValue)
      navigate(`?${queryName}=${newValue}`)
      if (onTabChange) {
        onTabChange(newValue)
      }
    }
  }

  return (
    <TabContext value={currentTab}>
      <TabList onChange={handleTabChange}>
        {tabs.map((tab, index) => (
          <Tab
            key={index}
            label={tab.label}
            value={tab.value}
            component={Link}
            to={`?${queryName}=${tab.value}`}
            disabled={tab.disabled}
          />
        ))}
      </TabList>
      {tabs.map((tab, index) => (
        <TabPanel key={index} value={tab.value}>
          {tab.content}
        </TabPanel>
      ))}
    </TabContext>
  )
}

export default Tabs
