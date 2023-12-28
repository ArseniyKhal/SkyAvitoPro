import { AppRoutes } from './routes'
import { Footer } from 'components/footer/Footer'
import * as S from './App.styles'

export const App = () => {
  return (
    <>
      <S.GlobalStyle />
      <S.Wrapper>
        <S.Container>
          <AppRoutes />
          <Footer></Footer>
        </S.Container>
      </S.Wrapper>
    </>
  )
}
