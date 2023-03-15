import styled, { keyframes } from 'styled-components'

const animateBg = keyframes`
  0% { background-position: 0% 0%; }
  100% { background-position: 100% 0%; }
`

export const AnimatedGradient = styled.div`
  animation: ${animateBg} 14s linear infinite;
  background-image: linear-gradient(90deg, #000000, #303030, #000000, #303030);
  background-size: 300% 100%;
`
