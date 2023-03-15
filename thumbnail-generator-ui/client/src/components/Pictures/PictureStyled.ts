import styled from 'styled-components'

export const ImgPicture = styled.img`
  width: 300px;
  height: 300px;
  object-fit: cover;
  border-radius: 5px;
`
export const LinkPictureContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border-radius: 5px;
  background-color: #f5f5f5;
  margin: 10px;
  cursor: pointer;
`
export const LinkPicture = styled.a`
  text-decoration: none;
  color: #fff;
  font-size: 20px;
  font-weight: 600;
`
