import { AppBar, Button, Drawer, IconButton, Toolbar, Typography } from '@mui/material'
import { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu'
import { Box } from '@mui/system'
import { useAuth0 } from '@auth0/auth0-react'

import AvatarMenu from '../MenuAvatar/MenuAvatar'
import NavListDrawer from '../MenuNavbar/MenuNavbar'

import { StyledNavLink } from './NavbarStyled'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { isAuthenticated, loginWithRedirect } = useAuth0()

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            color="inherit"
            edge="start"
            size="large"
            sx={{ display: { xs: 'flex', sm: 'none' } }}
            onClick={() => setOpen(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography sx={{ flexGrow: 1 }} variant="h6">
            Thumbnail Generator
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'flex' }, alignItems: 'center' }}>
            <StyledNavLink to={'/'}>
              <Button color="primary">Home</Button>
            </StyledNavLink>
            {isAuthenticated ? (
              <AvatarMenu />
            ) : (
              <Button color="primary" onClick={() => loginWithRedirect()}>
                Login
              </Button>
            )}
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        anchor="left"
        open={open}
        sx={{ display: { xs: 'flex', sm: 'none' } }}
        onClose={() => setOpen(false)}
      >
        <NavListDrawer />
      </Drawer>
    </>
  )
}
