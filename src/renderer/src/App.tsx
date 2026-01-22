import { Link, Outlet } from 'react-router'
import { Button, Layout, Menu, theme } from 'antd'
import { useState } from 'react'
import {
  HomeOutlined,
  LineChartOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  ScheduleOutlined,
  UserOutlined
} from '@ant-design/icons'
const { Sider, Content } = Layout

const App: React.FC = () => {
  const [collapsed, setCollapsed] = useState(true)
  const {
    token: { colorBgContainer, borderRadiusLG }
  } = theme.useToken()

  return (
    // <div className="relative flex h-dvh justify-between overflow-hidden">
    //   <nav className="drag center h-full border-r-2 border-gray-200 bg-gray-50 p-4">
    //     {/* <Menu /> */}
    //   </nav>
    //   <main className="center h-full w-[95%]">
    //     <Outlet />
    //   </main>
    // </div>
    <Layout style={{ height: '100%' }}>
      <Sider theme="light" trigger={null} collapsible collapsed={collapsed} id="cus-sider">
        <div className="drag flex flex-nowrap items-center">
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
        </div>
        <Menu
          theme="light"
          mode="inline"
          defaultSelectedKeys={['1']}
          className="flex-1"
          items={[
            {
              key: '1',
              icon: <HomeOutlined />,
              label: <Link to="/">首页</Link>
            },
            {
              key: '2',
              icon: <ScheduleOutlined />,
              label: <Link to="/schedule">表格页</Link>
            },
            {
              key: '3',
              icon: <UserOutlined />,
              label: <Link to="/members">成员页</Link>
            },
            {
              key: '4',
              icon: <LineChartOutlined />,
              label: <Link to="/dashboard">看板页</Link>
            }
          ]}
        />
      </Sider>
      <Layout>
        {/* <Header
          style={{
            padding: 0,
            background: colorBgContainer
          }}
          className="drag"
        ></Header> */}
        <Content
          style={{
            // margin: '24px 16px',
            // padding: 24,
            // minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  )
}

export default App
