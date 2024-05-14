import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
import React from "react";

type ToggleThemeProps = {
  isDark: boolean;
  handleToggleTheme: () => void;
};

export default function ToggleTheme({
  isDark = false,
  handleToggleTheme,
}: ToggleThemeProps) {
  const { setTheme } = useTheme();
  return (
    <button onClick={handleToggleTheme}>
      {isDark && (
        <MoonIcon className="size-6" onClick={() => setTheme("light")} />
      )}
      {!isDark && (
        <SunIcon className="size-6" onClick={() => setTheme("dark")} />
      )}
    </button>
  );
}
