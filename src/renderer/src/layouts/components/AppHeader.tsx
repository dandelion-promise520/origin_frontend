import { BellOutlined, UserOutlined } from '@ant-design/icons'
import { Button, theme } from 'antd'
import { Header } from 'antd/es/layout/layout'
import { JSX } from 'react'

import { useLayoutContext } from '../context/LayoutContext'

export const AppHeader = (): JSX.Element => {
  const {
    token: { colorBgLayout }
  } = theme.useToken()

  const { header } = useLayoutContext()

  return (
    <Header
      style={{
        height: 'auto',
        padding: 0,
        margin: '36px 24px 0 24px',
        background: colorBgLayout
      }}
      className="flex flex-col justify-center gap-4"
    >
      {/* 基础头部区域 */}
      <section className="flex items-center justify-between">
        <span className="text-4xl font-bold select-none">{header}</span>
        <div className="center no-drag gap-2">
          <Button type="default" size="large" icon={<BellOutlined />} />
          <Button type="default" size="large" icon={<UserOutlined />} />
        </div>
      </section>
    </Header>
  )
}
