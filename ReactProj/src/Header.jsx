import React, { useState } from 'react';
import logo from '../assets/images/logo.svg';
import arrow from '../assets/images/icon-arrow-down.svg';

const Header = () => {
  const [activeMenu, setActiveMenu] = useState(null);

  const handleToggle = (menu) => {
    setActiveMenu(activeMenu === menu ? null : menu);
  };

  const menuItems = {
    Features: [
      { label: 'ToDo List', href: '#feature1' },
      { label: 'Calendar', href: '#feature2' },
      { label: 'Reminder', href: '#feature3' },
    ],
    Company: [
      { label: 'About Us', href: '#about' },
      { label: 'Team', href: '#team' },
      { label: 'History', href: '#careers' },
    ],
  };

  return (
    <header className="flex items-center justify-between px-4 py-4 sm:px-6 bg-white shadow-md">
      {/* Logo */}
      <img src={logo} alt="Snap Logo" className="h-auto w-auto" />

      {/* Navigation */}
      <nav className="flex items-center space-x-6 sm:space-x-8">
        {Object.keys(menuItems).map((menu) => (
          <div key={menu} className="relative">
            <button
              onClick={() => handleToggle(menu)}
              className="flex items-center space-x-1 hover:text-blue-500 transition duration-300"
            >
              <span>{menu}</span>
              <img
                src={arrow}
                alt="Dropdown Arrow"
                className={`h-4 w-4 transform transition-transform ${
                  activeMenu === menu ? 'rotate-180' : ''
                }`}
              />
            </button>

            {/* Dropdown */}
            {activeMenu === menu && (
              <div className="absolute left-0 mt-2 bg-white shadow-md rounded-lg w-40 z-10">
                <ul className="py-2">
                  {menuItems[menu].map((item) => (
                    <li key={item.label}>
                      <a
                        href={item.href}
                        className="block px-4 py-2 hover:text-blue-500 hover:bg-gray-100 transition duration-300"
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}

        {/* Static Links */}
        <a href="#home" className="hover:text-blue-500 transition duration-300">
          Careers
        </a>
        <a href="#contact" className="hover:text-blue-500 transition duration-300">
          About
        </a>
      </nav>
    </header>
  );
};

export default Header;
