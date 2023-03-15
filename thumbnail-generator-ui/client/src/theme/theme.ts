import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#ffffff',
      light: '#020000',
    },
    secondary: {
      main: '#000',
    },
    background: {
      default: '#000000',
      paper: '#000000',
    },
    divider: 'rgba(255,255,255,0.12)',
    info: {
      main: '#1495c9',
    },
  },
})

export default theme
