type ApiConfig = {
  ENDPOINT: string
}

export type AppConfig = {
  api: ApiConfig
}

const local: AppConfig = {
  api: {
    ENDPOINT: 'http://localhost:3000'
  }
}

const production: AppConfig = {
  api: {
    ENDPOINT: 'https://api.appyudame.com/'
  }
}

const config: AppConfig =
  import.meta.env['VITE_APP_STAGE'] === 'prod' ? production : local

const sharedObject: AppConfig = {
  ...config
}

export default sharedObject
