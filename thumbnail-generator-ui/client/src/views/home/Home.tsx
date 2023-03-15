import { Container } from '@mui/material'

import { DragAndDrop, Title } from '../../components'
import Layout from '../../layout/Layout'

export default function Home() {
  return (
    <Layout>
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: '500px',
          margin: '50px auto',
          padding: { xs: '500px 20px', sm: '350px 50px' },
        }}
      >
        <Title />
        <DragAndDrop />
      </Container>
    </Layout>
  )
}
