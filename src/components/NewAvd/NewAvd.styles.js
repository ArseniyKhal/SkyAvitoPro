import styled from 'styled-components'
import { Button } from 'App.styles'

export const NewAvdForm = styled.form`
  padding: 0px 6px;
  margin-top: -24px;
  margin-bottom: -2px;
  width: 512px;
`
export const Title = styled.h2`
  color: var(--text-color-black);
  font-size: 32px;
  font-weight: 500;
  line-height: 220%;
  margin-bottom: 10px;
`
export const InputsName = styled.p`
  color: var(--text-color-black);
  line-height: 150%;
  margin-bottom: 4px;
`
export const NewAvdInput = styled.input`
  width: 100%;
  height: 50px;
  border-radius: 6px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  background: inherit;
  padding: 0px 19px;
  outline: none;
  font-size: 16px;
  fill: none;
  margin-bottom: 20px;
  &:focus {
    box-shadow: 0px 0px 5px var(--main-topic);
    border: 1px solid var(--main-topic);
  }
  &::placeholder {
    color: rgba(0, 0, 0, 0.3);
    line-height: 150%;
  }
`
export const InputsLable = styled.label`
  color: var(--text-color-black);
  line-height: 150%;
  position: relative;
  top: -5px;
  display: block;
`
export const FotoContainer = styled.div`
  width: 100%;
  height: 90px;
  display: flex;
  gap: 10px;
  margin-bottom: 30px;
`
export const FotoInput = styled.div`
  cursor: pointer;
`
export const TextArea = styled.textarea`
  width: 100%;
  height: 200px;
  border-radius: 6px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  background: inherit;
  padding: 13px 19px;
  outline: none;
  font-size: 16px;
  fill: none;
  resize: none;
  margin-bottom: 20px;
  &:focus {
    box-shadow: 0px 0px 5px var(--main-topic);
    border: 1px solid var(--main-topic);
  }
  &::placeholder {
    color: rgba(0, 0, 0, 0.3);
    line-height: 150%;
  }
`
export const PriceInput = styled(NewAvdInput)`
  width: 200px;
  padding: 0px 30px 0px 19px;
  margin-bottom: 30px;
`
export const PriceInputSpan = styled.span`
  position: relative;
  right: 24px;
`
export const EnterButton = styled(Button)`
  width: 181px;
`
