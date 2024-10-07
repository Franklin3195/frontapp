import React from 'react'
import Menu from '.'

import logo from '@/assets/logo.png'

const NavBarMenu = () => {
  return (
    <nav className="bg-blue-600 fixed top-0 left-10 right-10 z-50 rounded-t-lg rounded-b-lg mt-4">
      <div className="max-w-7xl mx-auto px-11 flex items-center justify-between h-16 border-b border-solid border-slate-600 rounded-t-md rounded-b-md">
        <div className="flex-shrink-0 font-bold tracking-wider">
          <a href="#" className="text-2xl text-gray-700">
            <img src={logo} alt="logo" className="w-56 h-auto" />{' '}
            {/* Aumenta el tamaño del logo */}
          </a>
        </div>
        <div className="hidden md:flex items-center space-x-6">
          {' '}
          {/* Aumenta el espacio entre los elementos del menú */}
          <Menu />
        </div>
      </div>
    </nav>
  )
}

export default NavBarMenu
