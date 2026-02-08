import { JSX } from 'react'

import { MainLayout } from './MainLayout'
import { RootLayout } from './RootLayout'

export const AppLayout = (): JSX.Element => (
  <RootLayout>
    <MainLayout />
  </RootLayout>
)
