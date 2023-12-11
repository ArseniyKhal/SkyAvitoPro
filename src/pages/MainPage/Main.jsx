import { Card } from 'components/Card/Card'
import { useState } from 'react'
import { Header } from 'components/Header/header'
import { Outlet } from 'react-router-dom'
// import { getAllAds } from 'api'
import { SearchSection } from 'components/Search/SearchSection'
import { useGetAllAdvsQuery } from 'services/servicesApi'
import * as S from './Main.styles'

export const Main = () => {
  const { data, error, isLoading } = useGetAllAdvsQuery()

  //   getAllAds().then((data) => console.log(data))

  // формируем список объявлений
  const mapAdvsList = data?.map((advCard) => {
    return <Card key={advCard.id} dataCard={advCard}></Card>
  })

  // скрытие кнопки "Наверх ↑"
  const [offSet, setOffSet] = useState('')
  window.addEventListener('scroll', () => {
    window.scrollY > 100 ? setOffSet(true) : setOffSet(false)
  })

  return (
    <>
      <Outlet />
      <Header></Header>
      <SearchSection></SearchSection>
      <S.Title>Объявления</S.Title>
      <S.MainList>
        {mapAdvsList}
        {/* <Card></Card>
        <Card></Card>
        <Card></Card> */}
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
    </>
  )
}
