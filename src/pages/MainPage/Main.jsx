import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { Card } from 'components/Card/Card'
import { Header } from 'components/Header/header'
import { SearchSection } from 'components/Search/SearchSection'
import { useGetAllAdvsQuery } from 'services/servicesApi'
import { Loader, Loader2 } from 'App.styles'
import * as S from './Main.styles'

// обработать ошибку загрузки

export const Main = () => {
  const { data, error, isLoading } = useGetAllAdvsQuery()
  const dfg = true
  //   getAllAds().then((data) => console.log(data))
  //   console.log(data)

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

      {isLoading ? <Loader2></Loader2> : <S.MainList>{mapAdvsList}</S.MainList>}

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
