import { Link, Outlet } from 'react-router'
import { Button, Card, Layout, Menu, theme } from 'antd'
import { useState } from 'react'
import {
  AppstoreOutlined,
  BarChartOutlined,
  BellOutlined,
  CalendarOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined
} from '@ant-design/icons'
import { Header } from 'antd/es/layout/layout'
const { Sider, Content } = Layout

const App: React.FC = () => {
  const [collapsed, setCollapsed] = useState(true)
  const {
    token: { colorBgContainer, borderRadiusLG, colorBgLayout }
  } = theme.useToken()

  // 默认头部标题
  const [header, setHeader] = useState<string>('效期看板')

  // 看板卡片部分配置
  const [cardData, _setCardData] = useState([
    { name: '总库存', quantity: 850, iconColor: 'blue', iconBgColor: '#dbeafe' },
    { name: '即将过期', quantity: 2, iconColor: '#d29d25', iconBgColor: '#fef9c3' },
    { name: '已过期', quantity: 1, iconColor: 'red', iconBgColor: '#fee2e2' },
    { name: '正常库存', quantity: 5, iconColor: 'green', iconBgColor: '#dcfce7' }
  ])

  return (
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
          onSelect={(value) => {
            setHeader(value.key)
          }}
          theme="light"
          mode="inline"
          defaultSelectedKeys={[header]}
          className="flex-1"
          items={[
            {
              key: '效期看板',
              icon: <CalendarOutlined />,
              label: <Link to="/ExpiryBoard">效期看板</Link>
            },
            {
              key: '货物管理',
              icon: <AppstoreOutlined />,
              label: <Link to="/">货物管理</Link>
            },
            {
              key: '图表分析',
              icon: <BarChartOutlined />,
              label: <Link to="/ChartAnalysis">图表分析</Link>
            }
          ]}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            height: 'auto',
            padding: 0,
            margin: '30px 24px 0 24px',
            background: colorBgLayout
          }}
          className="drag flex flex-col justify-center gap-4"
        >
          {/* 基础头部区域 */}
          <section className="flex items-center justify-between">
            <span className="text-4xl font-bold">{header}</span>
            <div className="center gap-4">
              <BellOutlined className="text-4xl" />
              <UserOutlined className="text-4xl" />
            </div>
          </section>
          {/* 如果是效期看板页的话，就加4个卡片 */}
          {header === '效期看板' && (
            <section className="grid grid-cols-[repeat(auto-fit,minmax(140px,1fr))] gap-4">
              {cardData.map((item) => (
                <Card key={item.name}>
                  <div className="flex items-center gap-4">
                    <CalendarOutlined
                      style={{
                        color: item.iconColor,
                        fontSize: 16,
                        backgroundColor: item.iconBgColor,
                        height: '40px',
                        width: '40px'
                      }}
                      className="center rounded-full"
                    />
                    <section className="flex flex-col">
                      <span className="text-gray-500">{item.name}</span>
                      <span className="text-xl font-bold">{item.quantity}</span>
                    </section>
                  </div>
                </Card>
              ))}
            </section>
          )}
        </Header>
        <Content
          style={{
            margin: '16px 24px',
            padding: 24,
            minHeight: 280,
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
