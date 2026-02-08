import { BellOutlined, UserOutlined } from '@ant-design/icons'
import { theme } from 'antd'
import { Header } from 'antd/es/layout/layout'
import { JSX, useEffect, useState } from 'react'
import { useLocation } from 'react-router'

import { menuConfig } from '../config'

export const AppHeader = (): JSX.Element => {
  const {
    token: { colorBgLayout }
  } = theme.useToken()

  const location = useLocation()

  const [header, setHeader] = useState<string>('')

  useEffect(() => {
    setHeader(menuConfig.find((item) => item.key === location.pathname)?.label || '')
  }, [location.pathname])

  return (
    <Header
      style={{
        height: 'auto',
        padding: 0,
        margin: '30px 24px 0 24px',
        background: colorBgLayout
      }}
      className="flex flex-col justify-center gap-4"
    >
      {/* 基础头部区域 */}
      <section className="flex items-center justify-between">
        <span className="text-4xl font-bold select-none">{header}</span>
        <div className="center gap-4">
          <BellOutlined className="no-drag text-4xl" />
          <UserOutlined className="no-drag text-4xl" />
        </div>
      </section>
    </Header>
  )
}
