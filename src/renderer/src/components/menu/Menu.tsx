import { Flex } from '@radix-ui/themes'

import { NavLink } from 'react-router'

const Menu = (): React.JSX.Element => {
  return (
    <Flex justify="between" align="center" direction="column" height="100%">
      <Flex
        direction="column"
        justify="center"
        align="center"
        gap="4"
        id="menu"
        className="no-drag"
      >
        <Flex
          direction="column"
          justify="center"
          align="center"
          gap="4"
          className="after:bg-gray-4 after:h-0.5 after:w-8 after:rounded-xl after:content-['']"
        >
          <NavLink to="/">
            <span className="icon-[fa7-solid--home] size-6" />
          </NavLink>
        </Flex>

        <Flex direction="column" gap="4">
          <NavLink to="schedule">
            <span className="icon-[mingcute--schedule-fill] size-7" />
          </NavLink>
          <NavLink to="members">
            <span className="icon-[tdesign--member-filled] size-6" />
          </NavLink>
          <NavLink to="dashboard">
            <span className="icon-[streamline-ultimate--presentation-board-graph-bold] size-6" />
          </NavLink>
        </Flex>
      </Flex>

      <section
        style={{ writingMode: 'vertical-rl' }}
        className="text-xl font-bold text-black select-none"
      >
        rentabel
      </section>

      <section className="icon-[tabler--message] no-drag size-10 cursor-pointer" />
    </Flex>
  )
}

export default Menu
