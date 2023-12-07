import React from 'react'
import { Header } from './components/Header/header'
import * as S from './App.styles'

export const App = () => {
  return (
    <>
      <S.GlobalStyle />
      <S.Wrapper>
        <Header></Header>
        {/* <AppRoutes err={dataBaseError} /> */}
        <S.Container> </S.Container>
      </S.Wrapper>
    </>
  )
}
