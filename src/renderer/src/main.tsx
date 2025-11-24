import '@radix-ui/themes/styles.css'
import './assets/main.css'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createHashRouter, RouterProvider } from 'react-router'
import App from './App'
import { Theme } from '@radix-ui/themes'
import home from './pages/home/home'
import schedule from './pages/schedule/schedule'
import members from './pages/members/members'
import dashboard from './pages/dashboard/dashboard'

const router = createHashRouter([
  {
    path: '/',
    Component: App,
    children: [
      { path: 'home', Component: home },
      { index: true, Component: schedule },
      { path: 'members', Component: members },
      { path: 'dashboard', Component: dashboard }
    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Theme>
      <RouterProvider router={router} />
      {/* <ThemePanel /> */}
    </Theme>
  </StrictMode>
)
