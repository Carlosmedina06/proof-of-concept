import { Button } from '@mui/material'
import { styled } from '@mui/material/styles'

export const StyledButton = styled(Button)((props) => ({
  backgroundColor: props.type === 'upload' ? '#000000' : '#ffffff',
  color: props.type === 'upload' ? '#ffffff' : '#000000',
  border: '1px solid #ffff',

  '&:hover': {
    backgroundColor: props.type === 'upload' ? '#ffffff' : '#000000',
    color: props.type === 'upload' ? '#000000' : '#ffffff',
    borderColor: props.type === 'upload' ? '#000000' : '#ffffff',
  },

  '&:active': {
    transform: 'scale(0.98)',
  },
}))
