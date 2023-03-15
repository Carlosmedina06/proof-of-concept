import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { Auth0Provider } from '@auth0/auth0-react'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from '@mui/material/styles'
import { CssBaseline } from '@mui/material'

import store from './redux/store/store'
import App from './App'
import theme from './theme/theme'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Auth0Provider
          authorizationParams={{
            redirect_uri: window.location.origin,
          }}
          clientId="njUmU0K19UE5gOKFpVKWcth2Nv3WAzqp"
          domain="dev-k6vvan1jnd1dxcgn.us.auth0.com"
        >
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <App />
          </ThemeProvider>
        </Auth0Provider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)
