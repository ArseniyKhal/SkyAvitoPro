import styled from 'styled-components'
import { Button } from 'App.styles'

export const NewAvdForm = styled.form`
  padding: 0px 6px;
  margin-top: -24px;
  margin-bottom: -2px;
  width: 512px;
  @media (width <= 800px) {
    width: 100%;
  }
`
export const Title = styled.h2`
  color: var(--text-color-black);
  font-size: 32px;
  font-weight: 500;
  line-height: 220%;
  margin-bottom: 10px;
  @media (width <= 800px) {
    font-size: 22px;
    text-align: center;
    margin-top: 10px;
  }
`
export const InputsName = styled.p`
  color: var(--text-color-black);
  line-height: 150%;
  margin-bottom: 10px;
  & span {
    color: var(--text-color-input);
    margin-left: 10px;
  }
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
  @media (width <= 800px) {
    border-radius: 30px;
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
  flex-wrap: wrap;
  overflow: hidden;
  margin-bottom: 30px;
`
export const FotoDelBtn = styled.div`
  position: absolute;
  top: -20px;
  right: 2px;
  width: 20px;
  height: 20px;
  background-color: red;
  border-radius: 50%;
  cursor: pointer;
  transition: top 0.3s ease;
  &:before,
  &:after {
    content: '';
    position: absolute;
    display: inline-block;
    width: 13px;
    height: 2px;
    border-radius: 2px;
    transition: background-color 0.1s ease;
    background-color: var(--btn-disabled);
    position: relative;
  }
  &:before {
    top: -5px;
    left: 3px;
    transform: rotate(45deg);
  }
  &:after {
    top: -24px;
    left: 3px;
    transform: rotate(135deg);
  }
  &:hover:before,
  &:hover:after {
    background-color: var(--main-topic);
  }
`
export const FotoInputBlock = styled.div`
  width: 90px;
  height: 90px;
  position: relative;
  overflow: hidden;
  &:hover ${FotoDelBtn} {
    top: 2px;
  }
`
export const FotoInputLabel = styled.label`
  cursor: pointer;
  position: relative;
  display: inline-block;
  width: 100%;
  height: 100%;
  background-color: #f0f0f0;
  &:before,
  &:after {
    content: '';
    position: absolute;
    display: inline-block;
    width: 30px;
    height: 3px;
    transition: background-color 0.1s ease;
    background-color: var(--btn-disabled);
    top: 50%;
    left: 50%;
  }
  &:before {
    transform: translate(-50%, -50%) rotate(90deg);
  }
  &:after {
    transform: translate(-50%, -50%);
  }
  &:hover:before,
  &:hover:after {
    background-color: var(--main-topic);
  }
`

export const FotoPreview = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  object-fit: cover;
`
export const FotoInput = styled.input`
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
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
  font-family: Roboto;
  line-height: 150%;
  &:focus {
    box-shadow: 0px 0px 5px var(--main-topic);
    border: 1px solid var(--main-topic);
  }
  &::placeholder {
    font-family: Roboto;
    color: var(--text-color-input);
    line-height: 150%;
  }
  @media (width <= 800px) {
    border-radius: 30px;
  }
`
export const PriceInput = styled(NewAvdInput)`
  width: 200px;
  padding: 0px 38px 0px 19px;
  margin-bottom: 30px;
  position: relative;
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  @media (width <= 800px) {
    width: 100%;
  }
`
export const PriceInputSpan = styled.span`
  position: absolute;
  right: 24px;
  top: 39px;
  @media (width > 800px) {
    right: 320px;
  }
`
export const EnterButton = styled(Button)`
  width: 181px;
  @media (width <= 800px) {
    width: 100%;
  }
`
