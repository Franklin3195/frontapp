import * as React from 'react'

import { AuthProvider } from '@/providers'
import Button from './components/Ui/Button'
import { ErrorBoundary } from 'react-error-boundary'
import { Notifications } from '@/components/Notifications'
import { PageLoader } from '@/components/page-loader'
import { PrimeReactProvider } from 'primereact/api'
import { QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { Router } from './router'
import { Spinner } from './components/Ui/Spinner'
import UserActivity from './providers/UserActivity'
import { queryClient } from '@/lib/react-query'
import { useAuth0 } from '@auth0/auth0-react'

const ErrorFallback = () => {
  return (
    <div
      className="text-red-500 w-screen h-screen flex flex-col justify-center items-center"
      role="alert"
    >
      <h2 className="text-lg font-semibold">Ooops, something went wrong :( </h2>
      <Button
        className="mt-4"
        onClick={() => window.location.assign(window.location.origin)}
      >
        Refresh
      </Button>
    </div>
  )
}

function App() {
  const { isLoading } = useAuth0()

  if (isLoading) {
    return (
      <div className="page-layout">
        <PageLoader />
      </div>
    )
  }
  return (
    <>
      <React.Suspense
        fallback={
          <div className="flex items-center justify-center w-screen h-screen">
            <Spinner size="xl" />
          </div>
        }
      >
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <PrimeReactProvider value={{ unstyled: true, pt: {} }}>
            <QueryClientProvider client={queryClient}>
              <Notifications />
              <UserActivity>
                {process.env.NODE_ENV === 'development' && (
                  <ReactQueryDevtools />
                )}
                <AuthProvider>
                  <Router />
                </AuthProvider>
              </UserActivity>
            </QueryClientProvider>
          </PrimeReactProvider>
        </ErrorBoundary>
      </React.Suspense>
    </>
  )
}

export default App
