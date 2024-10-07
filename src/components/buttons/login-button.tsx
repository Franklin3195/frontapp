import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

export const LoginButton: React.FC = () => {
  const { loginWithRedirect } = useAuth0()

  const handleLogin = async () => {
    await loginWithRedirect({
      appState: {
        returnTo: '/contact'
      },
      authorizationParams: {
        prompt: 'login'
      }
    })
  }

  return (
    <button className="button__login" onClick={handleLogin}>
      Log In
    </button>
  )
}
