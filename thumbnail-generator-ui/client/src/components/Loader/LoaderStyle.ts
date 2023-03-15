import styled from 'styled-components'

export const Spinner = styled.div`
  border: 4px solid #f3f3f3;
  border-top: 4px #343434 solid;
  border-radius: 50%;
  height: 30px;
  width: 30px;
  animation: spin 2s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`
