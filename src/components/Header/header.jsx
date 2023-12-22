import { useState } from 'react'
import { useAuth } from 'hooks/use-auth'
import { useNavigate } from 'react-router'
import { Modal } from 'components/ModalWindow/Modal'
import { NewAdvert } from 'components/NewAdvert/NewAdvert'
import * as S from './header.styles'

export const Header = () => {
  const navigate = useNavigate()
  const { isAuth } = useAuth()
  const [isModal, setModal] = useState(false)

  return (
    <>
      <S.HeaderSection>
        <S.HeaderContainer>
          <S.HeaderContent>
            {isAuth && (
              <S.EnterButton onClick={() => setModal(true)}>
                Разместить объявление
              </S.EnterButton>
            )}
            <S.EnterButton
              onClick={() => navigate(`/${isAuth ? 'profile' : 'auth'}`)}
            >
              {isAuth ? 'Л' : 'Вход в л'}ичный кабинет
            </S.EnterButton>
          </S.HeaderContent>
        </S.HeaderContainer>
      </S.HeaderSection>
      {isModal && (
        <Modal
          childComponent={
            <NewAdvert closeFunction={setModal} titleMod="Новое"></NewAdvert>
          }
          cross={true}
          closeFunction={setModal}
        ></Modal>
      )}
    </>
  )
}
