import * as S from './NewAvd.styles'

export const NewAvd = () => {
  return (
    <>
      <S.NewAvdForm>
        <S.Title>Новое объявление</S.Title>
        <S.InputsLable htmlFor="name">Название</S.InputsLable>
        <S.NewAvdInput
          type="text"
          name="name"
          id="name"
          //  value={name}
          placeholder={'Введите название'}
          //  onChange={handleChange}
        />
        <S.InputsLable htmlFor="description">Описание</S.InputsLable>
        <S.TextArea
          name="description"
          id="description"
          //  value={name}
          placeholder={'Введите описание'}
          //  onChange={handleChange}
        />
        <S.InputsName>Фотографии товара</S.InputsName>
        <S.FotoContainer>
          <S.FotoInput>
            <svg
              width="90"
              height="90"
              viewBox="0 0 90 90"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="90" height="90" fill="#F0F0F0" />
              <path d="M45 30V60" stroke="#D9D9D9" strokeWidth="3" />
              <path d="M60 45H30" stroke="#D9D9D9" strokeWidth="3" />
            </svg>{' '}
          </S.FotoInput>
          <S.FotoInput>
            <svg
              width="90"
              height="90"
              viewBox="0 0 90 90"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="90" height="90" fill="#F0F0F0" />
              <path d="M45 30V60" stroke="#D9D9D9" strokeWidth="3" />
              <path d="M60 45H30" stroke="#D9D9D9" strokeWidth="3" />
            </svg>{' '}
          </S.FotoInput>
          <S.FotoInput>
            <svg
              width="90"
              height="90"
              viewBox="0 0 90 90"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="90" height="90" fill="#F0F0F0" />
              <path d="M45 30V60" stroke="#D9D9D9" strokeWidth="3" />
              <path d="M60 45H30" stroke="#D9D9D9" strokeWidth="3" />
            </svg>{' '}
          </S.FotoInput>
          <S.FotoInput>
            <svg
              width="90"
              height="90"
              viewBox="0 0 90 90"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="90" height="90" fill="#F0F0F0" />
              <path d="M45 30V60" stroke="#D9D9D9" strokeWidth="3" />
              <path d="M60 45H30" stroke="#D9D9D9" strokeWidth="3" />
            </svg>{' '}
          </S.FotoInput>
          <S.FotoInput>
            <svg
              width="90"
              height="90"
              viewBox="0 0 90 90"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="90" height="90" fill="#F0F0F0" />
              <path d="M45 30V60" stroke="#D9D9D9" strokeWidth="3" />
              <path d="M60 45H30" stroke="#D9D9D9" strokeWidth="3" />
            </svg>{' '}
          </S.FotoInput>
        </S.FotoContainer>
        <S.InputsLable htmlFor="price">Цена</S.InputsLable>
        <S.PriceInput
          type="number"
          name="price"
          id="price"
          //  value={name}
          //  onChange={handleChange}
        />
        <S.PriceInputSpan>₽</S.PriceInputSpan>
        <S.EnterButton
          //  disabled={    }
          onClick={() => handleClick()}
        >
          Опубликовать
        </S.EnterButton>
      </S.NewAvdForm>
    </>
  )
}
