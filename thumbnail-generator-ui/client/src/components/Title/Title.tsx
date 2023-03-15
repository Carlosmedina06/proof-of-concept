import { useAuth0 } from '@auth0/auth0-react'

import { SubTitle, TitleGradient } from './TitleStyle'

export const Title = () => {
  let { isAuthenticated } = useAuth0()

  return (
    <>
      <TitleGradient>Thumbnail Generator</TitleGradient>
      {!isAuthenticated && <SubTitle>To create your thumbnails please login ⇪ </SubTitle>}
    </>
  )
}
