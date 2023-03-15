import React from 'react'
import ImageUploading from 'react-images-uploading'
import { useSelector } from 'react-redux'
import { useAuth0 } from '@auth0/auth0-react'

import { useUploadImage } from '../../hooks'
import { ImageSelected, BoxDragAndDrop, Pictures } from '..'

import { DragAndDropContainer } from './DragAndDropStyle'

export const DragAndDrop = () => {
  const imagen = useSelector((state: any) => state.yourReducer)
  const { isAuthenticated } = useAuth0()

  const { handleChange, images, ...rest } = useUploadImage()

  return (
    <>
      {isAuthenticated && (
        <>
          <Pictures image={images} urlImages={imagen} />
          <DragAndDropContainer>
            <ImageUploading maxNumber={1} multiple={false} value={images} onChange={handleChange}>
              {({
                imageList,
                onImageUpload,
                dragProps,
                isDragging,
                onImageRemove,
                onImageUpdate,
              }) => (
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
          </DragAndDropContainer>
        </>
      )}
    </>
  )
}
