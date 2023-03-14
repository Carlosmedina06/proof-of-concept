import { AdvancedImage } from '@cloudinary/react'
import { Cloudinary } from '@cloudinary/url-gen'
import { thumbnail } from '@cloudinary/url-gen/actions/resize'

interface Props {
  urlImages: string
}

const cloud = new Cloudinary({
  cloud: {
    cloudName: 'ddzjbp2i1',
    apiKey: '631853931255384',
    apiSecret: 'kjaLexYrhgEWcAOIF1o6nS6jtVs',
  },
})

export const Message = ({ urlImages }: Props) => {
  const image = cloud.image(
    urlImages.replace(/^https?:\/\/res.cloudinary.com\/\w+\/image\/upload\//, ''),
  )
  const image2 = cloud.image(
    urlImages.replace(/^https?:\/\/res.cloudinary.com\/\w+\/image\/upload\//, ''),
  )
  const image3 = cloud.image(
    urlImages.replace(/^https?:\/\/res.cloudinary.com\/\w+\/image\/upload\//, ''),
  )

  return (
    <>
      {urlImages?.length > 0 ? (
        <div>
          <h2>Original</h2>
          <AdvancedImage cldImg={image} />
          <h2>150</h2>
          <AdvancedImage cldImg={image2.resize(thumbnail().width(150).height(150))} />
          <h2>400</h2>
          <AdvancedImage cldImg={image3.resize(thumbnail().width(400).height(400))} />
        </div>
      ) : (
        <p>Upload an image to see the result</p>
      )}
    </>
  )
}
