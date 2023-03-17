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
export const BotonEliminar = styled.button`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 30px;
  height: 25px;
  background-color: rgb(245, 245, 245);
  border: none;
  cursor: pointer;
  border-radius: 10px;
  display: flex;
  padding: 10px;
  text-align: center;
  -webkit-box-pack: center;
  justify-content: center;
  align-items: center;
  margin: 10px;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.2);
  &:hover {
    background-color: #e5e5e5;
  }
  &:active {
    transform: scale(0.95);
  }
`
export const TextEliminar = styled.p`
  font-size: 20px;
  color: #000;
  text-decoration: none;
`
