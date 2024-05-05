import React from "react";

export default function Header() {
  return (
    <header className="w-full h-20 fixed top-0 left-0 bg-[#0694FE]/95 z-50 backdrop-blur-sm text-white">
      <nav className="flex justify-between items-center max-w-7xl mx-auto h-20">
        <div>Logo</div>
        <ul className="flex gap-4 items-center">
          <li>Home</li>
          <li>About</li>
          <li>Skills</li>
          <li>Works</li>
          <li>Theme</li>
        </ul>
      </nav>
    </header>
  );
}
