import { AdvancedImage } from '@cloudinary/react'
import { Cloudinary } from '@cloudinary/url-gen'
import { thumbnail } from '@cloudinary/url-gen/actions/resize'

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

export const Message = ({ urlImages }: Props) => {
  const url = urlImages.urlImage
  const image = cloud.image(url.replace(/^https?:\/\/res.cloudinary.com\/\w+\/image\/upload\//, ''))
  const image150 = image.resize(thumbnail(150, 150))
  const image300 = image.resize(thumbnail(300, 300))

  return (
    <>
      {url && (
        <>
          <a href={image.toURL()}>link to image</a>
          <a href={image150.toURL()}>link to image 150</a>
          <a href={image300.toURL()}>link to image 300</a>
          <a href={url} rel="noreferrer" target="_blank" />
        </>
      )}
    </>
  )
}
