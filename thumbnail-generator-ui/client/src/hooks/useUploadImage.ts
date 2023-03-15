import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { ImageListType } from 'react-images-uploading'

import { uploadImage } from '../redux/actions/actions'
import { fileUpload } from '../utils'

interface UploadImageHookReturnType {
  loading: boolean
  onUpload: () => Promise<void>
  handleChange: (imageList: ImageListType) => void
  urlImage: string
  images: ImageListType
}

export const useUploadImage = (): UploadImageHookReturnType => {
  const [images, setImages] = useState<ImageListType>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [urlImage, setUrlImage] = useState<string>('')
  const dispatch = useDispatch()

  const handleChange = (imageList: ImageListType): void => setImages(imageList)

  const onUpload = async (): Promise<void> => {
    setLoading(true)

    const url = await fileUpload(images[0].file!)

    if (url) {
      dispatch(uploadImage(images))
      setUrlImage(url.toString())
      setLoading(false)
    } else {
      alert('Error, please try again later. ❌')
    }

    setImages([])
  }

  return {
    loading,
    onUpload,
    handleChange,
    urlImage,
    images,
  }
}
