import { Button, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import { Box } from '@mui/system'
import LoginIcon from '@mui/icons-material/Login'
import HomeIcon from '@mui/icons-material/Home'
import PersonIcon from '@mui/icons-material/Person'
import LogoutIcon from '@mui/icons-material/Logout'
import { useAuth0 } from '@auth0/auth0-react'

import { StyledNavLink } from './MenuNavbarStyled'

export default function MenuNavbar() {
  const { isAuthenticated, logout, loginWithRedirect } = useAuth0()

  return (
    <Box sx={{ width: 200 }}>
      <nav>
        <List
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            height: '100%',
          }}
        >
          <ListItem
            disablePadding
            sx={{
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <StyledNavLink to={'/'}>
              <ListItemButton>
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText>Home</ListItemText>
              </ListItemButton>
            </StyledNavLink>

            {isAuthenticated && (
              <StyledNavLink to={'/profile'}>
                <ListItemButton>
                  <ListItemIcon>
                    <PersonIcon />
                  </ListItemIcon>
                  <ListItemText>Profile</ListItemText>
                </ListItemButton>
              </StyledNavLink>
            )}

            {!isAuthenticated && (
              <Button color="primary" onClick={() => loginWithRedirect()}>
                <ListItemButton>
                  <ListItemIcon>
                    <LoginIcon />
                  </ListItemIcon>
                  <ListItemText>Login</ListItemText>
                </ListItemButton>
              </Button>
            )}
            <ListItemButton>
              {isAuthenticated && (
                <>
                  <ListItemIcon>
                    <LogoutIcon />
                  </ListItemIcon>
                  <ListItemText>
                    <Button color="primary" onClick={() => logout()}>
                      Logout
                    </Button>
                  </ListItemText>
                </>
              )}
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
    </Box>
  )
}
