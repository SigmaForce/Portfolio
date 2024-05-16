import { MoonIcon, SunIcon } from '@radix-ui/react-icons'
import { useTheme } from 'next-themes'
import React from 'react'

type ToggleThemeProps = {
  isDark: boolean
  handleToggleTheme: () => void
}

export default function ToggleTheme({
  isDark = false,
  handleToggleTheme,
}: ToggleThemeProps) {
  const { setTheme } = useTheme()
  return (
    <button onClick={handleToggleTheme}>
      {isDark && (
        <MoonIcon
          className="size-6 hover:text-[#1e1e1e] transition-colors duration-500 ease-in-out"
          onClick={() => setTheme('light')}
        />
      )}
      {!isDark && (
        <SunIcon
          className="size-6 hover:text-yellow-400 transition-colors duration-500 ease-in-out"
          onClick={() => setTheme('dark')}
        />
      )}
    </button>
  )
}
