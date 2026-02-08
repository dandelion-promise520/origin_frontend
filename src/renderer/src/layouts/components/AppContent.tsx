import { Content } from 'antd/es/layout/layout'
import { JSX } from 'react'
import { Outlet } from 'react-router'

import { useLayoutContext } from '../context'

export const AppContent = (): JSX.Element => {
  const { registerRef } = useLayoutContext()

  return (
    <Content
      ref={(node) => {
        registerRef('content', node)
      }}
      className="no-drag"
      style={{
        margin: '16px 24px',
        minHeight: 280
      }}
    >
      <Outlet />
    </Content>
  )
}
