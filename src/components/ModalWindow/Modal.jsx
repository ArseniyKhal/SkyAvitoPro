import { Header } from 'components/Header-2/Header'
import { CloseBtn } from 'components/ClouseBtn/ClouseBtn'
import * as S from './Modal.styles'

export const Modal = ({ childComponent, cross, closeFunction }) => {
  return (
    <S.ModalDarckBG>
      <S.ModalWindow>
        <S.ModalHeader>
          <Header />
        </S.ModalHeader>
        {cross && (
          <div
            onClick={() => {
              closeFunction(false)
            }}
          >
            <CloseBtn />
          </div>
        )}
        {childComponent}
      </S.ModalWindow>
    </S.ModalDarckBG>
  )
}

export const Success = ({ text }) => {
  return (
    <>
      <S.ContentBlock>
        Успешный успех!!!
        <br />
        {text}
        <S.SuccessImg
          src={'/img/progressOk.png'}
          alt="SuccessImg"
        ></S.SuccessImg>
      </S.ContentBlock>
    </>
  )
}

export const Error = ({ text }) => {
  return (
    <>
      <S.ContentBlock>{text}</S.ContentBlock>
    </>
  )
}
