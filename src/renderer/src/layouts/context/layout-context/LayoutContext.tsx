import { createContext, useCallback, useContext, useRef, useState } from 'react'

import { LayoutContextType } from './types'

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
