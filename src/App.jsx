import { AppRoutes } from './routes'
import { Header } from './components/Header/header'
import * as S from './App.styles'

export const App = () => {
  return (
    <>
      <S.GlobalStyle />
      <S.Wrapper>
        <Header></Header>
        <S.Container>
          <AppRoutes />
        </S.Container>
      </S.Wrapper>
    </>
  )
}
