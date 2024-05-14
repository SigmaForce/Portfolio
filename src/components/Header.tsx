'use client'
import { TextAlignJustifyIcon } from '@radix-ui/react-icons'
import React, { useCallback, useState } from 'react'
import ToggleTheme from './ToggleTheme'
import { ToggleButton } from './ToggleButton'

export default function Header() {
  const [isDark, setIsDark] = useState(false)

  const handleToggleTheme = useCallback(() => {
    setIsDark((prevState) => !prevState)
  }, [])

  const [isOpenMenu, setIsOpenMenu] = useState(false)

  const handleToggleMenu = useCallback(() => {
    setIsOpenMenu((prevState) => !prevState)
  }, [])

  return (
    <header className="w-full h-20 fixed top-0 left-0 bg-[#0694FE]/95 z-50 backdrop-blur-sm text-white">
      <nav className="flex justify-between items-center container mx-auto h-20">
        <div className="mx-4 lg:mx-0">Logo</div>
        <ul className="gap-4 items-center hidden lg:flex">
          <li>Home</li>
          <li>About</li>
          <li>Skills</li>
          <li>Works</li>
          <li>
            <ToggleTheme
              isDark={isDark}
              handleToggleTheme={handleToggleTheme}
            />
          </li>
        </ul>
        <ul className="gap-4 items-center justify-center flex lg:hidden mx-4">
          <li>
            <ToggleTheme
              isDark={isDark}
              handleToggleTheme={handleToggleTheme}
            />
          </li>
          <li className="cursor-pointer p-2">
            <ToggleButton
              isOpenMenu={isOpenMenu}
              handleToggleMenu={handleToggleMenu}
            />
          </li>
        </ul>
      </nav>

      {isOpenMenu && (
        <main className="fixed left-0 top-0 z-30 min-h-screen w-screen overflow-hidden bg-black/80 pt-[4rem] lg:hidden">
          <nav className="mx-auto flex max-w-[80%] items-center justify-center rounded-2xl border border-gray-600 bg-secondary py-3 shadow-2xl">
            <ul className="w-full flex justify-between gap-3 flex-col px-4">
              <li className="border-b border-gray-600 py-3">Home</li>
              <li className="border-b border-gray-600 py-3">About</li>
              <li className="border-b border-gray-600 py-3">Skills</li>
              <li className="border-b border-gray-600 py-3">Works</li>
            </ul>
          </nav>
        </main>
      )}
    </header>
  )
}
