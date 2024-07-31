import { ReactNode } from 'react'
import { useState, useEffect } from 'react'
import { useSearchParams, useNavigate } from 'react-router-dom'
import { TabContext, TabList, TabPanel, Tab, Icon, IconName } from '../../components'

interface TabProps {
  label: string
  value: string
  content: ReactNode
  active?: boolean
  disabled?: boolean
  icon?: IconName
}

interface TabsProps {
  tabs: TabProps[]
  queryName?: string
  onTabChange?: (newValue: string) => void
}

const Tabs = ({ tabs, queryName = 'tab', onTabChange }: TabsProps) => {
  const [searchParams, setSearchParams] = useSearchParams()
  const navigate = useNavigate()
  const initialTab = searchParams.get(queryName) || tabs.find((tab) => tab.active)?.value || tabs[0].value
  const [currentTab, setCurrentTab] = useState(initialTab)

  useEffect(() => {
    if (!searchParams.has(queryName)) {
      const updatedParams = new URLSearchParams(searchParams.toString())
      updatedParams.set(queryName, initialTab)
      setSearchParams(updatedParams)
    }
  }, [searchParams, queryName, initialTab, setSearchParams])

  const handleTabChange = (_: React.SyntheticEvent, newValue: string) => {
    const selectedTab = tabs.find((tab) => tab.value === newValue)
    if (selectedTab && !selectedTab.disabled) {
      setCurrentTab(newValue)

      const updatedParams = new URLSearchParams(searchParams.toString())
      updatedParams.set(queryName, newValue)

      navigate(`?${updatedParams.toString()}`, { replace: true })

      onTabChange && onTabChange(newValue)
    }
  }

  return (
    <TabContext value={currentTab}>
      <div className='MuiTabs-content'>
        <TabList onChange={handleTabChange} variant='scrollable' scrollButtons={false}>
          {tabs.map((tab) => {
            const isActive = currentTab === tab.value
            return (
              <Tab
                key={tab.value}
                label={tab.label}
                value={tab.value}
                disabled={tab.disabled}
                icon={
                  tab.icon ? (
                    <div>
                      <Icon
                        name={tab.icon}
                        size='md'
                        color={isActive ? 'medium' : 'primary'}
                      />
                    </div>
                  ) : (
                    ''
                  )
                }
              />
            )
          })}
          {/* {tabs.map((tab) => (
            <Tab
              key={tab.value}
              label={tab.label}
              value={tab.value}
              disabled={tab.disabled}
              icon={
                tab.icon ? (
                  <div>
                    <Icon name={tab.icon} size='md' color={activeTab ? 'medium' : 'primary'} />
                  </div>
                ) : (
                  ''
                )
              }
            />
          ))} */}
        </TabList>
      </div>
      {tabs.map((tab, index) => (
        <TabPanel key={index} value={tab.value}>
          {tab.content}
        </TabPanel>
      ))}
    </TabContext>
  )
}

export default Tabs
