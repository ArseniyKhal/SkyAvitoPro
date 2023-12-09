import { Card } from 'components/Card/Card'
import { useState } from 'react'
import { Header } from 'components/Header/header'
import { Outlet } from 'react-router-dom'
import { getAllAds } from 'api'
// import { useGetAllTodosQuery } from 'services/servicesApi'
import * as S from './Main.styles'

export const Main = () => {
  //   const { data, error, isLoading } = useGetAllTodosQuery()
  // скрытие кнопки "Наверх ↑"
  const [offSet, setOffSet] = useState('')
  window.addEventListener('scroll', () => {
    window.scrollY > 100 ? setOffSet(true) : setOffSet(false)
  })
  //   getAllAds().then((data) => console.log(data))
  return (
    <>
      <Outlet />
      <Header></Header>
      <S.Title>Объявления</S.Title>
      <S.MainList>
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </S.MainList>
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
			  
			</Container>
		 </DarkBG> */}
    </>
  )
}
