import styled from 'styled-components'

export const CloseBtn = styled.div`
  position: absolute;
  top: 40px;
  right: 40px;
  width: 24px;
  height: 24px;
  cursor: pointer;
  z-index: 12;
  &:before,
  &:after {
    content: '';
    display: inline-block;
    width: 30px;
    height: 3px;
    border-radius: 2px;
    transition: background-color 0.1s ease;
    background-color: var(--btn-disabled);
    position: relative;
    @media (width <= 800px) {
      background-color: #000;
      width: 16px;
      height: 2px;
    }
  }
  @media (width <= 800px) {
    top: 85px;
    left: 26px;
    width: 12px;
    height: 23px;
  }
  &:before {
    top: -1px;
    left: -3px;
    transform: rotate(45deg);
    @media (width <= 800px) {
      top: 3px;
      left: -2px;
    }
  }
  &:after {
    top: -20px;
    left: -3px;
    transform: rotate(135deg);
    @media (width <= 800px) {
      top: -26px;
      left: -2px;
    }
  }
  &:hover:before,
  &:hover:after {
    background-color: var(--main-topic);
  }
`
