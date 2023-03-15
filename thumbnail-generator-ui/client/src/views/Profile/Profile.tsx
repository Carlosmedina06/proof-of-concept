import { Avatar, Box, Card, Container, Stack, Typography } from '@mui/material'
import { useAuth0 } from '@auth0/auth0-react'
import { Link } from 'react-router-dom'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'

import Layout from '../../layout/Layout'

const Profile = () => {
  const { user } = useAuth0()
  const picture = user?.picture
  const name = user?.name
  const email = user?.email

  return (
    <Layout>
      <Container />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          height: '100vh',
        }}
      >
        <Stack>
          <Card sx={{ borderRadius: 4, padding: 4 }}>
            <Stack direction="row" spacing={2}>
              <Avatar
                alt={name}
                src={picture}
                sx={{
                  width: 150,
                  height: 150,
                }}
              />
              <Typography gutterBottom component="h1" variant="h4">
                {name}
              </Typography>
            </Stack>
            <Typography component="h4" variant="h4">
              Fullstack Developer
            </Typography>
            <Typography>{email}</Typography>
            <Stack direction={'row'} spacing={4}>
              <Link to={`https://www.linkedin.com/in/carlosmedina06/`}>
                <LinkedInIcon color="primary" fontSize="large" />
              </Link>
              <Link to={'https://github.com/Carlosmedina06'}>
                <GitHubIcon color="primary" fontSize="large" />
              </Link>
            </Stack>
          </Card>
        </Stack>
      </Box>
    </Layout>
  )
}

export default Profile
