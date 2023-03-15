import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import ClickAwayListener from '@mui/material/ClickAwayListener'
import Grow from '@mui/material/Grow'
import Paper from '@mui/material/Paper'
import Popper from '@mui/material/Popper'
import MenuItem from '@mui/material/MenuItem'
import MenuList from '@mui/material/MenuList'
import Stack from '@mui/material/Stack'
import { useEffect, useRef, useState } from 'react'
import { useAuth0 } from '@auth0/auth0-react'

import { StyledNavLink } from './MenuAvatarStyled'

export default function AvatarMenu() {
  const [open, setOpen] = useState(false)
  const anchorRef = useRef<HTMLButtonElement>(null)
  const { logout, user } = useAuth0()
  const picture = user?.picture

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen)
  }

  const handleClose = (event: Event | React.SyntheticEvent) => {
    if (anchorRef.current && anchorRef.current.contains(event.target as HTMLElement)) {
      return
    }

    setOpen(false)
  }

  function handleListKeyDown(event: React.KeyboardEvent) {
    if (event.key === 'Tab') {
      event.preventDefault()
      setOpen(false)
    } else if (event.key === 'Escape') {
      setOpen(false)
    }
  }

  const prevOpen = useRef(open)

  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current!.focus()
    }

    prevOpen.current = open
  }, [open])

  return (
    <Stack direction="row" spacing={2}>
      <div>
        <Button
          ref={anchorRef}
          aria-controls={open ? 'composition-menu' : undefined}
          aria-expanded={open ? 'true' : undefined}
          aria-haspopup="true"
          id="composition-button"
          onClick={handleToggle}
        >
          <Avatar alt="User Avatar" src={picture} />
        </Button>
        <Popper
          disablePortal
          transition
          anchorEl={anchorRef.current}
          open={open}
          placement="bottom-start"
          role={undefined}
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin: placement === 'bottom-start' ? 'left top' : 'left bottom',
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList
                    aria-labelledby="composition-button"
                    autoFocusItem={open}
                    id="composition-menu"
                    onKeyDown={handleListKeyDown}
                  >
                    <StyledNavLink to="/profile">
                      <MenuItem onClick={handleClose}>
                        <Button color="primary">Profile</Button>
                      </MenuItem>
                    </StyledNavLink>
                    <MenuItem onClick={handleClose}>
                      <Button color="primary" onClick={() => logout()}>
                        Logout
                      </Button>
                    </MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    </Stack>
  )
}
