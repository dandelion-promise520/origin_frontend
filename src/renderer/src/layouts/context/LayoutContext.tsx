import {
  createContext,
  Dispatch,
  SetStateAction,
  useCallback,
  useContext,
  useRef,
  useState
} from 'react'

interface LayoutContextType {
  /**
   * 注册 Ref 的辅助函数，用于绑定到元素的 ref 属性上
   * @example <div ref={(node)=> {registerRef('myElement',node)}} />
   */
  registerRef: (key: string, node: HTMLElement | null) => void
  /**
   * 获取已注册的 DOM 节点
   * @example const node = getRef('myElement')
   */
  getRef: (key: string) => HTMLElement | null
  /** 当前页面标题（由侧栏或路由更新） */
  header: string
  /** 设置 header 的方法，供子组件调用 */
  setHeader: Dispatch<SetStateAction<string>>
}

const LayoutContext = createContext<LayoutContextType | null>(null)

export const useLayoutContext = (): LayoutContextType => {
  const context = useContext(LayoutContext)
  if (!context) {
    throw new Error('useLayoutContext 必须在 LayoutProvider 中使用。')
  }
  return context
}

export const LayoutProvider = ({ children }: { children: React.ReactNode }): React.JSX.Element => {
  const refs = useRef<Map<string, HTMLElement | null>>(new Map())
  const [header, setHeader] = useState<string>('')

  const registerRef = (key: string, node: HTMLElement | null): void => {
    if (node) {
      refs.current.set(key, node)
    } else {
      refs.current.delete(key)
    }
  }
  const getRef = useCallback((key: string): HTMLElement | null => {
    return refs.current.get(key) || null
  }, [])

  return (
    <LayoutContext.Provider value={{ registerRef, getRef, header, setHeader }}>
      {children}
    </LayoutContext.Provider>
  )
}
