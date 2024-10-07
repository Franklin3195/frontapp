/* eslint-disable react-hooks/exhaustive-deps */
import { AuthContext, User } from '@/contexts'
import { ReactNode, useEffect, useState } from 'react'
import { api, setAuthorizationHeader } from '@/services'
import { useLocation, useNavigate } from 'react-router-dom'

import { audience } from '@/config'
import { paths } from '@/router'
import { removeSessionCookies } from '@/utils'
import storage from '@/utils/storage'
import { useAuth0 } from '@auth0/auth0-react'

type Props = {
  children: ReactNode
}

function AuthProvider(props: Props) {
  const { isAuthenticated, getAccessTokenSilently } = useAuth0()
  const { children } = props

  const [user, setUser] = useState<User>()
  const [loadingUserData, setLoadingUserData] = useState(true)
  const navigate = useNavigate()
  const { pathname } = useLocation()

  const [token, setToken] = useState<string>()

  function signOut() {
    removeSessionCookies()
    setUser(undefined)
    setLoadingUserData(false)
    navigate(paths.LOGIN_PATH)
  }

  useEffect(() => {
    if (!token) {
      removeSessionCookies()
      setUser(undefined)
      setLoadingUserData(false)
    }
  }, [navigate, pathname, token])

  useEffect(() => {
    if (isAuthenticated) {
      getToken()
    }
  }, [getAccessTokenSilently])

  const getToken = async () => {
    const tokenAuth = await getAccessTokenSilently({
      authorizationParams: {
        audience,
        scope: 'read:current_user'
      }
    })
    if (tokenAuth) {
      setToken(tokenAuth)
      storage.setToken(tokenAuth)
      setAuthorizationHeader({ request: api.defaults, token: tokenAuth })
      getUserData()
    }
  }

  async function getUserData() {
    setLoadingUserData(true)

    try {
      const response = await api.get('/users/me')
      if (response?.data) {
        //if firstName is '' then goto user profile page
        setUser({ ...response.data })
      }
    } catch (error) {
      /**
       * an error handler can be added here
       */
    } finally {
      setLoadingUserData(false)
    }
  }
  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        user,
        loadingUserData,
        signOut
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
