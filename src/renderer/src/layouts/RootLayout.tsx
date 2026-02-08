import { JSX, PropsWithChildren } from 'react'

import { LayoutProvider } from './context/LayoutContext'

export const RootLayout = ({ children }: PropsWithChildren): JSX.Element => {
  return <LayoutProvider>{children}</LayoutProvider>
}
