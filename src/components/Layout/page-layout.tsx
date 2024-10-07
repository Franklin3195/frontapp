import NavBarMenu from '../Menu/NavBar'
import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

interface Props {
  children: React.ReactNode
}

export const PageLayout: React.FC<Props> = ({ children }) => {
  // const [showMobileMenu, setShowMobileMenu] = useState(false)
  const { isAuthenticated } = useAuth0()

  return (
    <div className="">
      {isAuthenticated && (
        <>
          <NavBarMenu />
          {/* <NavBar />
          <MobileNavBar /> */}
        </>
      )}

      <div className="">{children}</div>
    </div>
  )
}
