import { NavBarTab } from './nav-bar-tab'
import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

export const NavBarTabs: React.FC = () => {
  const { isAuthenticated } = useAuth0()

  return (
    <div className="nav-bar__tabs">
      <NavBarTab path="/public" label="Public" />
      {isAuthenticated && (
        <>
          <NavBarTab path="/protected" label="Protected" />
          <NavBarTab path="/admin" label="Admin" />
        </>
      )}
    </div>
  )
}
