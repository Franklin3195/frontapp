import { LoginButton } from '../buttons/login-button'
import { LogoutButton } from '../buttons/logout-button'
import React from 'react'
import { SignupButton } from '../buttons/signup-button'
import { useAuth0 } from '@auth0/auth0-react'

export const NavBarButtons: React.FC = () => {
  const { isAuthenticated } = useAuth0()

  return (
    <div className="nav-bar__buttons">
      {!isAuthenticated && (
        <>
          <SignupButton />
          <LoginButton />
        </>
      )}
      {isAuthenticated && (
        <>
          <LogoutButton />
        </>
      )}
    </div>
  )
}
