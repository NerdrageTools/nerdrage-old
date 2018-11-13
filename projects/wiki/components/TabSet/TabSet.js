import React, { Component } from 'react'
import './TabSet.scss'

const DEFAULT_TAB = {
  id: 'blank',
  onClick: () => {},
  renderContents: () => <div />,
  renderTab: () => <div />,
}

export default function TabSet({
  activeTabId,
  buttons,
  onTabClicked = () => {},
  showTabs = true,
  tabs = [],
}) {
  if (tabs.length === 0) tabs.push(DEFAULT_TAB)

  const activeId = activeTabId || tabs[0].id
  const activeTab = tabs.find(tab => tab.id === activeId) || tabs[0]
  const className = [
    'tab-set',
    !showTabs ? 'no-tabs' : '',
  ].filter(Boolean).join(' ')

  return (
    <div className={className}>
      {showTabs && <>
        <ul className={`tabs ${activeTabId}`}>
          {tabs.map((tab) => {
            // eslint-disable-next-line no-param-reassign
            if (!tab.onClick) tab.onClick = () => onTabClicked(tab.id)

            const liClassName = [
              'tab',
              tab.className,
              tab.id,
              activeTab.id === tab.id && 'is-active',
            ].filter(Boolean).join(' ')

            return <li key={tab.id} className={liClassName} onClick={tab.onClick}>{tab.tab}</li>
          })}
          <li className="buttons">{buttons}</li>
        </ul>
        </>}
      <div className="tab-contents">
        {activeTab.contents}
      </div>
    </div>
  )
}
