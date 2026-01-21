import { Outlet } from 'react-router'
import Menu from './components/Menu'

const App: React.FC = () => {
  return (
    <div className="relative flex h-dvh justify-between overflow-hidden">
      <nav className="drag center h-full border-r-2 border-gray-200 bg-gray-50 p-4">
        <Menu />
      </nav>
      <main className="center h-full w-[95%]">
        <Outlet />
      </main>
    </div>
  )
}

export default App
