import { BellOutlined, UserOutlined } from '@ant-design/icons'
import { Button, theme } from 'antd'
import { Header } from 'antd/es/layout/layout'
import gsap from 'gsap'
import { JSX, useLayoutEffect, useRef } from 'react'

import { useLayoutContext } from '../context/layout-context/LayoutContext'

export const AppHeader = (): JSX.Element => {
  const {
    token: { colorBgLayout }
  } = theme.useToken()

  const { header } = useLayoutContext()
  const titleRef = useRef<HTMLSpanElement>(null)

  // 当 header 发生变化时，由于 key={header} 会重新挂载真实 DOM
  // 所以在 layoutEffect 中我们只需对新挂载的节点执行进场动画
  useLayoutEffect(() => {
    const el = titleRef.current
    if (!el) return

    gsap.fromTo(
      el,
      {
        x: 50, // 从右侧进入
        skewX: -60, // 产生轻微倾斜
        opacity: 0
      },
      {
        x: 0,
        skewX: 0,
        opacity: 1,
        duration: 0.4,
        ease: 'back.out(1.2)',
        force3D: true,
        clearProps: 'transform,opacity'
      }
    )
  }, [header])

  return (
    <Header
      style={{
        height: 'auto',
        padding: 0,
        margin: '36px 24px 0 24px',
        background: colorBgLayout
      }}
      className="flex flex-col justify-center"
    >
      {/* 基础头部区域 */}
      <section className="flex items-center justify-between">
        <div className="relative flex h-10 w-full items-center overflow-hidden">
          {/* 使用 key 强制 React 在 header 变化时替换这个节点，并触发进场动画 */}
          <span
            ref={titleRef}
            key={header}
            className="absolute block text-4xl font-bold text-nowrap select-none"
          >
            {header}
          </span>
        </div>
        <div className="center no-drag ml-auto gap-2">
          <Button type="default" size="large" icon={<BellOutlined />} />
          <Button type="default" size="large" icon={<UserOutlined />} />
        </div>
      </section>
    </Header>
  )
}
