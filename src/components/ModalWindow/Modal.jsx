// import { useNavigate } from 'react-router-dom'
import * as S from './Modal.styles'

export const Modal = ({ childComponent }) => {
  //   const navigate = useNavigate()
  return (
    <S.ModalDarckBG>
      <S.ModalWindow>
        {/* <S.Content style={{ width: `${width}px` }}>
          <S.CloseBtn onClick={() => navigate(-1)}></S.CloseBtn> */}
        {childComponent}
        {/* </S.Content> */}
      </S.ModalWindow>
    </S.ModalDarckBG>
  )
}
