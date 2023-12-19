import styled from 'styled-components'
import { Button } from 'App.styles'

export const ChangeAvatarBlock = styled.div`
  font-size: 36px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const ChangeAvatarInput = styled.input`
  padding: 20px;
  font-size: 20px;
`
export const ChangeAvatarBtn = styled(Button)``

export const UploadFile = styled.label`
  position: relative;
  display: inline-block;
  & input[type='file'] {
    position: absolute;
    z-index: -1;
    opacity: 0;
    display: block;
    width: 0;
    height: 0;
  }
`
export const PreviewImg = styled.img`
  max-width: 400px;
  max-height: 400px;
  margin-bottom: 20px;
`
export const Error = styled.p`
  font-size: 24px;
  margin-top: 40px;
  max-width: 400px;
`
