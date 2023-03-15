import { Box } from '@mui/system'
import { styled } from '@mui/material/styles'

export const DragAndDropContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'trnasparent',
  border: '1px dashed #ffff',
  padding: '1rem',
  borderRadius: '4px',
  color: '#ffffff',
  cursor: 'pointer',
  transition: 'all 0.2s ease-in-out',
  '&:hover': {
    transform: 'scale(1.05)',
  },
})
