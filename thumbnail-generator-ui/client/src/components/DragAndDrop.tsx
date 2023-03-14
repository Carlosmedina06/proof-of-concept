import React from 'react'
import ImageUploading from 'react-images-uploading'
import { useSelector } from 'react-redux'

import { useUploadImage } from '../hooks'

import { ImageSelected, BoxDragAndDrop, Message } from './'

export const DragAndDrop = () => {
  const imagen = useSelector((state: any) => state.yourReducer)

  const { handleChange, images, ...rest } = useUploadImage()

  return (
    <>
      <Message image={images} urlImages={imagen} />
      <ImageUploading maxNumber={1} multiple={false} value={images} onChange={handleChange}>
        {({ imageList, onImageUpload, dragProps, isDragging, onImageRemove, onImageUpdate }) => (
          <>
            {imageList[0] ? (
              <ImageSelected
                {...{ onImageRemove, onImageUpdate, ...rest }}
                img={imageList[0].dataURL!}
              />
            ) : (
              <BoxDragAndDrop {...{ onImageUpload, dragProps, isDragging }} />
            )}
          </>
        )}
      </ImageUploading>
    </>
  )
}
