import { Layout } from 'antd'
import { JSX } from 'react'

import { AppContent, AppHeader, AppSider } from './components'

export const MainLayout = (): JSX.Element => {
  return (
    <Layout className="drag h-dvh">
      <AppSider />

      <Layout>
        <AppHeader />
        <AppContent />
      </Layout>
    </Layout>
  )
}
