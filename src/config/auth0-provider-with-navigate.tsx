import { AppState, Auth0Provider } from '@auth0/auth0-react'
import React, { PropsWithChildren } from 'react'

import { useNavigate } from 'react-router-dom'

interface Auth0ProviderWithNavigateProps {
  children: React.ReactNode
}

export const Auth0ProviderWithNavigate = ({
  children
}: PropsWithChildren<Auth0ProviderWithNavigateProps>): JSX.Element | null => {
  const navigate = useNavigate()

  const domain = process.env.REACT_APP_AUTH0_DOMAIN

  const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID

  const redirectUri = process.env.REACT_APP_AUTH0_CALLBACK_URL

  const onRedirectCallback = (appState?: AppState) => {
    navigate(appState?.returnTo || window.location.pathname)
  }

  if (!(domain && clientId && redirectUri)) {
    return null
  }

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        redirect_uri: redirectUri,
        audience: 'https://appyudame-12.us.auth0.com/api/v2/',
        scope: 'read:current_user update:current_user_metadata'
      }}
      onRedirectCallback={onRedirectCallback}
    >
      {children}
    </Auth0Provider>
  )
}
