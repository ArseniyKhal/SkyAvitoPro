import { AppRoutes } from './routes'
import * as S from './App.styles'

export const App = () => {
  return (
    <>
      <S.GlobalStyle />
      <S.Wrapper>
        <S.Container>
          <AppRoutes />
        </S.Container>
      </S.Wrapper>
    </>
  )
}
