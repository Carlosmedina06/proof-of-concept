import { ImageListType } from 'react-images-uploading'

export const UPLOAD_IMAGE = 'UPLOAD_IMAGE'
export const UPLOAD_IMAGE_SUCCESS = 'UPLOAD_IMAGE_SUCCESS'
export const UPLOAD_IMAGE_FAILURE = 'UPLOAD_IMAGE_FAILURE'

export const uploadImage = (imageList: ImageListType) => ({
  type: UPLOAD_IMAGE,
  payload: imageList,
})

export const uploadImageSuccess = (urlImage: string) => ({
  type: UPLOAD_IMAGE_SUCCESS,
  payload: urlImage,
})

export const uploadImageFailure = () => ({
  type: UPLOAD_IMAGE_FAILURE,
})
