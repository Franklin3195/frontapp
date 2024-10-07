import { createContext } from 'react'

export type User = {
  email: string
  firstName: string
  lastName: string
  permissions: string[]
  roles: string[]
}

export type SignInCredentials = {
  email: string
  password: string
}

export type AuthContextData = {
  user?: User
  isAuthenticated: boolean
  loadingUserData: boolean
  signOut: () => void
}

const AuthContext = createContext({} as AuthContextData)

export default AuthContext
