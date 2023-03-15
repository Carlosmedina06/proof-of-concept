import { Stack } from '@mui/system'

import Loader from '../Loader/Loader'

import { StyledButton } from './ImageSelectedStyle'

interface Props {
  loading: boolean
  img: string
  onUpload: () => Promise<void>
  onImageRemove: (index: number) => void
  onImageUpdate: (index: number) => void
}

export const ImageSelected = ({ img, loading, onUpload, onImageRemove, onImageUpdate }: Props) => {
  return (
    <Stack
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        maxWidth: 300,
      }}
    >
      <img alt="image-selected" src={img} width={300} />
      <Stack alignItems="center">
        {loading ? (
          <Stack
            alignItems={'center'}
            direction={'row'}
            spacing={2}
            sx={{
              padding: '10px',
            }}
          >
            <Loader />
            <p>Uploading image please wait a few seconds 🕑</p>
          </Stack>
        ) : (
          <Stack direction={'row'} justifyContent="space-between" mt={2} spacing={2}>
            <StyledButton disabled={loading} onClick={onUpload}>
              Upload 📤
            </StyledButton>
            <StyledButton disabled={loading} onClick={() => onImageUpdate(0)}>
              Update ✏️
            </StyledButton>
            <StyledButton disabled={loading} onClick={() => onImageRemove(0)}>
              Cancel ❌
            </StyledButton>
          </Stack>
        )}
      </Stack>
    </Stack>
  )
}
