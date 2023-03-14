import React from 'react'

interface Props {
  loading: boolean
  img: string
  onUpload: () => Promise<void>
  onImageRemove: (index: number) => void
  onImageUpdate: (index: number) => void
}

export const ImageSelected = ({ img, loading, onUpload, onImageRemove, onImageUpdate }: Props) => {
  return (
    <div>
      <img alt="image-selected" className="image-selected" src={img} width={300} />
      <div className="container-buttons">
        {loading ? (
          <p className="loading-label">Upload image ⏳...</p>
        ) : (
          <>
            <button disabled={loading} onClick={onUpload}>
              Upload 📤
            </button>
            <button disabled={loading} onClick={() => onImageUpdate(0)}>
              Update ✏️
            </button>
            <button disabled={loading} onClick={() => onImageRemove(0)}>
              Cancel ❌
            </button>
          </>
        )}
      </div>
    </div>
  )
}
