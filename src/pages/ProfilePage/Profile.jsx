import * as S from './Profile.styles'

export const Profile = () => {
  return (
    <>
      <div style={{ fontSize: '36px' }}>Страница профиля</div>

      {/* <DarkBG>
			<Container>
			  <Header></Header>
			  <S.TitleBlock>
				 <S.TitleBlockContent>
					<S.TitleBlockTitle>
					  Онлайн-тренировки для занятий дома
					</S.TitleBlockTitle>
					<S.TitleBlockSlogan>
					  Начните заниматься спортом и улучшите качество жизни
					</S.TitleBlockSlogan>
				 </S.TitleBlockContent>
				 <S.SaleSticker>
					<img src="/img/sale-sticker.png"></img>
					<S.SaleStickerText>
					  Измени своё <br /> тело за полгода
					</S.SaleStickerText>
				 </S.SaleSticker>
			  </S.TitleBlock>
			  {error && <S.BlockError>{error}</S.BlockError>}
			  {!courses && !error ? (
				 <Loader></Loader>
			  ) : (
				 <>
					<S.MainList>{mapCoursesList}</S.MainList>
				 </>
			  )}
			  {offSet && (
				 <S.MainFooter>
					<S.MainButton
					  onClick={() => {
						 window.scrollTo({ top: 0, behavior: 'smooth' })
					  }}
					>
					  Наверх ↑
					</S.MainButton>
				 </S.MainFooter>
			  )}
			</Container>
		 </DarkBG> */}
    </>
  )
}
