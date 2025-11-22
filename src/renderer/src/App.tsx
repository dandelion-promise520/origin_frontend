import { Outlet } from 'react-router'
import Menu from './components/menu/Menu'
import { Flex } from '@radix-ui/themes'

const App = (): React.JSX.Element => {
  return (
    <Flex justify="between" position="relative" overflow="hidden" height="100dvh">
      <Flex
        justify="center"
        align="center"
        height="100%"
        p="4"
        className="border-r-2 border-gray-4 drag"
      >
        <Menu />
      </Flex>
      <Flex justify="center" align="center" height="100%" width="95%">
        <Outlet />
      </Flex>
    </Flex>
  )
}

export default App
