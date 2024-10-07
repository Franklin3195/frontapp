import { NavLink } from 'react-router-dom'
import React from 'react'

interface NavBarTabProps {
  path: string
  label: string
}

export const NavBarTab: React.FC<NavBarTabProps> = ({ path, label }) => {
  return (
    <NavLink
      to={path}
      end
      className={({ isActive }) =>
        'nav-bar__tab ' + (isActive ? 'nav-bar__tab--active' : '')
      }
    >
      {label}
    </NavLink>
  )
}
