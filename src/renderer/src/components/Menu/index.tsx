import React from 'react'

import { NavLink } from 'react-router'
import './style.css'

const Menu: React.FC = () => {
  return (
    <div className="flex h-full flex-col items-center justify-between">
      <header className="center flex-col gap-4" id="menu">
        <section className="center flex-col gap-4">
          <NavLink to="/" className={'no-drag'}>
            <span className="icon-[fa7-solid--home] size-6" />
          </NavLink>
        </section>

        {/* 分割线 */}
        <div className="w-8 rounded-full border-2 border-gray-300"></div>

        <section className="center flex-col gap-4">
          <NavLink to="schedule" className={'no-drag'}>
            <span className="icon-[mingcute--schedule-fill] size-7" />
          </NavLink>
          <NavLink to="members" className={'no-drag'}>
            <span className="icon-[tdesign--member-filled] size-6" />
          </NavLink>
          <NavLink to="dashboard" className={'no-drag'}>
            <span className="icon-[streamline-ultimate--presentation-board-graph-bold] size-6" />
          </NavLink>
        </section>
      </header>

      <main
        style={{ writingMode: 'vertical-rl' }}
        className="text-xl font-bold text-black select-none"
      >
        rentabel
      </main>

      <footer className="icon-[tabler--message] no-drag size-10 cursor-pointer" />
    </div>
  )
}

export default Menu
