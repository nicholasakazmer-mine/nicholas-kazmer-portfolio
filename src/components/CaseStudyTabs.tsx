import { useState } from 'react'
import type { ReactNode } from 'react'

interface Tab {
  id: string
  label: string
  content: ReactNode
}

interface CaseStudyTabsProps {
  tabs: Tab[]
}

export function CaseStudyTabs({ tabs }: CaseStudyTabsProps) {
  const [activeTab, setActiveTab] = useState(tabs[0].id)

  return (
    <div className="cs-accordion">
      <div className="cs-tab-bar">
        {tabs.map(tab => (
          <button
            key={tab.id}
            className={`cs-tab-btn${activeTab === tab.id ? ' active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      {tabs.map(tab => (
        <div key={tab.id} className={`cs-tab-content${activeTab === tab.id ? ' active' : ''}`}>
          {tab.content}
        </div>
      ))}
    </div>
  )
}
