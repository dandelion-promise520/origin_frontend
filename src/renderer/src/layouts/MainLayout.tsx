import { Layout } from 'antd'
import { JSX, useEffect } from 'react'
import { useLocation } from 'react-router'

import { AppContent, AppHeader, AppSider } from './components'
import { menuConfig } from './config'
import { useLayoutContext } from './context'

export const MainLayout = (): JSX.Element => {
  const location = useLocation()
  const { setHeader } = useLayoutContext()

  // 路由变化时触发
  useEffect(() => {
    const menu = menuConfig.find((item) => item.key === location.pathname)

    const label = menu?.label || ''

    // 标题改变
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
