export interface Props {
  onImageUpload: () => void
  dragProps: any
  isDragging: boolean
}

export const BoxDragAndDrop = ({ onImageUpload, dragProps }: Props) => {
  return (
    <div onClick={onImageUpload} {...dragProps}>
      <span>Chosee an Image or Drag and Drop an Image 📤</span>
    </div>
  )
}
