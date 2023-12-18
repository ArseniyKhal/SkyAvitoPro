// import { Link } from 'react-router-dom'
import { useRef, useState } from 'react'
// import { useDispatch } from 'react-redux'
// import { removeUser } from 'store/slices/authSlice'
import { useAuth } from 'hooks/use-auth'
import { useNavigate } from 'react-router'
import { Modal } from 'components/ModalWindow/Modal'
import { NewAvd } from 'components/NewAvd/NewAvd'
import * as S from './header.styles'

export const Header = () => {
  //   const dispatch = useDispatch()
  //   const [isProfileMenu, setProfileMenu] = useState(false)
  const navigate = useNavigate()
  const { isAuth } = useAuth()
  const [isNewAvdModal, setNewAvdModal] = useState(false)

  const handleClick = async () => {
    setNewAvdModal(true)
  }

  return (
    //  <S.Header ref={node}>
    <>
      <S.HeaderSection>
        <S.HeaderContainer>
          <S.HeaderContent>
            {!isAuth && (
              //   <Link to={'/modal'} state={{ background: location }}>
              <S.EnterButton onClick={() => navigate('/auth')}>
                {/* <S.EnterButtonSecondLine> */}
                Вход в личный кабинет
              </S.EnterButton>
              //   </Link>
            )}
            {isAuth && (
              <>
                <S.EnterButton onClick={() => handleClick()}>
                  Разместить объявление
                </S.EnterButton>
                <S.EnterButton onClick={() => navigate('/profile')}>
                  Личный кабинет
                </S.EnterButton>
              </>
            )}
          </S.HeaderContent>
        </S.HeaderContainer>
      </S.HeaderSection>
      {isNewAvdModal && (
        <Modal
          childComponent={<NewAvd></NewAvd>}
          cross={true}
          closeFunction={setNewAvdModal}
        ></Modal>
      )}
    </>
  )
}
