import { useState, useEffect, SyntheticEvent, ReactNode } from 'react'
import TabContext from '../TabContext'
import TabList from '../TabList'
import Tab from '../Tab'
import TabPanel from '../TabPanel'

interface TabData {
  id: number
  label: string
  name: string
  content: ReactNode
  defaultOpen?: boolean
}

export interface TabsProps {
  tabs: TabData[]
  onChange: (event: SyntheticEvent, newValue: number) => void
}

const Tabs = ({ tabs, onChange }: TabsProps) => {
  const [value, setValue] = useState<string | number>('0')

  useEffect(() => {
    const defaultTabIndex = tabs.findIndex((tab) => tab.defaultOpen)
    defaultTabIndex !== -1 && setValue(defaultTabIndex.toString())
  }, [tabs])

  const handleChange = (event: SyntheticEvent, newValue: string | number) => {
    setValue(newValue)
    onChange(event, Number(newValue))
  }

  return (
    <TabContext value={value}>
      <TabList onChange={handleChange}>
        {tabs.map((tab) => (
          <Tab key={tab.id} label={tab.label} value={tab.id.toString()} />
        ))}
      </TabList>
      {tabs.map((tab) => (
        <TabPanel key={tab.id} value={tab.id.toString()}>
          {tab.content}
        </TabPanel>
      ))}
    </TabContext>
  )
}

export default Tabs
