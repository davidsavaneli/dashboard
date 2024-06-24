import React, { useState, useEffect, SyntheticEvent, ReactNode, memo } from 'react'
import Tab from '@mui/material/Tab'
import TabContext from '@mui/lab/TabContext'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'

type TabData = {
  id: number
  label: string
  name: string
  content: ReactNode
  defaultOpen?: boolean
}

type MDTabsProps = {
  tabs: TabData[]
  onChange: (event: SyntheticEvent, newValue: number) => void
}

const MDTabs = ({ tabs, onChange }: MDTabsProps) => {
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

export default memo(MDTabs)
