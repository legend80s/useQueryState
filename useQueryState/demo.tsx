import React from 'react'
import { Tabs, type TabsProps } from 'antd'
import { useQueryState } from '@neural/ui'

export default function () {
  const [activeTab, setActiveTab] = useQueryState<'1' | '2' | '3'>('activeTab', '1')

  const items: TabsProps['items'] = [
    {
      key: '1',
      label: '详情',
      children: <h1>DetailsPage</h1>,
    },
    {
      key: '2',
      label: '监控',
      children: <h1>监控</h1>,
    },
    {
      key: '3',
      label: '部署记录',
      children: <h1>部署记录</h1>,
    },
  ]

  return (
    <main>
      <p>请切换 Tab 后刷新页面，可以看到将自动切换到上次点击的 Tab</p>
      <Tabs
        size='middle'
        defaultActiveKey={activeTab}
        // @ts-expect-error
        onChange={setActiveTab}
        items={items}
        tabPosition='top'
      />
    </main>
  )
}
