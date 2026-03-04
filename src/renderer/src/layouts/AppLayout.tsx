import { Layout } from 'antd'
import { JSX, useEffect } from 'react'
import { useLocation } from 'react-router'

import { AppContent, AppHeader, AppSider } from './components'
import { menuConfig } from './config'
import { LayoutProvider, useLayoutContext } from './context'

const AppLayoutContent = (): JSX.Element => {
  const location = useLocation()
  const { setHeader } = useLayoutContext()

  useEffect(() => {
    const menu = menuConfig.find((item) => item.key === location.pathname)
    const label = menu?.label || ''

    setHeader(label)
  }, [location.pathname, setHeader])

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

export const AppLayout = (): JSX.Element => {
  return (
    <LayoutProvider>
      <AppLayoutContent />
    </LayoutProvider>
  )
}
