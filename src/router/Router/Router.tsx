import React from 'react'
import { Route, Routes } from 'react-router-dom'

import { AuthenticationGuard } from '@/components/auth/authentication-guard'
import { CallbackPage } from '@/pages/callback-page'
import { HomePage } from '@/pages/Home/home-page'
import { NotFoundPage } from '@/pages/not-found-page'
import { useRoutePaths } from '@/hooks'

// Import pages

import FileUploader from '@/components/Menu/data/rips'

function Router() {
  const { ROOT_PATH } = useRoutePaths()

  return (
    <Routes>
      {/* Home and Test Routes */}
      <Route path={ROOT_PATH} element={<HomePage />} />

      <Route
        path="/rips"
        element={<AuthenticationGuard component={FileUploader} />}
      />

      {/* Other Routes */}
      <Route path="/callback" element={<CallbackPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}

export default Router
