import { styled } from 'styled-components'
import { Button } from 'App.styles'

export const NewAdvForm = styled.div`
  padding: 0px 6px;
  margin-top: -24px;
  margin-bottom: -2px;
  width: 652px;
  margin-bottom: 30px;
  @media (width <= 800px) {
    width: 100%;
    margin-top: 0px;
  }
`
export const Title = styled.h2`
  color: var(--text-color-black);
  font-size: 32px;
  font-weight: 500;
  line-height: 220%;
  margin-bottom: 20px;
  @media (width <= 800px) {
    font-size: 24px;
    line-height: 120%;
    text-align: center;
  }
`
export const InputsLable = styled.label`
  color: var(--text-color-black);
  line-height: 150%;
  font-weight: 600;
  position: relative;
  top: -5px;
  display: block;
  margin-bottom: 14px;
  @media (width <= 800px) {
    display: none;
  }
`
export const TextArea = styled.textarea`
  font-family: 'Roboto', sans-serif;
  width: 100%;
  height: 100px;
  border-radius: 6px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  background: inherit;
  padding: 13px 19px;
  outline: none;
  font-size: 16px;
  fill: none;
  resize: none;
  margin-bottom: 14px;
  &:focus {
    box-shadow: 0px 0px 5px var(--main-topic);
    border: 1px solid var(--main-topic);
  }
  &::placeholder {
    color: rgba(0, 0, 0, 0.3);
    line-height: 150%;
  }
  @media (width <= 800px) {
    border-radius: 30px;
    border: 1px solid #d9d9d9;
  }
`
export const EnterButton = styled(Button)`
  width: 181px;
  @media (width <= 800px) {
    width: 100%;
  }
`
export const CommentsBlock = styled.ul`
  max-height: 480px;
  overflow-y: auto;
`
export const Comment = styled.li`
  display: flex;
  gap: 12px;
  &:not(:last-child) {
    margin-bottom: 30px;
  }
`
export const ComAvatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;
  background-color: #f0f0f0;
  flex-shrink: 0;
`
export const Img = styled.img`
  width: 100%;
  height: 40px;
  object-fit: cover;
`
export const ComContent = styled.div`
  color: var(--text-color-black);
  line-height: 200%;
`
export const ComHeader = styled.p`
  font-weight: 600;
  margin-bottom: 12px;
  & span {
    color: var(--text-color-grey);
    line-height: 200%;
    margin-left: 10px;
  }
`
export const ComParagraph = styled.p`
  font-weight: 600;
  line-height: 200%;
`
export const ComText = styled.p`
  line-height: 150%;
`
