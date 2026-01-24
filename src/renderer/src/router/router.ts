import { AppLayout } from '@renderer/layouts/app-layout/app-layout'
import { ChartAnalysis } from '@renderer/pages/chart-analysis/chart-analysis'
import { ExpiryBoard } from '@renderer/pages/expiry-board/expiry-board'
import { InventoryManagement } from '@renderer/pages/inventory-management/inventory-management'
import { createHashRouter } from 'react-router'

export const router = createHashRouter([
  {
    path: '/',
    Component: AppLayout,
    children: [
      { index: true, Component: ExpiryBoard },
      { path: 'InventoryManagement', Component: InventoryManagement },
      { path: 'ChartAnalysis', Component: ChartAnalysis }
    ]
  }
])
