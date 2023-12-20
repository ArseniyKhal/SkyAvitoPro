import * as S from './Modal.styles'

export const Modal = ({ childComponent, cross, closeFunction }) => {
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

export const Success = () => {
  return (
    <>
      <S.SuccessBlock>
        Успешный успех!!!
        <S.SuccessImg
          src={'/img/progressOk.png'}
          alt="SuccessImg"
        ></S.SuccessImg>
      </S.SuccessBlock>
    </>
  )
}
