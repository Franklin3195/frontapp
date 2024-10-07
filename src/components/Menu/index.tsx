import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { useNavigate } from 'react-router-dom'

const Menu = () => {
  const navigate = useNavigate()
  const { logout } = useAuth0()

  const handleLogout = () => {
    logout({
      logoutParams: {
        returnTo: window.location.origin
      }
    })
  }

  const handleGoto = (url: string) => {
    navigate(url)
  }

  const menuItems = [{ label: 'Rips', url: '/rips' }]

  return (
    <div className="px-2 md:px-0 py-3 space-y-2 md:space-y-0 md:space-x-2 font-medium text-white">
      <div className="flex">
        {menuItems.map((item, index) => (
          <React.Fragment key={item.url}>
            <a
              href="#"
              onClick={() => handleGoto(item.url)}
              className={`px-2 py-2 rounded-md hover:text-white hover:primary-800 
                focus:outline-none focus:text-white focus:primary-800 transition duration-300 transform hover:scale-110 ${
                  index === 0 ? 'md:mr-2' : ''
                }`}
            >
              {item.label}
            </a>
          </React.Fragment>
        ))}
        <a
          href="#"
          onClick={handleLogout}
          className="block md:inline-block px-2 py-2 rounded-md hover:text-white hover:primary-800 
            focus:outline-none focus:text-white focus:primary-800 transition duration-300 transform hover:scale-110"
        >
          Cerrar Sesión
        </a>
      </div>
    </div>
  )
}

export default Menu
