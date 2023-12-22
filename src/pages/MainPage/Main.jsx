import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { Card } from 'components/Card/Card'
import { Header } from 'components/Header/header'
import { SearchSection } from 'components/Search/SearchSection'
import { useGetAllAdvsQuery } from 'services/servicesApi'
import { Loader } from 'App.styles'
import * as S from './Main.styles'

export const Main = () => {
  const { data, isError, isLoading } = useGetAllAdvsQuery()
  const [searchAdv, setSearchAdv] = useState('')
  let advList = data
  //   console.log(data)

  // поиск объявлений
  if (searchAdv.length) {
    advList = data.filter((el) =>
      el.title.toLowerCase().includes(searchAdv.toLowerCase()),
    )
  }

  // формируем список объявлений
  const mapAdvsList = advList?.map((advCard) => {
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
      <SearchSection setSearchAdv={setSearchAdv}></SearchSection>
      <S.Title>Объявления</S.Title>

      {isLoading ? (
        <Loader></Loader>
      ) : (
        <>
          {isError ? (
            'Сервер недоступен. Попробуйте позже.'
          ) : (
            <S.MainList>{mapAdvsList}</S.MainList>
          )}
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
    </>
  )
}
