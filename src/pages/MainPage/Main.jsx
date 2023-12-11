import { Card } from 'components/Card/Card'
import { useState } from 'react'
import { Header } from 'components/Header/header'
import { Outlet } from 'react-router-dom'
import { getAllAds } from 'api'
import { SearchSection } from 'components/Search/SearchSection'
// import { useGetAllTodosQuery } from 'services/servicesApi'
import * as S from './Main.styles'

export const Main = () => {
  const isMain = true
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
      <SearchSection></SearchSection>
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
    </>
  )
}
