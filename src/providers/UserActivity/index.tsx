import React, { FC } from 'react'

import { IdleTimerProvider } from 'react-idle-timer'
import { useSession } from '@/hooks'

interface UserActivityProps {
  children: React.ReactNode
}

const UserActivity: FC<UserActivityProps> = ({ children }) => {
  const minutes = 5000

  const { isAuthenticated } = useSession()

  const onIdle = async () => {
    if (isAuthenticated) {
      console.log('User is idle')
    }
  }

  return (
    <IdleTimerProvider timeout={minutes} onIdle={onIdle}>
      {children}
    </IdleTimerProvider>
  )
}

export default UserActivity
