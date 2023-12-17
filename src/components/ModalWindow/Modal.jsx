import { useNavigate } from 'react-router-dom'
import * as S from './Modal.styles'

export const Modal = ({ childComponent, cross, closeFunction }) => {
  const navigate = useNavigate()
  return (
    <S.ModalDarckBG>
      <S.ModalWindow>
        {cross && (
          <S.CloseBtn onClick={() => closeFunction(false)}></S.CloseBtn>
        )}
        {childComponent}
      </S.ModalWindow>
    </S.ModalDarckBG>
  )
}
