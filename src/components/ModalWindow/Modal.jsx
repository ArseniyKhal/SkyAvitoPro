import { useNavigate } from 'react-router-dom'
import * as S from './Modal.styles'

export const Modal = () => {
  const navigate = useNavigate()
  return (
    <S.ModalDarckBG>
      <S.ModalWindow>
        <S.Content>
          <S.CloseBtn onClick={() => navigate(-1)}></S.CloseBtn>
        </S.Content>
      </S.ModalWindow>
    </S.ModalDarckBG>
  )
}
