import React from 'react';

function Navbar() {
  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-gray-900 shadow-md sticky top-0 z-50">
      <h1 className="text-2xl font-bold text-pink-400">Ragini Thorat</h1>
      <ul className="flex gap-6">
        <li><a href="#home" className="hover:text-pink-400">Home</a></li>
        <li><a href="#about" className="hover:text-pink-400">About</a></li>
        <li><a href="#projects" className="hover:text-pink-400">Projects</a></li>
        <li><a href="#contact" className="hover:text-pink-400">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
