import './assets/main.css'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createHashRouter, RouterProvider } from 'react-router'
import App from './App'
import schedule from './pages/Schedule'
import { ExpiryBoard } from './pages/ExpiryBoard'
import { InventoryManagement } from './pages/InventoryManagement'
import { ChartAnalysis } from './pages/ChartAnalysis'

const router = createHashRouter([
  {
    path: '/',
    Component: App,
    children: [
      { path: 'schedule', Component: schedule },
      { path: 'ExpiryBoard', Component: ExpiryBoard },
      { index: true, Component: InventoryManagement },
      { path: 'ChartAnalysis', Component: ChartAnalysis }
    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
