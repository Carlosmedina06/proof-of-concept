import { Container } from '@mui/material'
import { ReactNode } from 'react'

import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'

import { AnimatedGradient } from './LayoutStyle'

type LayoutProps = {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <AnimatedGradient>
      <Container>
        <Navbar />
        {children}
        <Footer />
      </Container>
    </AnimatedGradient>
  )
}

export default Layout
