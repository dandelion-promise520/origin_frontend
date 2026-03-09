import { Dispatch, SetStateAction } from 'react'

export interface LayoutContextType {
  /**
   * 注册 Ref 的辅助函数，用于绑定到元素的 ref 属性上
   * @example <div ref={(node)=> {registerRef('myElement',node)}} />
   */
  registerRef: (key: string, node: HTMLElement | null) => void
  /**
   * 获取已注册的 DOM 节点
   * @example const node = getRef('myElement')WKwLK
   */
  getRef: (key: string) => HTMLElement | null
  /** 当前页面标题（由侧栏或路由更新） */
  header: string
  /** 设置 header 的方法，供子组件调用 */
  setHeader: Dispatch<SetStateAction<string>>
}
