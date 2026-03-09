/**
 * AppContent 组件
 *
 * 功能说明：
 * - 实现了页面 Keep-Alive 功能，保持已访问页面的状态
 * - 使用 GSAP 实现页面切换时的平滑过渡动画
 * - 支持页面缓存，避免重复渲染和状态丢失
 *
 * 核心技术：
 * - useOutlet：获取当前路由的 Outlet 实例，用于缓存页面组件
 * - useLayoutEffect：在 DOM 更新后立即执行动画逻辑
 * - GSAP Timeline：编排页面切换的进入和离开动画
 */

// 导入 Ant Design 的 Layout 组件中的 Content 区域
import { Content } from 'antd/es/layout/layout'
// 导入 GSAP 动画库，用于实现页面切换动画
import gsap from 'gsap'
// 导入 React 相关类型和 Hooks
import { JSX, ReactNode, useLayoutEffect, useRef, useState } from 'react'
// 导入 React Router 的 Hooks
import { useLocation, useOutlet } from 'react-router'

export const AppContent = (): JSX.Element => {
  // 获取当前路由位置信息
  const location = useLocation()

  // 核心修复1：通过 useOutlet 拿到路由已经实例化好的节点缓存，而不是在 JSX 里渲染多份 <Outlet />
  // 这样可以保持页面组件的状态，避免重新渲染
  const outlet = useOutlet()
  // 容器引用，用于访问 DOM 元素以执行动画
  const containerRef = useRef<HTMLDivElement>(null)

  // keepAlive 缓存页面实例
  // pages 数组存储所有访问过的页面，key 为路由路径，ele 为对应的 React 节点
  const [pages, setPages] = useState<Array<{ key: string; ele: ReactNode | null }>>([
    { key: location.pathname, ele: outlet }
  ])

  // 新路由加入缓存 (或更新存在的节点引用的最新状态)
  useLayoutEffect(() => {
    setPages((prev) => {
      // 查找当前路径是否已经在缓存中
      const existIdx = prev.findIndex((p) => p.key === location.pathname)
      if (existIdx > -1) {
        // 如果已存在，更新该页面的节点引用（保持最新状态）
        const newPages = [...prev]
        newPages[existIdx].ele = outlet
        return newPages
      }
      // 如果不存在，添加新的页面到缓存
      return [...prev, { key: location.pathname, ele: outlet }]
    })
  }, [location.pathname, outlet])

  // GSAP 页面动画相关状态
  // 保存上一个路由路径，用于判断动画方向
  const prevPathRef = useRef<string>(location.pathname)
  // 标记当前是否正在执行动画，防止动画冲突
  const animatingRef = useRef(false)

  // 页面切换动画逻辑
  useLayoutEffect(() => {
    // 首次加载不需要动画
    if (prevPathRef.current === location.pathname) return

    // 如果用户快速点击导致上一个动画还在进行，强制清理旧的 Tween 避免 DOM 闪烁
    if (animatingRef.current) {
      gsap.killTweensOf(containerRef.current?.children || [])
    }

    const container = containerRef.current
    if (!container) return

    // 获取容器内的所有子元素
    const children = Array.from(container.children) as HTMLElement[]
    // 找到新页面（当前路由对应的页面）
    const newPage = children.find((c) => c.getAttribute('data-path') === location.pathname)
    // 找到旧页面（上一个路由对应的页面）
    const oldPage = children.find((c) => c.getAttribute('data-path') === prevPathRef.current)

    // 标记动画开始
    animatingRef.current = true
    // 创建 GSAP 时间轴，用于编排动画序列
    const tl = gsap.timeline({
      onComplete: () => {
        // 动画完成后的清理工作
        animatingRef.current = false
        prevPathRef.current = location.pathname
      }
    })

    if (oldPage) {
      // 强制在动画期间可见
      oldPage.style.display = 'block'
      // 旧页面离场动画：向左滑动并快速淡出 (Fade out left)
      tl.to(oldPage, {
        x: -30, // 向左退出一小段距离
        opacity: 0, // 淡出
        duration: 0.2, // 旧页面快速消失
        ease: 'power1.in', // 加速退出
        force3D: true, // 开启 GPU 硬件加速
        onComplete: () => {
          // 动画结束后再彻底隐藏
          oldPage.style.display = 'none'
        }
      })
    }

    if (newPage) {
      // 设置新页面初始状态并让其可见
      newPage.style.display = 'block'
      // 新页面进场动画：从右侧滑入并淡入 (Fade in right)
      tl.fromTo(
        newPage,
        {
          x: 30, // 从右侧一小段距离开始
          opacity: 0 // 初始透明度为 0
        },
        {
          x: 0, // 回归原位
          opacity: 1, // 淡入
          duration: 0.3, // 平缓进入
          ease: 'power2.out', // 减速滑入，停靠更自然
          force3D: true, // 开启 GPU 硬件加速
          clearProps: 'transform,opacity' // 动画结束后全面清理 transform 和 opacity
        },
        '>-0.1' //Vben 的特点是在旧页面快退出完时（稍微重叠），新页面紧接着滑入
      )
    }
  }, [location.pathname])

  return (
    <Content
      className="no-drag"
      style={{
        margin: '16px 24px',
        minHeight: 280,
        position: 'relative', // 必须有相对定位作为绝对定位子元素的容器
        overflow: 'hidden' // 遮住页面滑动超出的部分
      }}
    >
      <div ref={containerRef} style={{ position: 'relative', height: '100%' }}>
        {pages.map((p) => {
          // 核心修复2：React 层必须让 "旧页面" 也保持渲染可见（block），否则 GSAP 无从执行离场渐出动画
          // 只显示当前页面和上一个页面（用于动画过渡）
          const isShow = p.key === location.pathname || p.key === prevPathRef.current

          return (
            <div
              key={p.key}
              data-path={p.key}
              style={{
                position: 'absolute',
                top: 0, // 补充 left 和 top 规避潜在的文档流挤压
                left: 0,
                width: '100%',
                height: '100%',
                display: isShow ? 'block' : 'none'
              }}
            >
              {/* 直接渲染缓存的 React 节点 */}
              {p.ele}
            </div>
          )
        })}
      </div>
    </Content>
  )
}
