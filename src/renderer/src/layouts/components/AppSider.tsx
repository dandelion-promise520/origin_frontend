import { MenuFoldOutlined, MenuUnfoldOutlined, SettingOutlined } from '@ant-design/icons'
import { Button, Menu } from 'antd'
import Sider from 'antd/es/layout/Sider'
import gsap from 'gsap'
import { JSX, useState } from 'react'
import { useLocation, useNavigate } from 'react-router'

import { menuConfig } from '../config/menuConfig'
import { useLayoutContext } from '../context/LayoutContext'

const menuItems = menuConfig.map((item) => ({
  key: item.key,
  icon: <item.icon />,
  label: item.label
}))

export const AppSider = (): JSX.Element => {
  const [collapsed, setCollapsed] = useState(true)
  const { getRef } = useLayoutContext()

  const location = useLocation()
  const navigate = useNavigate()

  const handleSelect = ({ key }: { key: string }): void => {
    const contentRef = getRef('content')

    if (!contentRef) {
      navigate(key)
      return
    }

    gsap.to(contentRef, {
      duration: 0.4,
      opacity: 0,
      x: 50,
      ease: 'cubic-bezier(0.4, 0, 0.2, 1)',
      onComplete: () => {
        navigate(key)

        gsap.set(contentRef, {
          opacity: 0,
          x: -50
        })

        gsap.to(contentRef, {
          duration: 0.4,
          opacity: 1,
          x: 0,
          ease: 'cubic-bezier(0.4, 0, 0.2, 1)'
        })
      }
    })
  }

  return (
    <Sider theme="light" trigger={null} collapsible collapsed={collapsed}>
      <div className="flex h-full flex-col">
        <section className="flex flex-nowrap items-center">
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 74,
              height: 64,
              flexShrink: 0
            }}
            className="no-drag"
          />

          <span
            className={`text-xl font-bold text-black ${collapsed ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300 select-none`}
          >
            origin
          </span>
        </section>
        {/* 菜单部分 */}
        <Menu
          selectedKeys={[location.pathname]}
          onSelect={handleSelect}
          theme="light"
          mode="inline"
          className="no-drag flex-1"
          items={menuItems}
        />

        <Menu mode="inline" inlineCollapsed={collapsed} className="no-drag" selectable={false}>
          <Menu.Item key="setting" icon={<SettingOutlined />}>
            设置
          </Menu.Item>
        </Menu>
      </div>
    </Sider>
  )
}
