import { Box, Container, Divider, Grid, Typography } from '@mui/material'

export const Footer = () => {
  return (
    <Box
      sx={{
        width: '100%',
        height: 'auto',
        backgroundColor: 'primarya',
        paddingTop: '1rem',
        paddingBottom: '1rem',
      }}
    >
      <Divider
        sx={{
          marginBottom: '1rem',
        }}
      />
      <Container maxWidth="lg">
        <Grid container alignItems="center" direction="column">
          <Grid item xs={12}>
            <Typography color="primary">Made by Carlos Medina</Typography>
          </Grid>
          <Grid item xs={1200}>
            <Typography color="textSecondary" variant="subtitle1">
              {`${new Date().getFullYear()} | React | Material UI | Styled-Components | React Router | Auth0 | Redux-Observable | `}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default Footer
