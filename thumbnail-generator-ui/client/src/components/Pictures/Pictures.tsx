import { Cloudinary } from '@cloudinary/url-gen'
import { thumbnail } from '@cloudinary/url-gen/actions/resize'
import { Container, Divider, List, ListItem, ListItemText, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import { redirect } from 'react-router-dom'

import {
  BotonEliminar,
  ImgPicture,
  LinkPicture,
  LinkPictureContainer,
  TextEliminar,
} from './PictureStyled'

interface Props {
  urlImages: {
    urlImage: string
  }
  image: any
}

const cloud = new Cloudinary({
  cloud: {
    cloudName: 'ddzjbp2i1',
    apiKey: '631853931255384',
    apiSecret: 'kjaLexYrhgEWcAOIF1o6nS6jtVs',
  },
})

export const Pictures = ({ urlImages }: Props) => {
  const redirect = () => {
    window.location.href = '/'
  }
  const url = urlImages.urlImage
  const image = cloud.image(url.replace(/^https?:\/\/res.cloudinary.com\/\w+\/image\/upload\//, ''))
  const image150 = cloud.image(
    url.replace(/^https?:\/\/res.cloudinary.com\/\w+\/image\/upload\//, ''),
  )
  const image300 = cloud.image(
    url.replace(/^https?:\/\/res.cloudinary.com\/\w+\/image\/upload\//, ''),
  )

  const image150x150 = image150.resize(thumbnail(150, 150)).toURL()
  const image300x300 = image300.resize(thumbnail(300, 300)).toURL()

  const style = {
    width: '200px',
    maxWidth: 360,
    bgcolor: 'background.paper',
    border: '1px solid #d3d4d5',
    borderRadius: '5px',
  }

  return (
    <Container
      sx={{
        display: 'flex',
        justifyContent: 'center',
        marginBottom: '20px',
      }}
    >
      {url && (
        <Stack
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            alignItems: 'center',
            position: 'relative',
          }}
        >
          <BotonEliminar
            onClick={() => {
              redirect()
            }}
          >
            <TextEliminar>↺</TextEliminar>
          </BotonEliminar>
          <ImgPicture alt="image-selected" src={url} width={300} />
          <LinkPictureContainer>
            <Typography gutterBottom color={'secondary'} component="div" variant="h6">
              Links
            </Typography>
            <List aria-label="mailbox folders" color="primary" component="nav" sx={style}>
              <ListItem button divider>
                <LinkPicture href={image.toURL()} target="_blank">
                  <ListItemText primary="Original" />
                </LinkPicture>
              </ListItem>
              <Divider />
              <ListItem button divider>
                <LinkPicture href={image150x150} target="_blank">
                  <ListItemText primary="150x150" />
                </LinkPicture>
              </ListItem>
              <ListItem button divider>
                <LinkPicture href={image300x300} target="_blank">
                  <ListItemText primary="300x300" />
                </LinkPicture>
              </ListItem>
            </List>
          </LinkPictureContainer>
        </Stack>
      )}
    </Container>
  )
}
