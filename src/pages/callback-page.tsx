import { PageLayout } from '@/components/Layout/page-layout'
import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

export const CallbackPage: React.FC = () => {
  const { error, handleRedirectCallback } = useAuth0()

  React.useEffect(() => {
    const redirectCallback = async () => {
      await handleRedirectCallback()
    }
    redirectCallback()
  }, [handleRedirectCallback])

  if (error) {
    return (
      <PageLayout>
        <div className="content-layout">
          <h1 id="page-title" className="content__title">
            Error
          </h1>
          <div className="content__body">
            <p id="page-description">
              <span>{error.message}</span>
            </p>
          </div>
        </div>
      </PageLayout>
    )
  }

  return (
    <div className="page-layout">
      MobileNavBar
      <div className="page-layout__content" />
    </div>
  )
}
