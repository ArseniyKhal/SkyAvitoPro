import { styled } from 'styled-components'
import { Button } from 'App.styles'

export const SearchSection = styled.div`
  height: 136px;
  width: 100%;
  margin-top: 80px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  display: flex;
  gap: 10px;
  justify-content: space-between;
`
export const Logo = styled.div`
  margin-right: 50px;
  cursor: pointer;
`
export const SearchText = styled.input`
  flex-shrink: 0;
  height: 50px;
  border-radius: 6px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  background: #fff;
  padding: 0px 19px;
  flex-grow: 1;
  -webkit-box-flex: 1;
  -ms-flex-positive: 1;
  background-color: transparent;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: var(--text-color-black);
  outline: none;
  &::-webkit-search-cancel-button {
    display: none;
  }
  &::-webkit-input-placeholder {
    background-color: transparent;
    line-height: 150%;
    color: var(--text-color-input);
  }
  &:-ms-input-placeholder {
    background-color: transparent;
    line-height: 150%;
    color: var(--text-color-input);
  }
  &::placeholder {
    background-color: transparent;
    line-height: 150%;
    color: var(--text-color-input);
  }
`
export const EnterButton = styled(Button)`
  width: 158px;
`
