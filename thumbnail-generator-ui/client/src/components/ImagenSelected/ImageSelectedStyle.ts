import { Button } from '@mui/material'
import { styled } from '@mui/material/styles'

export const StyledButton = styled(Button)`
  margin: 10px;
  background-color: transparent;
  color: #ffffff;
  border-radius: 5px;
  max-width: fit-content;
  max-height: 70px;
  min-height: 70px;
  border: 1px solid #ffffff;
  font-weight: bold;
  &:hover {
    background-color: #ffffff;
    color: #000000;
  }
  &:active {
    transform: scale(0.95);
  }
`
